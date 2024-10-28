import * as React from 'react'
import {  useStaticQuery, graphql } from 'gatsby'
import PrimaryNavigation from './navigation'
import SiteFooter from './footer'
import Seo from './seo'
import { 
    siteTitle
} from '../styles/layout.module.css'


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
        <h1 className="text-3xl font-bold siteTitle">{pageTitle}</h1>
        {children}  
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
