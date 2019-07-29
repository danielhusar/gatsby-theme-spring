import React from 'react';
import { graphql, Link } from 'gatsby';
import { Styled } from 'theme-ui';
import styled from '@emotion/styled';
import Layout from '../components/layout';
import Header from '../components/header';

const Article = styled.article`
  margin: 30px 0;
  position: relative;

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  & + & {
    padding-top: 30px;

    &:before {
      content: '';
      border-top: 1px solid ${({ theme }) => theme.colors.light};
      width: 100px;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const H2 = styled(Styled.h2)`
  margin: 0;

  a {
    color: inherit;
  }
`;

const Meta = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.light};

  span {
    padding: 0 5px;
  }
`;

const ContinueReading = styled(Link)`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
`;

const Excerpt = styled.div`
  margin: 10px 0;
`;

interface Props {}

export default ({ data: { allMdx }, pageContext: { pagination } }: any) => {
  const { page } = pagination;
  const posts: (edge | undefined)[] = page.map(id => allMdx.edges.find(edge => edge.node.id === id));

  return (
    <Layout>
      <Header />
      {posts.map((edge: edge | undefined) => {
        if (!edge) return;
        const { node: post } = edge;
        return (
          <Article key={post.id}>
            <H2>
              <Link to={post.fields.url}>{post.fields.title}</Link>
            </H2>
            <Meta>
              <time>{post.fields.date}</time>
              <span>•</span>
              {post.timeToRead} minute{post.timeToRead > 1 ? 's' : ''} read
            </Meta>
            <Excerpt>{post.excerpt}</Excerpt>
            <ContinueReading to={post.fields.url}>Continue Reading</ContinueReading>
          </Article>
        );
      })}
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          timeToRead
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
