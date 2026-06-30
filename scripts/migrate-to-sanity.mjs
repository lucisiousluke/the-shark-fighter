// One-time migration: reads the existing /portfolio/*.mdx case studies and
// creates equivalent portfolioProject documents (with uploaded images) in Sanity.
//
// Usage: node scripts/migrate-to-sanity.mjs [--dry-run]

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";
import { toString as mdastToString } from "mdast-util-to-string";
import SanityClient from "@sanity/client";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const portfolioDir = path.join(repoRoot, "portfolio");

dotenv.config({ path: path.join(repoRoot, ".env.development") });

const DRY_RUN = process.argv.includes("--dry-run");

const client = new SanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

let keyCounter = 0;
function genKey() {
  keyCounter += 1;
  return `k${keyCounter}${Math.random().toString(36).slice(2, 8)}`;
}

const assetCache = new Map();
async function uploadImage(absPath) {
  if (!fs.existsSync(absPath)) {
    console.warn(`  ! Missing image file, skipping: ${absPath}`);
    return null;
  }
  if (assetCache.has(absPath)) return assetCache.get(absPath);
  if (DRY_RUN) {
    const fakeId = `dry-run-${path.basename(absPath)}`;
    assetCache.set(absPath, fakeId);
    return fakeId;
  }
  const buffer = fs.readFileSync(absPath);
  const filename = path.basename(absPath);
  const asset = await client.assets.upload("image", buffer, { filename });
  assetCache.set(absPath, asset._id);
  return asset._id;
}

function imageRef(assetId) {
  if (!assetId) return undefined;
  return { _type: "image", asset: { _type: "reference", _ref: assetId } };
}

function isMeaningful(node) {
  return !(node.type === "text" && !node.value?.trim());
}

function textBlock(text, style = "normal") {
  return {
    _type: "block",
    _key: genKey(),
    style,
    children: [{ _type: "span", _key: genKey(), text, marks: [] }],
    markDefs: [],
  };
}

function blockFromInline(children, style = "normal", listItem) {
  const spans = [];
  function walk(nodes, marks) {
    for (const n of nodes || []) {
      if (n.type === "text") {
        if (n.value.trim() === "") continue;
        spans.push({ _type: "span", _key: genKey(), text: n.value, marks });
      } else if (n.type === "strong") {
        walk(n.children, [...marks, "strong"]);
      } else if (n.type === "emphasis") {
        walk(n.children, [...marks, "em"]);
      } else if (n.type === "inlineCode") {
        spans.push({ _type: "span", _key: genKey(), text: n.value, marks });
      } else if (n.children) {
        walk(n.children, marks);
      } else if (n.value) {
        spans.push({ _type: "span", _key: genKey(), text: n.value, marks });
      }
    }
  }
  walk(children, []);
  const block = { _type: "block", _key: genKey(), style, children: spans, markDefs: [] };
  if (listItem) {
    block.listItem = listItem;
    block.level = 1;
  }
  return block;
}

// Markdown merges adjacent lines with no blank line between them into one
// paragraph, even when some of those lines are raw <h2>/<h3>/<p> JSX tags
// (e.g. the "Role" sidebar blocks). Split those back into separate blocks
// instead of flattening everything into one run of text.
function splitMixedParagraph(children) {
  const blocks = [];
  let pending = [];

  function flushPending() {
    if (pending.length) {
      const block = blockFromInline(pending, "normal");
      if (block.children.length) blocks.push(block);
      pending = [];
    }
  }

  for (const child of children || []) {
    const isJsxLeaf =
      (child.type === "mdxJsxTextElement" || child.type === "mdxJsxFlowElement") &&
      ["h2", "h3", "p"].includes(child.name);

    if (isJsxLeaf) {
      flushPending();
      const style = child.name === "h2" ? "h2" : child.name === "h3" ? "h3" : "normal";
      const text = mdastToString(child);
      if (text.trim()) blocks.push(textBlock(text, style));
    } else if (child.type === "text" && child.value.trim() === "") {
      continue;
    } else {
      pending.push(child);
    }
  }
  flushPending();
  return blocks;
}

