import React from 'react';
import { graphql, Link } from 'gatsby';

interface Props {}

export default ({ data: { allMdx }, pageContext: { pagination } }: Props) => {
  const { page } = pagination;
  const posts: (edge | undefined)[] = page.map(id => allMdx.edges.find(edge => edge.node.id === id));

  return (
    <>
      {posts.map((edge: edge | undefined) => {
        if (!edge) return;
        const { node: post } = edge;
        return (
          <>
            <h2>
              <Link to={post.fields.url}>{post.fields.title}</Link>
            </h2>
            <time>{post.fields.date}</time>
            <div>{post.excerpt}</div>
            <Link to={post.fields.url}>Continue Reading</Link>
          </>
        );
      })}
    </>
  );
};

export const pageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          excerpt(pruneLength: 300)
          id
          timeToRead
          fields {
            url
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
