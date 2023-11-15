import * as React from 'react'
import Layout from '../../../components/layout'
import Seo from '../../../components/seo'

const BlogPost = () => {
    return (
        <Layout pageTitle="My Blog Posts">
            <p>This section will soon populate with blog posts</p>
        </Layout>
    )
}

export const Head = () => <Seo title="My Blog Posts"/>

export default BlogPost