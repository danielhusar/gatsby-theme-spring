module.exports = () => ({
  resolve: 'gatsby-plugin-sitemap',
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
});
