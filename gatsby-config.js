/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `gatsby-slash-redirect-path-prefix-bug`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [],
  pathPrefix: '/prefix',
  trailingSlash: 'never',
}
