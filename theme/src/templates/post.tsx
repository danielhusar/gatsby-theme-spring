import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';

const MyH2 = props => <h2 style={{ color: 'tomato' }} {...props} />;
// const MyParagraph = props => <p style={{ fontSize: '18px', lineHeight: 1.6 }} />;

const components = {
  h2: MyH2,
  // p: MyParagraph,
};

interface Props {}

export default function Post({ data: { mdx: post } }: Props) {
  return (
    <>
      <h1>{post.fields.title}</h1>
      <MDXProvider components={components}>
        <MDXRenderer>{post.body}</MDXRenderer>
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
      mdxAST
      body
    }
  }
`;
