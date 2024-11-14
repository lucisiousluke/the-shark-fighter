// Step 1: Import React
import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import PageTitle from "../components/pageTitle";
import BackToWork from "../components/backToWork";
import Seo from "../components/seo";
import SkillsGrid from "../components/skillsGrid";
import SplitScreen from "../components/splitScreen";
import uxResearchIcon from "../images/svg/ux-research-icon.svg"
import artDirectionIcon from "../images/svg/art-direction-icon.svg"
import webDesignIcon from "../images/svg/web-design-icon.svg"
import SEO from "../images/svg/seo-icon.svg"
import webDevelopment from "../images/svg/web-development-icon.svg"
import brandManagement from "../images/svg/brand-management-icon.svg"
import projectManagement from "../images/svg/project-management-icon.svg"
import userTesting from "../images/svg/user-testing-icon.svg"


// Step 2: Define your component
const AboutPage = ({ data }) => {
  const skills = [
    {
      id: '1',
      icon: uxResearchIcon, // Now using the name of the imported SVG
      title: 'UX Research',
      bulletPoints: [
        'Proficient in Figma and Sketch',
        'Focus on accessibility and usability',
        'Experienced in responsive design',
      ],
    },
    {
      id: '2',
      icon: brandManagement, // Example with another skill
      title: 'Brand Management',
      bulletPoints: [
        'Builds and maintains a brand’s identity',
        'Ensures consistency in messaging & customer experience',
        'Monitors brand perception in the market',
      ],
    },
    {
      id: '3',
      icon: webDesignIcon,
      title: 'Web Design',
      bulletPoints: [
        'Focuses on creating visually appealing, user-friendly interfaces.',
        'Prioritizes responsive design to provide a seamless experience.',
        'Emphasizes accessibility and usability.',
      ],
    },
    {
      id: '4',
      icon: SEO,
      title: 'SEO',
      bulletPoints: [
        'Improves a website’s structure and content.',
        'Optimizes technical SEO, including site speed.',
        'Monitors performance metrics.',
      ],
    },
    {
      id: '5',
      icon: webDevelopment,
      title: 'Web Development',
      bulletPoints: [
        'Transforms web designs into functional websites.',
        'Ensures website functionality across devices.',
        'Collaborates with designers and developers.',
      ],
    },
    {
      id: '6',
      icon: artDirectionIcon,
      title: 'Art Direction',
      bulletPoints: [
        ' Leads the visual concept and aesthetics.',
        'Guides the selection of design elements.',
        'Work to communicate the intended message and emotion.',
      ],
    },
    {
      id: '7',
      icon: projectManagement,
      title: 'Project Management',
      bulletPoints: [
        'Plans, organizes, and oversees projects ensuring timely delivery.',
        'Coordinates cross-functional teams, keeping communication clear.',
        'Monitors project progress, mitigates risks, and adjusts strategies.',
      ],
    },
    {
      id: '8',
      icon: userTesting,
      title: "User Testing",
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
              I’m passionate about UX/UI management and love exploring new ideas and technologies, pushing creative boundaries 
              both in and out of the corporate world. But here’s the real story: my true passions are Brazilian Jiu-Jitsu, traveling 
              to warm beaches, and embracing new experiences. I believe talent is valuable, but dedication drives success. I love what 
              I do, though nothing raises my blood pressure like poor UX.</p>

              <p>And as for all the wrestling photos—oh yeah, you might be wondering why! Well, let me tell you, 
                brother—it’s not just about the intensity and charisma of the ring. I use them because I simply 
                love the thrill and showmanship of pro wrestling. Like in life, the cream always rises to the top! Oooh yeah!</p>
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
        <BackToWork />
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
