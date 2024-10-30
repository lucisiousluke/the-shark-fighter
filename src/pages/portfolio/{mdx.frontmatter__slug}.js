import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import BackToWork from '../../components/backToWork'

const PortfolioPost = ({ data, children }) => {
    const image = getImage (data.mdx.frontmatter.hero_image)

    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <h1 className="text-3xl font-bold siteTitle">{data.mdx.frontmatter.title}</h1>  
            <GatsbyImage className="rounded-lg" image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
            />
            <p>Posted: {data.mdx.frontmatter.date}</p>
            <p>
                {/* Play with the Photo Credit line later */}
                Photo Credit: {" "}
                <p href={data.mdx.frontmatter.hero_image_alt}>
                    {data.mdx.frontmatter.hero_image_credit_text}
                </p>
            </p>
            {children}
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