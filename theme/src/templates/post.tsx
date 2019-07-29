import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { Query } from '../types/graphql-types';

const MyH2 = (props: any) => <h2 style={{ color: 'tomato' }} {...props} />;

const components = {
  h2: MyH2,
};

interface Props {
  data: Query;
}

export default function Post({ data: { mdx: post } }: Props) {
  return (
    <>
      {post && post.fields && <h1>{post.fields.title}</h1>}
      <MDXProvider components={components}>
        <MDXRenderer>{post && post.body}</MDXRenderer>
      </MDXProvider>
    </>
  );
}

export const pageQuery = graphql`
  query($id: String!) {
    mdx(fields: { id: { eq: $id } }) {
      fields {
        title
      }
      body
    }
  }
`;
