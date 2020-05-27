import React from 'react';
import { Link } from 'gatsby';
import Hero from './hero';
import Meta from './meta';
import { Spacer } from '@styles/utils';
import { PostSummary as PostSummaryStyled, H2, ContinueReading } from '@styles/post-summary';
import { Mdx } from '../types/graphql-types';

interface Props {
  post: Mdx;
}

export default function PostSummary({ post }: Props) {
  if (!post || !post.fields || !post.fields.url) return null;
  const hero = post?.frontmatter?.banner?.childImageSharp?.fluid;

  return (
    <PostSummaryStyled key={post.id}>
      <H2>
        <Link to={post.fields.url}>{post.fields.title}</Link>
      </H2>

      {hero && post.fields.url && post.fields.title && (
        <>
          <Spacer size={0.5} />
          <Hero src={hero} url={post.fields.url} alt={post.fields.title} />
        </>
      )}
      {post.timeToRead != null && (
        <>
          <Spacer size={1.5} />
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
