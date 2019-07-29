import React from 'react';
import { Link } from 'gatsby';
import { oc } from 'ts-optchain';
import Banner from './banner';
import Meta from './meta';
import { Spacer } from '@styles/utils';
import { PostSummary as PostSummaryStyled, H2, ContinueReading } from '@styles/post-summary';
import { Mdx } from '../types/graphql-types';

interface Props {
  post: Mdx;
}

export default function PostSummary({ post }: Props) {
  if (!post || !post.fields || !post.fields.url) return null;
  const banner = oc(post).frontmatter.banner.childImageSharp.fluid();

  return (
    <PostSummaryStyled key={post.id}>
      <H2>
        <Link to={post.fields.url}>{post.fields.title}</Link>
      </H2>
      {banner && post.fields.url && <Banner banner={banner} url={post.fields.url} />}
      {post.timeToRead && (
        <>
          <Spacer size={1} />
          <Meta date={post.fields.date} timeToRead={post.timeToRead} />
        </>
      )}
      <Spacer size={1} />
      {post.excerpt}
      <Spacer size={1} />
      <ContinueReading to={post.fields.url}>Continue Reading</ContinueReading>
    </PostSummaryStyled>
  );
}
