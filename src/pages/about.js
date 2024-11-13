// Step 1: Import React
import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PageTitle from "../components/pageTitle";
import Seo from "../components/seo";
import SkillsGrid from "../components/skillsGrid";
import SplitScreen from "../components/splitScreen";


// Step 2: Define your component
const AboutPage = ({ data }) => {
  const skills = [
    {
      id: '1',
      icon: data.uxResearchIcon.publicURL,
      title: 'UI Design',
      bulletPoints: [
        'Proficient in Figma and Sketch',
        'Focus on accessibility and usability',
        'Experienced in responsive design',
      ],
    },
    {
      id: '2',
      icon: data.artDirectionIcon.publicURL,
      title: 'Brand Management',
      bulletPoints: [
        'Builds and maintains a brand’s identity',
        'Ensures consistency in messaging & customer experience',
        'Monitors brand perception in the market',
      ],
    },
    {
      id: '3',
      icon: data.artDirectionIcon.publicURL,
      title: 'Web Design',
      bulletPoints: [
        'Focuses on creating visually appealing, user-friendly interfaces.',
        'Prioritizes responsive design to provide a seamless experience.',
        'Emphasizes accessibility and usability.',
      ],
    },
    {
      id: '4',
      icon: data.artDirectionIcon.publicURL,
      title: 'SEO',
      bulletPoints: [
        'Improves a website’s structure and content.',
        'Optimizes technical SEO, including site speed.',
        'Monitors performance metrics.',
      ],
    },
    {
      id: '5',
      icon: data.artDirectionIcon.publicURL,
      title: 'Web Development',
      bulletPoints: [
        'Transforms web designs into functional websites.',
        'Ensures website functionality across devices.',
        'Collaborates with designers and developers.',
      ],
    },
    {
      id: '6',
      icon: data.artDirectionIcon.publicURL,
      title: 'Art Direction',
      bulletPoints: [
        ' Leads the visual concept and aesthetics.',
        'Guides the selection of design elements.',
        'Work to communicate the intended message and emotion.',
      ],
    },
    {
      id: '7',
      icon: data.artDirectionIcon.publicURL,
      title: 'Project Management',
      bulletPoints: [
        'Plans, organizes, and oversees projects ensuring timely delivery.',
        'Coordinates cross-functional teams, keeping communication clear.',
        'Monitors project progress, mitigates risks, and adjusts strategies.',
      ],
    },
    {
      id: '8',
      icon: data.artDirectionIcon.publicURL,
      title: 'User Testing',
      bulletPoints: [
        'Engaged real users to test features or products.',
        'Identifies pain points, usability issues, and improvement opportunities.',
        'Analyzes user interactions to refine the product.',
      ],
    },
    // Add more skills as needed
  ];
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
        <PageTitle 
        pageTitle="I have a very particular set of skills"
        pageDescription="A bit of what I do"
        />
        <SkillsGrid 
        skills={skills}
        />
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
export const query = graphql`
query {
  uxResearchIcon: file(relativePath: { eq: "svg/ux-research-icon.svg" }) {
    publicURL
  }
 	artDirectionIcon: file(relativePath: { eq: "svg/art-direction-icon.svg" }) {
    publicURL
  }
}
`;

// Step 3: Export your component
export default AboutPage;
