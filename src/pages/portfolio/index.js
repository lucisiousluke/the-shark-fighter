import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const PortfolioPost = ({ data }) => {
  console.log(data)

  return (
    <Layout pageTitle="My work">
      <div className="grid grid-cols-3 gap-4">
        {data.allMdx.nodes.map((node) => {
          const portfolioThumbnail = getImage(node.frontmatter.hero_image) // Access hero_image here

          return (
            <article key={node.id}>
              <div className='rounded'>
              {portfolioThumbnail && (
                <GatsbyImage image={portfolioThumbnail} alt={node.frontmatter.title} className="rounded-lg"/>
              )}
              </div>
              <h2>
                <Link to={`/portfolio/${node.frontmatter.slug}`}>
                  {node.frontmatter.title}
                </Link>
              </h2>
              <p>Posted: {node.frontmatter.date}</p>
            </article>
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts" />

export default PortfolioPost
