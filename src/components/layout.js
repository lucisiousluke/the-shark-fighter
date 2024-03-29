import * as React from 'react'
import {  useStaticQuery, graphql } from 'gatsby'
import PrimaryNavigation from './navigation'
import SiteFooter from './footer'
import { 
    container,
    siteTitle
} from './layout.module.css'


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
    <div className="mx-auto">
        
        <PrimaryNavigation />
      <main>
        <h1 className="text-3xl font-bold">{pageTitle}</h1>
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}

export default Layout
