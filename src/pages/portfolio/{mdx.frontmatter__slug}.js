import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXProvider } from "@mdx-js/react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import BackToWork from "../../components/backToWork";
import Image from "../../components/images";
import Lightbox from "../../components/lightBox";

const PortfolioPost = ({ data, children }) => {
  const { mdx } = data;
  const heroImage = getImage(mdx.frontmatter.hero_image_thumbnail);
  const galleryImages = mdx.frontmatter.gallery_images || [];

  return (
    <Layout maxWidth="max-w-none" pageTitle={mdx.frontmatter.title}>
      <MDXProvider
        components={{
          Image,
          h1: (props) => (
            <h1
              className="max-w-7xl pt-20 mx-auto text-4xl font-bold text-cyan-500"
              {...props}
            />
          ),
          h2: (props) => (
            <h2
              className="text-3xl font-thin font-semibold mb-4 text-cyan-500"
              {...props}
            />
          ),
          h3: (props) => <h3 className="text-xl font-thin mt-4" {...props} />,
          p: (props) => <p className="font-thin text-base/8" {...props} />,
          ul: (props) => (
            <ul className="font-thin ml-4 list-disc mb-4" {...props} />
          ),
          li: (props) => <li className="mt-2" {...props} />,
        }}
      >
        <article className="prose prose-lg dark:prose-invert mx-auto">
          {heroImage && (
            <div className="bg-slate-50 max-h-[800px] flex justify-center items-center">
              <div className="w-full h-full">
                <GatsbyImage
                  className="max-h-[650px] w-auto h-auto max-w-full object-cover object-[center_10%]"
                  image={heroImage}
                  alt={mdx.frontmatter.hero_image_alt}
                />
              </div>
            </div>
          )}

          <div className="mt-6">{children}</div>

          {/* Lightbox Gallery */}
          {galleryImages.length > 0 && <Lightbox images={galleryImages} />}

          <BackToWork />
        </article>
      </MDXProvider>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        hero_image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
        hero_image_thumbnail {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
        hero_image_alt
        gallery_images {
          image {
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
          alt
        }
      }
      body
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default PortfolioPost;
