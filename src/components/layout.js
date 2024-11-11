import * as React from 'react'
import {  useStaticQuery, graphql } from 'gatsby'
import PrimaryNavigation from './navigation'
import SiteFooter from './footer'
import Seo from './seo'


const Layout = ({ pageTitle, children }) => {
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
        
        <div className='max-w-7xl mx-auto lg:px-6 md:px-3 text-center'>
          <h2 className="text-4xl font-bold text-cyan-500">this is a default layout</h2>
          <hr className="w-48 h-2 mx-auto my-5 bg-rose-400 border-0 md:my-5 dark:bg-gray-700"></hr>
          <h1 className="text-2xl text-center	siteTitle">{pageTitle}</h1>
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
