import * as React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import PageTitle from "../../components/pageTitle";

const SanityPortfolioIndex = ({ data }) => {
  return (
    <Layout>
      <PageTitle
        pageTitle="UX Leadership in Action"
        pageDescription="Not too bad if I do say so myself"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-20">
        {data.allSanityPortfolioProject.nodes.map((node) => {
          const thumbnail = node.heroImage?.asset?.gatsbyImageData;
          return (
            <article key={node.id}>
              <Link to={`/portfolio/${node.slug.current}`}>
                {thumbnail && (
                  <GatsbyImage
                    image={thumbnail}
                    alt={node.title}
                    className="rounded-lg w-full h-48 object-cover"
                  />
                )}
              </Link>

              <div className="mx-5 mt-4 mb-6">
                <h2 className="font-thin text-3xl mb-1 text-cyan-500">
                  <Link to={`/portfolio/${node.slug.current}`}>{node.title}</Link>
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
    allSanityPortfolioProject(sort: { sortOrder: DESC }) {
      nodes {
        id
        title
        excerpt
        sortOrder
        slug {
          current
        }
        heroImage {
          asset {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

export const Head = () => <Seo title="My Portfolio" />;

export default SanityPortfolioIndex;
