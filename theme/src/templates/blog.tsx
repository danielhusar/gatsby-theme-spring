import React from 'react';
import { graphql } from 'gatsby';
import Layout from '@components/layout';
import Header from '@components/header';
import Footer from '@components/footer';
import Nav from '@components/nav';
import Posts from '@components/posts';
import Pagination from '@components/pagination';
import { Spacer } from '@styles/utils';
import { Query } from '../types/graphql-types';

interface Props {
  data: Query;
  pageContext: {
    pagination: {
      currentPage: number;
      pages: string[];
      nextPagePath: string | null;
      previousPagePath: string | null;
      pageCount: number;
      pathPrefix: string;
    };
  };
}

export default function Blogpage({ data: { allMdx }, pageContext: { pagination } }: Props) {
  const { pages, nextPagePath, previousPagePath, currentPage } = pagination;
  const posts = pages.map((id: string) => allMdx && allMdx.edges.find(edge => edge.node.id === id));

  return (
    <Layout>
      {currentPage === 1 ? (
        <Header />
      ) : (
        <>
          <Nav />
          <Spacer size={1} />
        </>
      )}
      {posts ? <Posts posts={posts} /> : null}
      <Pagination nextPagePath={nextPagePath} previousPagePath={previousPagePath} />
      <Footer />
    </Layout>
  );
}

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
