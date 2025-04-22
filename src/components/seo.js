import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

const Seo = ({ title }) => {
    const data = useStaticQuery(graphql`
    query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `)
    return (
      <Helmet>
          <title>{title} | {data.site.siteMetadata.title}</title>
          <link rel="icon" type="image/png" href="/thesharkfighter_favicon.png" />
        </Helmet>
    )
}

export default Seo
