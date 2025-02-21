import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Image = ({ src, alt = "", className = "" }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "portfolio" } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 800)
          }
        }
      }
    }
  `);

  // Remove "./" from MDX image paths to match GraphQL query
  const normalizedSrc = src.replace(/^.\//, "");
  const imageNode = data.allFile.nodes.find((node) => node.relativePath === normalizedSrc);

  if (!imageNode) return <p className="text-red-500">Image not found: {normalizedSrc}</p>;

  return <GatsbyImage image={getImage(imageNode)} alt={alt} className={className} />;
};

export default Image;
