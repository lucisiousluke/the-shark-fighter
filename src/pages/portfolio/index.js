import * as React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import PageTitle from "../../components/pageTitle";

const PortfolioIndex = ({ data }) => {
  return (
    <Layout>
      <PageTitle
        pageTitle="My work"
        pageDescription="Not too bad if I do say so myself"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto my-20">
        {data.allMdx.nodes.map((node) => {
          const thumbnail = getImage(node.frontmatter.hero_image);
          return (
            <article key={node.id}>
              {/* Thumbnail links to portfolio page */}
              <Link to={`/portfolio/${node.frontmatter.slug}`}>
                {thumbnail && (
                  <GatsbyImage
                    image={thumbnail}
                    alt={node.frontmatter.title}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                )}
              </Link>

              <div className="mx-5 mt-4 mb-6">
                <h2 className="font-thin text-3xl mb-1 text-cyan-500">
                  <Link to={`/portfolio/${node.frontmatter.slug}`}>
                    {node.frontmatter.title}
                  </Link>
                </h2>
                <p className="text-slate-500">{node.excerpt}</p>
              </div>
            </article>
          );
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { sortOrder: DESC } }) {
      nodes {
        frontmatter {
          sortOrder
          title
          slug
          hero_image {
            publicURL
            childImageSharp {
              gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
            }
          }
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="My Portfolio" />;

export default PortfolioIndex;
