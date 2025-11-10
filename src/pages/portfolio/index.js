import * as React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import PageTitle from "../../components/pageTitle";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const PortfolioPost = ({ data }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [photoIndex, setPhotoIndex] = React.useState(0);

  // Collect all hero_image URLs for lightbox
  const images = data.allMdx.nodes.map(
    (node) => ({ src: node.frontmatter.hero_image.publicURL })
  );

  return (
    <Layout>
      <PageTitle
        pageTitle="My work"
        pageDescription="Not too bad if I do say so myself"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto my-20">
        {data.allMdx.nodes.map((node, index) => {
          const portfolioThumbnail = getImage(node.frontmatter.hero_image);
          const excerpt = node.excerpt;

          return (
            <article key={node.id}>
              <div
                className="rounded cursor-pointer"
                onClick={() => {
                  setPhotoIndex(index);
                  setIsOpen(true);
                }}
              >
                {portfolioThumbnail && (
                  <GatsbyImage
                    image={portfolioThumbnail}
                    alt={node.frontmatter.title}
                    className="rounded-lg h-64 w-full object-cover"
                  />
                )}
              </div>
              <div className="mx-5 mt-4 mb-6">
                <h2 className="font-thin text-3xl mb-1 text-cyan-500">
                  <Link
                    to={`/portfolio/${node.frontmatter.slug}`}
                    state={{ galleryImages: node.frontmatter.gallery_images }}
                  >
                    {node.frontmatter.title}
                  </Link>
                </h2>
                <p className="text-slate-500">{excerpt}</p>
              </div>
            </article>
          );
        })}

        {isOpen && (
          <Lightbox
            open={isOpen}
            index={photoIndex}
            slides={images}
            onClose={() => setIsOpen(false)}
          />
        )}
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
              gatsbyImageData
            }
          }
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default PortfolioPost;
