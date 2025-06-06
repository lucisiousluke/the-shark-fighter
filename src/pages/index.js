// Step 1: Import React
import * as React from "react";
import Seo from "../components/seo";
import { Contact } from "../components/contactMe";
import { Link, graphql } from "gatsby";
import BackgroundSection from "../components/backgroundImage";
import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import UxResearchIcon from "../images/svg/ux-research-icon.svg";
import BrandManagementIcon from "../images/svg/brand-management-icon.svg";
import WebDevelopmentIcon from "../images/svg/web-development-icon.svg";
import WebDesignIcon from "../images/svg/web-design-icon.svg";

// Step 2: Define your component
const IndexPage = ({ data }) => {
  const image = getImage(data.uxPreformanceImage);

  return (
    <main>
      <Layout>
        <section className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] 
-translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#06b6d4] to-[#06b6d4] 
opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="max-w-2xl py-20 sm:py-20 lg:py-20">
              <h1 className="text-4xl font-bold tracking-tight text-cyan-500 sm:text-6xl">
                UX experience to enrich your online business
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lets see how I can help you expand your brand.
              </p>
              <div className="mt-10">
                <Link
                  to="/portfolio"
                  className="rounded-md border-solid border-2 border-rose-500 px-3.5 py-2.5 text-sm font-semibold text-rose-500 shadow-sm hover:bg-rose-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  View Portfolio
                </Link>
              </div>
            </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#06b6d4] to-[#06b6d4] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </section>
        <section>
          <div className="flex flex-wrap gap-8 justify-center">
            <div className="w-full sm:w-1/2 lg:w-1/5 p-5 bg-gradient-to-r from-cyan-400 via-cyan-500 to-pink-500 bg-[length:200%_100%] bg-[position:left_center] rounded-xl min-h-40">
              <UxResearchIcon className="w-20 h-20 fill-white mx-auto" />
              <h3 className="mt-10 text-white text-2xl text-center">UX Research</h3>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/5 p-5 bg-gradient-to-r from-cyan-400 via-cyan-500 to-pink-500 bg-[length:200%_100%] bg-[position:left_center] rounded-xl min-h-40">
              <BrandManagementIcon className="w-20 h-20 fill-white mx-auto" />
              <h3 className="mt-10 text-white text-2xl text-center">Brand Management</h3>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/5 p-5 bg-gradient-to-r from-cyan-400 via-cyan-500 to-pink-500 bg-[length:200%_100%] bg-[position:left_center] rounded-xl min-h-40">
              <WebDevelopmentIcon className="w-20 h-20 fill-white mx-auto" />
              <h3 className="mt-10 text-white text-2xl text-center">Web Development</h3>
            </div>

            <div className="w-full sm:w-1/2 lg:w-1/5 p-5 bg-gradient-to-r from-cyan-400 via-cyan-500 to-pink-500 bg-[length:200%_100%] bg-[position:left_center] rounded-xl min-h-40">
              <WebDesignIcon className="w-20 h-20 fill-white mx-auto" />
              <h3 className="mt-10 text-white text-2xl text-center">UI Design</h3>
            </div>
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 my-20">
          <div>
            <GatsbyImage image={image} className="rounded-xl" />
          </div>
          <div className="p-5 text-center md:text-right">
            <h2 className="text-4xl mb-4">UX performance</h2>
            <p className="text-5xl font-extrabold text-cyan-500 mb-4">
              Time to enrich your business' identity
            </p>
            <p className="font-thin text-base/8">
              Creating intuitive, user-friendly experiences that drive engagement and customer satisfaction. Through research, usability testing, and data-driven design, I identify pain points and optimize workflows to streamline interactions.
            </p>
            <div className="mt-6">
              <Link
                className="bg-transparent hover:bg-rose-400 hover:text-white text-rose-400 font-semibold px-3.5 py-2.5 border border-rose-400 rounded-lg shadow"
                to="/portfolio"
              >
                Visit Portfolio
              </Link>
            </div>
          </div>
        </section>
        <section className="relative w-full h-96">
          <section>
            <BackgroundSection
              imageData={data.backgroundImage.childImageSharp.gatsbyImageData}
              overlayImageData={
                data.overlayImage?.childImageSharp?.gatsbyImageData
              }
            >
              <div className="absolute inset-0 flex items-center justify-center z-10"></div>
            </BackgroundSection>
          </section>
        </section>
        <Contact />
      </Layout>
    </main>
  );
};

export const query = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "yellow-sticky-notes.webp" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
    overlayImage: file(relativePath: { eq: "hubble-desktop-knockout.webp" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
    uxPreformanceImage: file(relativePath: { eq: "bio-techne-desktop.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
`;

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />;

// Step 3: Export your component
export default IndexPage;
