import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import PageTitle from '../../components/pageTitle'

const PortfolioPost = ({ data }) => {
  console.log(data)

  return (
    <Layout>
      <PageTitle 
        pageTitle="My work" 
        pageDescription="Not to bad if I do say so myself"
      />
      <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto my-20">
        {data.allMdx.nodes.map((node) => {
          const portfolioThumbnail = getImage(node.frontmatter.hero_image) // Access hero_image here
          const excerpt = (node.excerpt)
          return (
            <article key={node.id}>
              <div className='rounded'>
              {portfolioThumbnail && (
                <GatsbyImage image={portfolioThumbnail} alt={node.frontmatter.title} className="rounded-lg h-64 w-full object-cover"/>
              )}
              </div>
              <div className="mx-5 mt-4 mb-6">
                <h2 className="font-thin text-3xl mb-3 text-cyan-500">
                  <Link to={`/portfolio/${node.frontmatter.slug}`}>
                    {node.frontmatter.title}
                  </Link>
                </h2>
                <p className="font-thin text-slate-500">Posted: {node.frontmatter.date}</p>
                <p className="text-slate-500">{excerpt}</p>
              </div>
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
