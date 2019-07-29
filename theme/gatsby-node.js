const path = require('path');
const { exec } = require('child_process');

const PAGINATION_OFFSET = 10;

const createPosts = (createPage, edges) => {
  edges.forEach(({ node }, i) => {
    createPage({
      path: node.fields.url,
      component: path.resolve('./src/templates/post.tsx'),
      context: {
        id: node.id,
      },
    });
  });
};

const createBlog = (createPage, edges) => {
  createPaginatedPages(createPage, edges, '/blog');
};

const createPaginatedPages = (createPage, edges, pathPrefix, context) => {
  const pages = edges.reduce((acc, value, index) => {
    const pageIndex = Math.floor(index / PAGINATION_OFFSET);
    if (!acc[pageIndex]) acc[pageIndex] = [];
    acc[pageIndex].push(value.node.id);
    return acc;
  }, []);

  pages.forEach((page, index) => {
    ++index;
    const previousPagePath = `${pathPrefix}/${index + 1}/`;
    const nextPagePath = index === 2 ? pathPrefix : `${pathPrefix}/${index - 1}/`;
    createPage({
      path: index > 1 ? `${pathPrefix}/${index}/` : `${pathPrefix}/`,
      component: path.resolve(`src/templates/blog.tsx`),
      context: {
        pagination: {
          page,
          nextPagePath: index === 1 ? null : nextPagePath,
          previousPagePath: index === pages.length ? null : previousPagePath,
          pageCount: pages.length,
          pathPrefix,
        },
        ...context,
      },
    });
  });
};

exports.createPages = ({ actions, graphql }) =>
  graphql(`
    query {
      allMdx(sort: { order: DESC, fields: [frontmatter___date] }, filter: { frontmatter: { draft: { ne: true } } }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            fields {
              title
              slug
              url
            }
          }
        }
      }
    }
  `).then(({ data, errors }) => {
    if (errors) return Promise.reject(errors);
    const { edges } = data.allMdx;
    createBlog(actions.createPage, edges);
    createPosts(actions.createPage, edges);
  });

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@styles': path.resolve(__dirname, 'src/styles'),
      },
    },
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent);
    createNodeField({ node, name: 'id', value: node.id });
    createNodeField({ node, name: 'title', value: node.frontmatter.title });
    createNodeField({ node, name: 'slug', value: node.frontmatter.slug });
    createNodeField({ node, name: 'date', value: node.frontmatter.date || '' });
    createNodeField({ node, name: 'draft', value: node.frontmatter.draft });
    createNodeField({ node, name: 'url', value: `/blog/${node.frontmatter.slug}/` });
    createNodeField({ node, name: 'filename', value: node.fileAbsolutePath.split('/').reverse()[0] });
  }
};
