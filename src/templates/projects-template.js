import React from 'react'
import Layout from '../components/layout'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function ProjectDetails() {
  return (
    <Layout>
    <div>
        <h2>Title</h2>
        <h3>Stack</h3>
        <div>
        <GatsbyImage image={image}
            alt={data.mdx.frontmatter.hero_image_alt}
            />
        </div>
    </div>
    </Layout>
  )
}
