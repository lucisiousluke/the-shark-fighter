import React from "react";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder({
  projectId: process.env.GATSBY_SANITY_PROJECT_ID,
  dataset: process.env.GATSBY_SANITY_DATASET || "production",
});

const components = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-3xl font-thin font-semibold mb-4 text-cyan-500">
        {children}
      </h2>
    ),
    h3: ({ children }) => <h3 className="text-xl font-thin mt-4">{children}</h3>,
    normal: ({ children }) => <p className="font-thin text-base/8">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="font-thin ml-4 list-disc mb-4">{children}</ul>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mt-2">{children}</li>,
  },
  types: {
    contentImage: ({ value }) => (
      <img
        src={builder.image(value).width(1200).auto("format").url()}
        alt={value.alt || ""}
        className="w-full rounded-lg mb-6"
      />
    ),
  },
};

const PortableTextRenderer = ({ content }) => {
  if (!content) return null;
  return <PortableText value={content} components={components} />;
};

export default PortableTextRenderer;
