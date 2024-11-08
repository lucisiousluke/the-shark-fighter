// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Contact } from '../components/contactMe'
import { Link, graphql } from 'gatsby'
import BackgroundSection from '../components/backgroundImage'

// Step 2: Define your component
const IndexPage = ({ data }) => {  
  console.log(data)

  return (
    <main>
      <Layout>
        <section className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="max-w-2xl py-20 sm:py-20 lg:py-20">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              UX experience to enrich your online business
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              See how I can help grow your brand
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                to="/portfolio"
                className="rounded-md border-solid border-2 border-rose-500 px-3.5 py-2.5 text-sm font-semibold text-rose-500 shadow-sm hover:bg-rose-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </section>
      <section className="my-20 flex flex-row justify-space xxs:flex-col xs:flex-col sm:flex-row content-center justify-center align-middle text-center">
        <div className="w-1/3 bg-gradient-to-r from-pink to-purple p-8 rounded-xl my-5 mx-5 xxs:w-full xs:w-full sm:w-1/3 bg-slate-300">
          <h4 className="opacity-70 text-xl">Icon+</h4>
          <h3 className="mt-10 text-black text-2xl">UX Research</h3>
          </div>
          <div className="w-1/3 bg-dp p-8 rounded-xl my-5 mx-5 xxs:w-full xs:w-full sm:w-1/3 bg-slate-300">
            <h4 className="text-white opacity-70 text-xl">Icon+</h4>
            <h3 className="mt-10 text-white text-2xl">Brand Management</h3>
          </div>
            <div className="w-1/3 bg-dp p-8 rounded-xl my-5 mx-5 xxs:w-full xs:w-full sm:w-1/3 bg-slate-300">
              <h4 className="text-white opacity-70 text-xl">Icon+</h4>
              <h3 className="mt-10 text-white text-2xl">Web Development</h3>
            </div>
            <div className="lg:rounded-xl lg:w-1/3 lg:bg-dp bg-dp p-8 rounded-xl my-5 mx-5 xxs:w-full xxs:bg-dp xxs:rounded-xl xs:w-full xs:bg-dp xs:rounded-xl sm:hidden md:hidden lg:block bg-slate-300">
              <h4 className="text-white opacity-70 text-xl">Icon+</h4>
              <h3 className="mt-10 text-white text-2xl">UI Design</h3>
            </div>
         </section>
        <section className="grid grid-cols-2 gap-4 my-6">
          <div>
          <h2 className="text-2xl border rounded-xl">rounded image section</h2>
          </div>
          <div className="p-5 text-right">
            <h2 className="text-4xl mb-4">UX preformance</h2>
            <p className="text-5xl font-extrabold text-cyan-500 mb-4">Time to enrich your business' identity</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <div className="mt-6">
              <Link className="bg-transparent hover:bg-rose-400 hover:text-white text-rose-400 font-semibold px-3.5 py-2.5 border border-rose-400 rounded-lg shadow" to='/portfolio'>Visit Portfolio</Link>
            </div>
          </div>
          </section>
          <section className="relative w-full h-96">
          <BackgroundSection
            imageData={data.backgroundImage.childImageSharp.gatsbyImageData}
            overlayImageData={data.overlayImage?.childImageSharp?.gatsbyImageData}
          >
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <h1 className="text-white text-4xl font-bold text-center">Welcome to My Site</h1>
            </div>
          </BackgroundSection>
          </section>
         <Contact />
      </Layout>
    </main>
  )
}


export const query = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "process-background.webp" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
      }
    }
    overlayImage: file(relativePath: { eq: "yellow-sticky-notes.webp" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
      }
    }
  }
`;



// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />

// Step 3: Export your component
export default IndexPage