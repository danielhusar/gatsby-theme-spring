module.exports = {
  siteMetadata: {
    title: 'Gatsby theme spring',
    description: 'Demo of the gatsby theme spring',
    keywords: 'gatsby, theme',
    language: 'en',
    siteUrl: 'https://gatsby-theme-spring.netlify.com/',
    feed_url: 'https://gatsby-theme-spring.netlify.com/rss.xml',
    image_url: 'https://gatsby-theme-spring.netlify.com/avatar.png',
  },
  plugins: [
    {
      resolve: '@daniel.husar/gatsby-theme-spring',
      options: {
        paginationOffset: 5,
        author: 'Daniel Husar',
      },
    },
    {
      resolve: 'gatsby-plugin-favicon',
      options: {
        logo: './src/img/author.png',
        appName: 'Gatsby theme spring',
        appDescription: 'Gatsby theme spring',
        developerName: 'Gatsby theme spring',
        developerURL: null,
        dir: 'auto',
        lang: 'en-US',
        theme_color: '#209cee',
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
        version: '1.0',
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          opengraph: false,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
  ],
};
