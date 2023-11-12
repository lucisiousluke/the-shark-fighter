import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'

//this takes the "data" varaible created from the export below unpacks it then we map to get the value
const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts"> {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
        </Layout>
    )
}

//the takes all the info and puts it into a variable called "data"?
export const query = graphql`
query {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="My Blog Posts"/>

export default BlogPage