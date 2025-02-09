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
      <Layout maxWidth="max-w-none" pageTitle={mdx.frontmatter.title}>
        <MDXProvider 
          components={{ 
            Image, 
            h1: (props) => <h1 className="text-3xl font-bold text-cyan-500" {...props} />,
            h2: (props) => <h2 className="text-3xl font-thin font-semibold mt-8 mb-4 text-cyan-500" {...props} />,
            h3: (props) => <h3 className="text-xl font-thin mt-4" {...props} />,
            p: (props) => <p className="font-thin text-base/8" {...props} />,
            ul: (props) => <ul className="font-thin list-disc list-inside mb-4" {...props} />,  // Ensures list styling
            li: (props) => <li className="mt-2" {...props} />
          }}
        >
          <article className="prose prose-lg dark:prose-invert mx-auto">
            <h1 className="text-3xl font-bold">{mdx.frontmatter.title}</h1>
            {image && (
              <GatsbyImage
                className="rounded-lg shadow-lg w-full h-full"
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
