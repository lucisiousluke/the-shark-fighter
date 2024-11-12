// Step 1: Import React
import * as React from "react";
import IconGrid from "../components/iconGrid";
import Layout from "../components/layout";
import PageTitle from "../components/pageTitle";
import Seo from "../components/seo";
import SplitScreen from "../components/splitScreen";

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
      <Layout>
        <PageTitle
          pageTitle="About Me"
          pageDescription="Maximize UX preformance. Minimize shark attacks"
        />
        <SplitScreen
          leftContent={
            <p>Custom content for the left side, specific to the About page.</p>
          }
          rightContent={
            <div>
              <p className="my-3">
                With a passion for UX/UI management and a love for tackling new
                ideas and technologies, I thrive on pushing creative boundaries
                both in the corporate world and beyond. Outside of work, you’ll
                find me competing in Brazilian Jiu-Jitsu, chasing warm weather,
                exploring new destinations, or simply enjoying anything that
                involves a beach. I believe in balancing hard work with
                meaningful adventures—however, I may be a Colorado Native, but
                you'd be hard pressed to find me on a ski slope.
              </p>
            </div>
          }
        />
         <PageTitle 
        pageTitle="Maybe you've seen me someplace"
        pageDescription="Brands I've been apart of"
        />
        <IconGrid />
        <PageTitle 
        pageTitle="I have a very particular set of skills"
        pageDescription="A bit of what I do"
        />
        <div className="grid grid-cols-4 gap-20 my-20">
          <div>
            <h2 className="text-xl text-cyan-500">UX Research</h2>
              <ul className="font-thin text-slate-500 leading-7">
                <li>
                  Analytics data research
                </li>
                <li>
                  User testing focus groups
                </li>
                <li>
                  Heat mapping
                </li>
              </ul>
          </div>
          <div>
            <h2 className="text-xl text-cyan-500">Brand Management</h2>
            <ul className="font-thin text-slate-500 leading-7">
              <li>
                Builds and maintains a brand’s identity
              </li>
              <li>
                Ensures consistency in messaging & customer
                experience
              </li>
              <li>
                Monitors brand perception in the market
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl text-cyan-500">Web Design</h2>
            <ul className="font-thin text-slate-500 leading-7">
              <li>
                Focuses on creating visually appealing, user-friendly interfaces.
              </li>
              <li>
                Prioritizes responsive design to provide a seamless experience.
              </li>
              <li>
                Emphasizes accessibility and usability.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl text-cyan-500">SEO</h2>
            <ul className="font-thin text-slate-500 leading-7">
              <li>
                Improves a website’s structure and content.
              </li>
              <li>
                Optimizes technical SEO, including site speed.
              </li>
              <li>
                Monitors performance metrics.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl text-cyan-500">Web Development</h2>
            <ul className="font-thin text-slate-500 leading-7">
              <li>
                Transforms web designs into functional websites.
              </li>
              <li>
                Ensures website functionality across devices.
              </li>
              <li>
                Collaborates with designers and developers.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl text-cyan-500">Art Direction</h2>
            <ul className="font-thin text-slate-500 leading-7">
              <li>
                Leads the visual concept and aesthetics.
              </li>
              <li>
                Guides the selection of design elements.
              </li>
              <li>
                Work to communicate the intended message and emotion.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl text-cyan-500">Project Management</h2>
            <ul className="font-thin text-slate-500 leading-7">
              <li>
                Plans, organizes, and oversees projects ensuring timely delivery.
              </li>
              <li>
                Coordinates cross-functional teams, keeping communication clear.
              </li>
              <li>
                Monitors project progress, mitigates risks, and adjusts
                strategies.
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl text-cyan-500">User Testing</h2>
            <ul className="font-thin text-slate-500 leading-7">
              <li>
                Engaged real users to test features or products.
              </li>
              <li>
                Identifies pain points, usability issues, and improvement opportunities.
              </li>
              <li>
                Analyzes user interactions to refine the product.
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export const Head = () => (
  <>
    <Seo title="About Me" />
    <meta name="description" content="your description" />
  </>
);

// Step 3: Export your component
export default AboutPage;
