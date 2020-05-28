module.exports = (author) => ({
  resolve: 'gatsby-plugin-feed',
  options: {
    query: `
      {
        site {
          siteMetadata {
            title
            description
            language
            siteUrl
            image_url
            site_url: siteUrl
            custom_namespaces {
              media
            }
          }
        }
        portrait: file(relativePath: {eq: "img/author.png"}) {
          childImageSharp {
            fixed(width: 150, height: 150) {
              src
            }
          }
        }
      }
    `,
    // setup: ({ query }) => ({
    //   custom_namespaces: {
    //     media: 'http://search.yahoo.com/mrss/',
    //   },
    //   custom_elements: [
    //     {
    //       title: query.site.siteMetadata.title,
    //     },
    //     {
    //       description: query.site.siteMetadata.description,
    //     },
    //     {
    //       link: query.site.siteMetadata.siteUrl,
    //     },
    //     {
    //       image: [
    //         { url: `${query.site.siteMetadata.siteUrl}${query.portrait.childImageSharp.fixed.src}`.replace('//', '/') },
    //         { title: query.site.siteMetadata.title },
    //         { link: query.site.siteMetadata.siteUrl },
    //       ],
    //     },
    //   ],
    // }),
    feeds: [
      {
        serialize: ({ query: { site, allMdx } }) => {
          return allMdx.edges.map((edge) => {
            let banner
            try {
              banner = `${site.siteMetadata.siteUrl}${edge.node.frontmatter.banner.publicURL}`
            } catch (e) {}

            const image = banner ? `<img src="${banner}" /> ` : ''
            return {
              author: author,
              title: edge.node.fields.title,
              description: `${image}${edge.node.excerpt}`.trim(),
              url: `${site.siteMetadata.siteUrl}${edge.node.fields.url}`,
              guid: `${site.siteMetadata.siteUrl}${edge.node.fields.url}`,
              pubDate: edge.node.fields.date,
              language: site.siteMetadata.language,
              custom_elements: [
                banner
                  ? {
                      'media:content': {
                        _attr: {
                          url: banner,
                          medium: 'image',
                        },
                      },
                    }
                  : undefined,
              ],
            }
          })
        },
        query: `
          {
            allMdx(sort: { order: DESC, fields: [frontmatter___date] }, filter: { frontmatter: { draft: { ne: true } } }) {
              edges {
                node {
                  id
                  excerpt(pruneLength: 250)
                  fields {
                    title
                    url
                    date(formatString: "YYYY-MM-DDTHH:MM:SS")
                  }
                  frontmatter {
                    banner {
                      publicURL
                    }
                  }
                }
              }
            }
          }
        `,
        output: '/rss.xml',
      },
    ],
  },
})