function attrsToObject(attributes) {
  const obj = {};
  for (const attr of attributes || []) {
    if (attr.type !== "mdxJsxAttribute") continue;
    if (attr.value === null || attr.value === undefined) {
      obj[attr.name] = true;
    } else if (typeof attr.value === "string") {
      obj[attr.name] = attr.value;
    } else if (attr.value.type === "mdxJsxAttributeValueExpression") {
      obj[attr.name] = attr.value.value.trim() === "true";
    }
  }
  return obj;
}

function sectionLayout(attrs) {
  if (attrs.fiftyFifty) return "fiftyFifty";
  if (attrs.oneThirdTwoThird) return attrs.leftSide === true ? "oneThirdLeft" : "oneThirdRight";
  return "single";
}

function sectionBackground(attrs) {
  if (typeof attrs.bgColor === "string" && attrs.bgColor.includes("slate-50")) return "slate-50";
  return "white";
}

function sectionCentered(attrs) {
  return typeof attrs.extraClasses === "string" && attrs.extraClasses.includes("items-center");
}

async function parseColumn(nodes, projectDir) {
  const content = [];
  for (const node of nodes.filter(isMeaningful)) {
    if (node.type === "heading") {
      const style = node.depth === 2 ? "h2" : node.depth === 3 ? "h3" : "normal";
      content.push(blockFromInline(node.children, style));
    } else if (node.type === "paragraph") {
      content.push(...splitMixedParagraph(node.children));
    } else if (node.type === "list") {
      for (const item of node.children) {
        for (const child of item.children) {
          if (child.type === "paragraph") {
            content.push(blockFromInline(child.children, "normal", "bullet"));
          }
        }
      }
    } else if (node.type === "mdxJsxFlowElement" || node.type === "mdxJsxTextElement") {
      const name = node.name;
      if (name === "Image") {
        const attrs = attrsToObject(node.attributes);
        const absPath = path.join(portfolioDir, attrs.src);
        const assetId = await uploadImage(absPath);
        if (assetId) {
          content.push({
            _type: "contentImage",
            _key: genKey(),
            asset: { _type: "reference", _ref: assetId },
            alt: attrs.alt || "",
          });
        }
      } else if (name === "h2" || name === "h3") {
        content.push(textBlock(mdastToString(node), name));
      } else if (name === "p") {
        content.push(textBlock(mdastToString(node), "normal"));
      } else if (name === "div") {
        content.push(...(await parseColumn(node.children || [], projectDir)));
      }
    }
  }
  return content;
}

async function parseBody(bodyAst, projectDir) {
  let pageHeading = "";
  const sections = [];

  for (const node of bodyAst.children) {
    if (node.type === "mdxjsEsm") continue;
    if (!isMeaningful(node)) continue;

    if (node.type === "heading" && node.depth === 1 && !pageHeading) {
      pageHeading = mdastToString(node);
      continue;
    }

    if (node.type === "mdxJsxFlowElement" && node.name === "ProjectSection") {
      const attrs = attrsToObject(node.attributes);
      const meaningfulChildren = (node.children || []).filter(isMeaningful);
      const allDivs =
        meaningfulChildren.length > 0 &&
        meaningfulChildren.every((c) => c.type === "mdxJsxFlowElement" && c.name === "div");

      let columnContents;
      if (allDivs) {
        columnContents = [];
        for (const div of meaningfulChildren) {
          columnContents.push(await parseColumn((div.children || []).filter(isMeaningful), projectDir));
        }
      } else {
        columnContents = [await parseColumn(meaningfulChildren, projectDir)];
      }

      sections.push({
        _type: "projectSection",
        _key: genKey(),
        layout: sectionLayout(attrs),
        background: sectionBackground(attrs),
        centered: sectionCentered(attrs),
        columns: columnContents.map((content) => ({
          _type: "sectionColumn",
          _key: genKey(),
          content,
        })),
      });
    }
  }

  return { pageHeading, sections };
}

