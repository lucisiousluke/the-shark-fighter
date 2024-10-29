/**
 * @type {import('gatsby').GatsbyConfig}
 */
 module.exports = {
  siteMetadata: {
    title: "The Shark Fighter",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/portfolio`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    "gatsby-plugin-postcss",
  ],
};