import React from 'react';
import { oc } from 'ts-optchain';
import { graphql } from 'gatsby';
import { Query } from '../types/graphql-types';
import Layout from '@components/layout';
import Post from '@components/post';
import Nav from '@components/nav';

interface Props {
  data: Query;
}

export default function PostPage({ data: { mdx: post } }: Props) {
  if (!post || !post.fields || !post.fields.title) return null;
  const hero = oc(post).frontmatter.banner.childImageSharp.fluid();

  return (
    <Layout title={post.fields.title} description={post.excerpt} image={hero ? hero.src : null}>
      <Nav />
      {post ? <Post post={post} /> : null}
    </Layout>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(fields: { id: { eq: $id } }) {
      id
      timeToRead
      body
      excerpt
      fields {
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
`;
