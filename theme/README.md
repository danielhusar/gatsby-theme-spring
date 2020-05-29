# Gatsby theme spring [![Build Status](https://travis-ci.org/danielhusar/gatsby-theme-spring.svg?branch=master)](https://travis-ci.org/danielhusar/gatsby-theme-spring)

> Robust [gatsby](https://www.gatsbyjs.org/) theme for your blog.

[Demo](https://gatsby-theme-spring.netlify.com/)

![screenshot](./screenshot.png)

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

```js
module.exports = {
  siteMetadata: {
    ...
  },
  plugins: [
    {
      resolve: '@daniel.husar/gatsby-theme-spring',
      options: {
        author: 'Daniel Husar',
        blogPath: '/blog',
        paginationOffset: 5,
      },
    },
  ]
}
```

Plugin accepts 3 options:

- `paginationOffset` (number) - number of articles per page
- `author` (string) - author name for the rss feed
- `blogPath` (string) - prefix path for blog posts and pagination (First page in the pagination will always be '/')

I recommend populating also `siteMetadata` with those properties:

```js
title: 'Gatsby theme spring',
description: 'Demo of the gatsby theme spring',
keywords: 'gatsby, theme',
language: 'en',
siteUrl: 'https://gatsby-theme-spring.netlify.com/',
feed_url: 'https://gatsby-theme-spring.netlify.com/rss.xml',
image_url: 'https://gatsby-theme-spring.netlify.com/avatar.png',
twitterHandle: '@DanoHusar',
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

- [Gallery layout](https://gatsby-theme-spring.netlify.com//components/#gallery)
- [Code samples with live edit](https://gatsby-theme-spring.netlify.com//components/#simple-javascript-code-sample)
- [Monospaced font with programming ligatures](https://github.com/tonsky/FiraCode)
- MDX with batteries included
- [Open graph support](https://developers.facebook.com/tools/debug/sharing/?q=https%3A%2F%2Fgatsby-theme-spring.netlify.com%2Ftypography%2F)
- Responsive
- [Accessibility report](https://travis-ci.org/danielhusar/gatsby-theme-spring/jobs/565790587)
- Works without javascript
- Written in Typescript
- [RSS feed](https://gatsby-theme-spring.netlify.com//rss.xml)
- [Sitemap](https://gatsby-theme-spring.netlify.com//sitemap.xml)
- Pagination
- Drafts

### License

MIT
