import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { MDXProvider } from '@mdx-js/react'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import BackToWork from '../../components/backToWork'
import Image from "../../components/images"

const PortfolioPost = ({ data, children }) => {
    const { mdx } = data;
    const image = getImage (data.mdx.frontmatter.hero_image)
    console.log(children);

    return (
      <Layout pageTitle={mdx.frontmatter.title}>
      <article className="prose prose-lg dark:prose-invert mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold">{mdx.frontmatter.title}</h1>

        {image && (
          <GatsbyImage
            className="rounded-lg shadow-lg"
            image={image}
            alt={mdx.frontmatter.hero_image_alt}
          />
        )}

        <p className="text-gray-600 text-sm">Posted: {mdx.frontmatter.date}</p>
        <p className="text-gray-500 italic">
          Photo Credit: {mdx.frontmatter.hero_image_credit_text}
        </p>

        {/* Allow MDX to use <Image /> inside body content */}
        <MDXProvider components={{ Image }}>
          <div className="mt-6">{children}</div>
        </MDXProvider>

        <BackToWork />
      </article>
    </Layout>
    )
}

export const query = graphql`
query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        hero_image_alt
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title}/>

export default PortfolioPost