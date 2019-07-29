module.exports = {
  siteMetadata: {
    title: 'Gatsby Theme Jam Example Submission',
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-typescript',
    'gatsby-plugin-mdx',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Source Sans Pro'],
      },
    },
  ],
};
