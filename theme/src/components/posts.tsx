import React from 'react'
import PostSummary from './post-summary'
import { MdxEdge } from '../types/graphql-types'

interface Props {
  posts: (MdxEdge | null | undefined)[]
}

export default function Posts({ posts }: Props) {
  return (
    <>
      {posts.map((edge: MdxEdge | null | undefined) => {
        if (!edge) return null
        const { node: post } = edge
        return <PostSummary key={post.id} post={post} />
      })}
    </>
  )
}
