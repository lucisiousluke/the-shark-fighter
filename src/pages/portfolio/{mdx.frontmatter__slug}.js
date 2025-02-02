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
    const image = getImage(data.mdx.frontmatter.hero_image);

    return (
      <Layout pageTitle={mdx.frontmatter.title}>
        <MDXProvider 
          components={{ 
            Image, 
            h1: (props) => <h1 className="text-3xl font-bold text-cyan-500" {...props} />,
            h2: (props) => <h2 className="text-2xl font-semibold mt-6 text-cyan-500" {...props} />,
            h3: (props) => <h3 className="text-xl font-medium mt-4" {...props} />,
            ul: (props) => <ul className="list-disc list-inside" {...props} />,
          }}
        >
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

            <div className="mt-6">{children}</div>

            <BackToWork />
          </article>
        </MDXProvider>
      </Layout>
    );
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

export default PortfolioPost;
