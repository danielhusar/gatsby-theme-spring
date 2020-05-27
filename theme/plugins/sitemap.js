module.exports = () => ({
  resolve: 'gatsby-plugin-sitemap',
  options: {
    createLinkInHead: true,
    query: `
    {
      site {
        siteMetadata {
          siteUrl
        }
      }

      allSitePage(filter: { context: { draft: { ne: true } } } ) {
        edges {
          node {
            path
          }
        }
      }
  }`,
  },
})
