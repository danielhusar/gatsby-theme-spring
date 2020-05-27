import React from 'react';
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
  const banner = post.frontmatter?.banner?.childImageSharp?.fluid;

  return (
    <article>
      <Spacer size={5} />
      {post && post.fields && <H1>{post.fields.title}</H1>}
      {banner && (
        <>
          <Spacer size={1.5} />
          <Hero src={banner} alt={post.fields.title} />
        </>
      )}
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
