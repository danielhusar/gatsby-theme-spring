import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@components/layout';
import Header from '@components/header';
import Posts from '@components/posts';
import { Spacer } from '@styles/utils';

export default ({ data: { allMdx }, pageContext: { pagination } }: any) => {
  const { page } = pagination;
  const posts: (edge | undefined)[] = page.map(id => allMdx.edges.find(edge => edge.node.id === id));

  return (
    <Layout>
      <Header />
      <Posts posts={posts} />
      <Spacer size={3} />
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
