import * as React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PageTitle from '../components/pageTitle'

const ContactPage = ({data}) => {
    const image = getImage(data.yourImage);

    return (
        <main>
            <Layout>
                <PageTitle
                    pageTitle="Contact Me"
                    pageDescription="Think I can help? Reach out."
                />
                <section className="grid grid-cols-4 gap-4 max-w-7xl mx-auto my-20 h-96">
                    <div className="bg-slate-50 text-white rounded-lg col-span-3 p-6">
                        <h1 className="text-3xl font-thin mb-2 text-cyan-500">Contact Me</h1>
                        <p className="text-slate-500">UX/UI research, web developent, brand management</p>
                        <div className="grid grid-cols-2 gap-4 mt-5">
                            <div>
                                <h2 className="font-bold text-cyan-500">Phone number</h2>
                                <a className="hover:underline text-slate-500" href="tel:3033969904">303-396-9904</a>
                            </div>
                            <div>
                                <h2 className="font-bold text-cyan-500">Email</h2>
                                <a className="hover:underline text-slate-500" href="mailto:luke.hinrichs@gmail.com">luke.hinrichs@gmail.com</a>
                            </div>
                            <div>
                                <h2 className="font-bold text-cyan-500">Location</h2>
                                <p className="text-slate-500">Denver, Co</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg overflow-hidden">
                        <GatsbyImage 
                        image={image} 
                        alt="Black and white wrestler"
                        className="w-full h-full object-cover object-left"
                        />
                    </div>
                </section>
            </Layout>
        </main>
    )
}

export const query = graphql`
query {
    yourImage: file(relativePath: { eq: "black-white-wrestler.webp" }) {
      childImageSharp {
        gatsbyImageData(width: 800, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
      }
    }
  }
`

export default ContactPage 