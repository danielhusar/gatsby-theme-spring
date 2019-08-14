const rssPlugin = require('./plugins/rss');
const sitemapPlugin = require('./plugins/sitemap');

module.exports = ({ author }) => ({
  siteMetadata: {
    title: 'Gatsby Theme Jam Example Submission',
    description: 'Gatsby Theme Jam Example Description',
    keywords: 'gatsby, theme',
    language: 'en',
    pathPrefix: '/',
    feed_url: '/rss.xml',
    image_url: '',
    custom_namespaces: {
      media: 'http://search.yahoo.com/mrss/',
    },
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-emotion',
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
        display: 'swap',
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
    rssPlugin(author),
    sitemapPlugin(),
  ],
});
