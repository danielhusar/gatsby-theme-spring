import React from 'react';
import { oc } from 'ts-optchain';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import { Mdx } from '../types/graphql-types';
import Hero from './hero';
import Meta from './meta';
import { Spacer } from '@styles/utils';
import { H1 } from '@styles/post';
import MDXComponents from './mdx';

interface Props {
  post: Mdx;
}

export default function Post({ post }: Props) {
  if (!post || !post.fields || !post.fields.title) return null;
  const banner = oc(post).frontmatter.banner.childImageSharp.fluid();

  return (
    <article>
      <Spacer size={4} />
      {post && post.fields && <H1>{post.fields.title}</H1>}
      <Spacer size={1} />
      {banner && <Hero src={banner} />}
      {post.timeToRead != null && (
        <>
          <Spacer size={1} />
          <Meta date={post.fields.date} timeToRead={post.timeToRead} />
        </>
      )}
      <MDXProvider components={MDXComponents}>
        <MDXRenderer>{post && post.body}</MDXRenderer>
      </MDXProvider>
    </article>
  );
}
