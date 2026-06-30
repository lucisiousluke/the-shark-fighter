import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import BackToWork from "../../components/backToWork";
import SanityProjectSection from "../../components/sanityProjectSection";

// Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const SanityPortfolioPost = ({ data }) => {
  const project = data.sanityPortfolioProject;
  const heroImageData = project.heroImageThumbnail?.asset?.gatsbyImageData;

  const gallerySlides = (project.galleryImages || []).map((img) => ({
    src: img.image?.asset?.url,
    alt: img.alt || "",
  }));

  const [isOpen, setIsOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  return (
    <Layout maxWidth="max-w-none" pageTitle={project.title}>
      <article className="prose prose-lg dark:prose-invert mx-auto">
        {/* Hero Image */}
        {heroImageData && (
          <div className="bg-slate-50 max-h-[800px] flex justify-center items-center">
            <div className="w-full h-full">
              <GatsbyImage
                image={heroImageData}
                alt={project.heroImageAlt}
                className="max-h-[650px] w-auto h-auto max-w-full object-cover object-[center_10%]"
              />
            </div>
          </div>
        )}

        <h1 className="max-w-7xl pt-20 mx-auto px-4 sm:px-6 lg:px-8 text-4xl font-bold text-cyan-500">
          {project.pageHeading || project.title}
        </h1>

        {/* Sections */}
        <div className="mt-6">
          {(project.sections || []).map((section, index) => (
            <SanityProjectSection key={section._key || index} section={section} />
          ))}
        </div>

        {/* Gallery Thumbnails */}
        {gallerySlides.length > 0 && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
            {project.galleryImages.map((img, index) => (
              <div
                key={index}
                className="cursor-pointer rounded overflow-hidden shadow hover:opacity-75 transition"
                onClick={() => {
                  setCurrentIndex(index);
                  setIsOpen(true);
                }}
              >
                <GatsbyImage
                  image={img.image.asset.gatsbyImageData}
                  alt={img.alt}
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        )}

        {/* Lightbox Modal */}
        <Lightbox
          open={isOpen}
          index={currentIndex}
          slides={gallerySlides}
          close={() => setIsOpen(false)}
          onPrev={(idx) => setCurrentIndex(idx)}
          onNext={(idx) => setCurrentIndex(idx)}
        />

        <BackToWork />
      </article>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    sanityPortfolioProject(id: { eq: $id }) {
      title
      pageHeading
      heroImageAlt
      heroImageCreditText
      heroImageThumbnail {
        asset {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      galleryImages {
        alt
        image {
          asset {
            url
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
          }
        }
      }
      sections {
        _key
        layout
        background
        centered
        _rawColumns(resolveReferences: { maxDepth: 5 })
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.sanityPortfolioProject.title} />;

export default SanityPortfolioPost;
