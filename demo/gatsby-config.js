module.exports = {
  siteMetadata: {
    title: 'Gatsby theme spring',
    description: 'Demo of the gatsby theme spring',
    keywords: 'gatsby, theme',
    language: 'en',
    siteUrl: 'https://gatsby-theme-spring.netlify.com',
    feed_url: 'https://gatsby-theme-spring.netlify.com/rss.xml',
    image_url: 'https://gatsby-theme-spring.netlify.com/author.png',
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
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: './src/img/author.png',
        name: 'Gatsby theme spring',
        short_name: 'Gatsby theme spring',
        lang: 'en-US',
        theme_color: '#209cee',
        display: 'standalone',
        orientation: 'any',
        start_url: '/',
      },
    },
  ],
};
