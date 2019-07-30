module.exports = {
  resolve: 'gatsby-plugin-feed',
  options: {
    query: `
      {
        site {
          siteMetadata {
            author
            title
            description
            language
            siteUrl
            site_url: siteUrl
            custom_namespaces {
              media
            }
          }
        }
        portrait: file(relativePath: {eq: "img/avatar.png"}) {
          childImageSharp {
            fixed(width: 150, height: 150) {
              src
            }
          }
        }
      }
    `,
    setup: ({ query }) => ({
      custom_elements: [
        {
          image: [
            { url: `${query.site.siteMetadata.siteUrl}${query.portrait.childImageSharp.fixed.src}`.replace('//', '/') },
            { title: query.site.siteMetadata.title },
            { link: query.site.siteMetadata.siteUrl },
          ],
        },
      ],
    }),
    feeds: [
      {
        serialize: ({ query: { site, allMdx } }) => {
          return allMdx.edges.map(edge => {
            let banner;
            try {
              banner = site.siteMetadata.siteUrl + edge.node.frontmatter.banner.childImageSharp.sizes.src;
            } catch (e) {}

            const image = banner ? `<img src="${banner}" /> ` : '';
            return Object.assign(
              {},
              {
                author: site.siteMetadata.author,
                title: edge.node.fields.title,
                description: `${image}${edge.node.excerpt}`.trim(),
                url: site.siteMetadata.siteUrl + edge.node.fields.url,
                guid: site.siteMetadata.siteUrl + edge.node.fields.url,
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
            );
          });
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
                      childImageSharp {
                        sizes(maxWidth: 700) {
                          src
                        }
                      }
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
};
