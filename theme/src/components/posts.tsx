import React from 'react';
import PostSummary from './post-summary';

export default function Posts({ posts }: any) {
  return posts.map((edge: edge | undefined) => {
    if (!edge) return;
    const { node: post } = edge;
    return <PostSummary key={post.id} post={post} />;
  });
}
