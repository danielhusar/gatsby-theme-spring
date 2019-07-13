const path = require('path');
const { exec } = require('child_process');

const PAGINATION_OFFSET = 10;

const pluckCategories = edges =>
  Object.keys(
    edges.reduce((acc, value) => {
      value.node.fields.categories.forEach(category => {
        if (!acc[category]) acc[category] = category;
      });
      return acc;
    }, {})
  );

const groupByCategory = edges =>
  edges.reduce((acc, value) => {
    value.node.fields.categories.forEach(category => {
      if (!acc[category]) acc[category] = [];
      acc[category].push(value);
    });
    return acc;
  }, {});

const createCategoryPages = (createPage, edges) => {
  const categories = pluckCategories(edges);
  const posts = groupByCategory(edges);
  Object.keys(posts).forEach(category => {
    createPaginatedPages(createPage, posts[category], `/blog/categories/${category}/`, { categories, activeCategory: category });
  });
};

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
  const categories = pluckCategories(edges);
  createPaginatedPages(createPage, edges, '/blog', { categories });
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
              categories
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
    createCategoryPages(actions.createPage, edges);
  });

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      alias: {
        $components: path.resolve(__dirname, 'src/components'),
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
    createNodeField({ node, name: 'categories', value: node.frontmatter.categories || [] });
    createNodeField({ node, name: 'url', value: `/blog/${node.frontmatter.slug}/` });
    createNodeField({ node, name: 'filename', value: node.fileAbsolutePath.split('/').reverse()[0] });
  }
};
