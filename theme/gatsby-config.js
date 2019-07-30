const rssPlugin = require('./plugins/rss');

module.exports = {
  siteMetadata: {
    author: 'Daniel Husar',
    title: 'Gatsby Theme Jam Example Submission',
    description: 'Gatsby Theme Jam Example Description',
    keywords: 'gatsby, theme',
    language: 'en',
    pathPrefix: '/',
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-smartypants',
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 760,
              sizeByPixelDensity: false,
              linkImagesToOriginal: true,
            },
          },
          {
            resolve: 'gatsby-remark-autolink-headers',
            options: {
              className: 'header-anchor-link',
              maintainCase: false,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `./src/`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['Source Sans Pro'],
      },
    },
    // {
    //   resolve: 'gatsby-plugin-generate-typings',
    //   options: {
    //     dest: './src/types/graphql-types.tsx',
    //   },
    // },
    {
      resolve: 'gatsby-plugin-nprogress',
      options: {
        color: 'tomato',
        showSpinner: false,
      },
    },
    rssPlugin,
  ],
};
