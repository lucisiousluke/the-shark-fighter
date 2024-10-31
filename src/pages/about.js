// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

// Step 2: Define your component
const AboutPage = () => {
  return (
    <main>
    <Layout pageTitle="About Me">
      <section className="my-20">
        <p>Hi there! I'm Luke Hinrichs the proud creator of this site, which I built with Gatsby.</p>  
      </section>
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