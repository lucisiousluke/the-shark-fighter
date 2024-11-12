import * as React from 'react'
import {  useStaticQuery, graphql } from 'gatsby'
import PrimaryNavigation from './navigation'
import SiteFooter from './footer'
import Seo from './seo'


const Layout = ({ children }) => {
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
    <div> 
        <PrimaryNavigation />    
        <div className='max-w-7xl mx-auto lg:px-6 md:px-3'>
          {children}  
        </div>
      <SiteFooter />
    </div>
  )
}

export const Head = () => (
  <>
 <Seo title="About Me" />
 <meta name="description" content="your description"/>
 </>
 )

export default Layout
