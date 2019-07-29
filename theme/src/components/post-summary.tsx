import React from 'react';
import { Link } from 'gatsby';
import { oc } from 'ts-optchain';
import Banner from './banner';
import Meta from './meta';
import { Spacer } from '@styles/utils';
import { Article, H2, ContinueReading } from '@styles/blog';

export default function PostSummary({ post }: any) {
  const banner = oc(post).frontmatter.banner.childImageSharp.fluid();

  return (
    <Article key={post.id}>
      <H2>
        <Link to={post.fields.url}>{post.fields.title}</Link>
      </H2>
      <Banner banner={banner} url={post.fields.url} />
      <Spacer size={1} />
      <Meta date={post.fields.date} timeToRead={post.timeToRead} />
      <Spacer size={1} />
      {post.excerpt}
      <Spacer size={1} />
      <ContinueReading to={post.fields.url}>Continue Reading</ContinueReading>
    </Article>
  );
}
