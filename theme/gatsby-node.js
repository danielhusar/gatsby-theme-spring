const path = require('path')

const BLOG_PATH = '/'
const PAGINATION_OFFSET = 5

const createPosts = (createPage, edges) => {
  edges.forEach(({ node }) => {
    createPage({
      path: node.fields.url,
      component: path.resolve(__dirname, './src/templates/post.tsx'),
      context: {
        id: node.id,
        draft: node.fields.draft,
      },
    })
  })
}

const createPaginatedPages = (createPage, edges, pathPrefix, paginationOffset) => {
  const pages = edges
    .filter((edge) => !edge.node.fields.draft)
    .reduce((acc, value, index) => {
      const pageIndex = Math.floor(index / paginationOffset)
      if (!acc[pageIndex]) acc[pageIndex] = []
      acc[pageIndex].push(value.node.id)
      return acc
    }, [])

  pages.forEach((slicedPages, index) => {
    ++index
    const previousPagePath = `${pathPrefix}${index + 1}/`
    const nextPagePath = index === 2 ? '/' : `${pathPrefix}${index - 1}/`
    createPage({
      path: index > 1 ? `${pathPrefix}${index}/` : '/',
      component: path.resolve(__dirname, 'src/templates/blog.tsx'),
      context: {
        pagination: {
          pages: slicedPages,
          currentPage: index,
          nextPagePath: index === 1 ? null : nextPagePath,
          previousPagePath: index === pages.length ? null : previousPagePath,
          pageCount: pages.length,
          pathPrefix,
        },
      },
    })
  })
}

exports.createPages = ({ actions, graphql }, { paginationOffset = PAGINATION_OFFSET, blogPath = BLOG_PATH }) =>
  graphql(`
    query {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            fields {
              url
              draft
            }
          }
        }
      }
    }
  `).then(({ data, errors }) => {
    if (errors) return Promise.reject(errors)
    const { edges } = data.allMdx
    if (!blogPath.endsWith('/')) blogPath = `${blogPath}/`
    createPaginatedPages(actions.createPage, edges, blogPath, paginationOffset)
    createPosts(actions.createPage, edges, blogPath)
  })

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@types': path.resolve(__dirname, 'src/types'),
      },
    },
  })
}

exports.onCreateNode = ({ node, actions }, { blogPath = BLOG_PATH }) => {
  const { createNodeField } = actions
  if (!blogPath.endsWith('/')) blogPath = `${blogPath}/`

  if (node.internal.type === `Mdx`) {
    createNodeField({ node, name: 'id', value: node.id })
    createNodeField({ node, name: 'title', value: node.frontmatter.title })
    createNodeField({ node, name: 'url', value: `${blogPath}${node.frontmatter.url}/` })
    createNodeField({ node, name: 'date', value: node.frontmatter.date || '' })
    createNodeField({ node, name: 'draft', value: node.frontmatter.draft })
  }
}
