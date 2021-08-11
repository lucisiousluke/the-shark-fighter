import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'

const blogPage = ({data}) => {
    return (
        <Layout pageTitle="My Blog Post">{
            data.allMdx.nodes.map((node) => (
                    <article key={node.id}>
                        <h2>{node.frontmatter.title}</h2>
                        <h6>{node.frontmatter.author}</h6>
                        <p>{node.frontmatter.date}</p>
                        <hr />
                        <MDXRenderer>
                            {node.body}
                        </MDXRenderer>
                        <hr />
                        <p>{node.timeToRead} minute read</p>
                    </article>
                ))
            }
        </Layout>
    )
}

export const query = graphql`
query MyQuery {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          author
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
        timeToRead
      }
    }
  }
  
  
`

export default blogPage