// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import PageTitle from '../components/pageTitle'
import Seo from '../components/seo'
import SplitScreen from '../components/splitScreen'

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
          <p className="my-3">With a passion for UX/UI management and a love for tackling new ideas and technologies, 
          I thrive on pushing creative boundaries both in the corporate world and beyond. Outside of work, you’ll find me 
          competing in Brazilian Jiu-Jitsu, chasing warm weather, exploring new destinations, or simply enjoying anything that 
          involves a beach. I believe in balancing hard work with meaningful adventures—however, I may be a Colorado Native, but you'd be hard 
          pressed to find me on a ski slope.</p>
          </div>
        }
      />
    </Layout>      
    </main>
  )
}

export const Head = () => (
  <>
 <Seo title="About Me" />
 <meta name="description" content="your description"/>
 </>
 )

// Step 3: Export your component
export default AboutPage