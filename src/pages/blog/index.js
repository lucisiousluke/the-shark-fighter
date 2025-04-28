import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My work">
      <div className='grid grid-cols-3 gap-4'>
      {
        data.allMdx.nodes.map((node) => (
            <article key={node.id}>
                <h2>
                  <Link to={`/blog/${node.frontmatter.slug}`}>
                    {node.frontmatter.title}
                  </Link>
                </h2>
                <p>Posted: {node.frontmatter.date}</p>
            </article>
        ))
      }
      </div>
    </Layout>
  )
}

//exporting this query creates something called data, data can be unpacked to show things inside of the query (see the BlogPage function above)
export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { title: ASC } }) {
      nodes {
        frontmatter {
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`


export const Head = () => <Seo title="My Blog Posts" />

export default BlogPage