function buildExcerpt(sections) {
  for (const section of sections) {
    for (const column of section.columns) {
      const firstParagraph = column.content.find(
        (block) => block._type === "block" && block.style === "normal" && !block.listItem
      );
      if (firstParagraph) {
        const text = firstParagraph.children.map((c) => c.text).join("");
        return text.length > 200 ? `${text.slice(0, 197)}...` : text;
      }
    }
  }
  return "";
}

async function migrateProject(projectFolder) {
  const projectDir = path.join(portfolioDir, projectFolder);
  const files = fs.readdirSync(projectDir).filter((f) => f.endsWith(".mdx"));
  if (files.length === 0) return;

  const mdxPath = path.join(projectDir, files[0]);
  console.log(`\n=== ${projectFolder} (${files[0]}) ===`);

  const raw = fs.readFileSync(mdxPath, "utf8");
  const { data: frontmatter, content: body } = matter(raw);

  const tree = unified().use(remarkParse).use(remarkMdx).parse(body);
  const { pageHeading, sections } = await parseBody(tree, projectDir);

  console.log(`  Title: ${frontmatter.title}`);
  console.log(`  Page heading: ${pageHeading}`);
  console.log(`  Sections parsed: ${sections.length}`);

  if (process.env.DEBUG_SECTIONS) {
    const debugPath = path.join(repoRoot, `tmp-debug-${projectFolder}.json`);
    fs.writeFileSync(debugPath, JSON.stringify({ pageHeading, sections }, null, 2));
    console.log(`  Debug JSON written to ${debugPath}`);
  }

  const heroImageAssetId = frontmatter.hero_image
    ? await uploadImage(path.join(projectDir, frontmatter.hero_image))
    : null;
  const heroImageThumbnailAssetId = frontmatter.hero_image_thumbnail
    ? await uploadImage(path.join(projectDir, frontmatter.hero_image_thumbnail))
    : null;

  const galleryImages = [];
  for (const g of frontmatter.gallery_images || []) {
    const assetId = await uploadImage(path.join(projectDir, g.image));
    if (assetId) {
      galleryImages.push({
        _type: "galleryImage",
        _key: genKey(),
        image: imageRef(assetId),
        alt: g.alt || "",
      });
    }
  }

  const doc = {
    _id: `portfolioProject-${frontmatter.slug}`,
    _type: "portfolioProject",
    title: frontmatter.title,
    pageHeading,
    slug: { _type: "slug", current: frontmatter.slug },
    sortOrder: frontmatter.sortOrder ?? 0,
    excerpt: buildExcerpt(sections),
    heroImage: imageRef(heroImageAssetId),
    heroImageThumbnail: imageRef(heroImageThumbnailAssetId),
    heroImageAlt: frontmatter.hero_image_alt || "",
    heroImageCreditText: frontmatter.hero_image_credit_text || "",
    galleryImages,
    sections,
  };

  if (DRY_RUN) {
    console.log(`  [dry run] Would create/replace document _id=${doc._id}`);
    console.log(`  [dry run] Images that would be uploaded: ${assetCache.size} total so far`);
    return;
  }

  const result = await client.createOrReplace(doc);
  console.log(`  Created/updated: ${result._id}`);
}

async function main() {
  if (!process.env.SANITY_PROJECT_ID || !process.env.SANITY_TOKEN) {
    console.error("Missing SANITY_PROJECT_ID or SANITY_TOKEN in .env.development");
    process.exit(1);
  }

  const onlyArg = process.argv.find((a) => a.startsWith("--only="));
  const only = onlyArg ? onlyArg.split("=")[1] : null;

  let projectFolders = fs
    .readdirSync(portfolioDir)
    .filter((f) => fs.statSync(path.join(portfolioDir, f)).isDirectory());

  if (only) projectFolders = projectFolders.filter((f) => f === only);

  console.log(`Found ${projectFolders.length} project folders: ${projectFolders.join(", ")}`);
  if (DRY_RUN) console.log("DRY RUN — no documents or images will be written to Sanity.\n");

  for (const folder of projectFolders) {
    await migrateProject(folder);
  }

  console.log(`\nDone. ${assetCache.size} unique images processed.`);
}

main().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
