import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@components/layout';
import Header from '@components/header';
import Posts from '@components/posts';
import { Query } from '../types/graphql-types';

interface Props {
  data: Query;
  pageContext: {
    pagination: {
      page: string[];
      nextPagePath: string | null;
      previousPagePath: string | null;
      pageCount: number;
      pathPrefix: string;
    };
  };
}

export default ({ data: { allMdx }, pageContext: { pagination } }: Props) => {
  const { page } = pagination;
  const posts = page.map((id: string) => allMdx && allMdx.edges.find(edge => edge.node.id === id));

  return (
    <Layout>
      <Header />
      {posts ? <Posts posts={posts} /> : null}
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          id
          timeToRead
          excerpt(pruneLength: 300)
          fields {
            url
            title
            date(formatString: "MMMM DD, YYYY")
          }
          frontmatter {
            banner {
              childImageSharp {
                fluid(maxWidth: 760) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
