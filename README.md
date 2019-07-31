# Gatsby theme spring

> Robust gatsby theme for your blog.

[Demo](https://gatsby-theme-spring.netlify.com/)

### Installation

Using yarn:

```sh
yarn add @daniel.husar/gatsby-theme-spring
```

Or using npm:

```sh
npm install @daniel.husar/gatsby-theme-spring
```

### Configuration

Add plugin to you gatsby config:

```js!gatsby-config.js
module.exports = {
  siteMetadata: {
    ...
  },
  plugins: [
    {
      resolve: '@daniel.husar/gatsby-theme-spring',
      options: {
        paginationOffset: 5,
        author: 'Daniel Husar',
      },
    },
  ]
}
```

Plugin accepts 2 options:

 - `paginationOffset` (number) - number of articles per page
 - `author` (string) - author name for the rss feed

I recommend populating also `siteMetadata` with those properties:

```js
title: 'Gatsby theme spring',
description: 'Demo of the gatsby theme spring',
keywords: 'gatsby, theme',
language: 'en',
siteUrl: 'https://gatsby-theme-spring.netlify.com/',
feed_url: 'https://gatsby-theme-spring.netlify.com/rss.xml',
image_url: 'https://gatsby-theme-spring.netlify.com/avatar.png',
```

### Setting up

Copy your picture into `scr/img/author.png`.

Now you can create mdx posts inside `src` directory.
Every post needs to have this metadata:

```yaml
---
url: 'url-to-use'
date: '2019-07-30'
title: 'Title of the post'
banner: './img/hero-image.jpg'
draft: false
---
```

 - `url` - Post url
 - `date` - Post date
 - `title` - Post title
 - `banner` - Post banner image. To disable image set this to null.
 - `draft` - If post should be in draft mode.

### Features

 - Gallery support
 - Code samples with live edit
 - Monospaced font with programming ligatures
 - MDX with batteries included
 - Responsive
 - Fully accessible
 - Works without javascript
 - Written in Typescript
 - RSS feed
 - Sitemap

### License

MIT
