import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Image = ({ src, alt, className }) => {
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

  const imageNode = data.allFile.nodes.find((node) => node.relativePath === src);
  if (!imageNode) return <p className="text-red-500">Image not found: {src}</p>;

  return <GatsbyImage image={getImage(imageNode)} alt={alt} className={className} />;
};

export default Image;
