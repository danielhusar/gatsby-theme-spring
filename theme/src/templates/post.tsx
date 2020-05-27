import React from 'react'
import { graphql } from 'gatsby'
import { Query } from '../types/graphql-types'
import Layout from '@components/layout'
import Post from '@components/post'
import Nav from '@components/nav'
import Footer from '@components/footer'

interface Props {
  data: Query
}

export default function PostPage({ data: { mdx: post } }: Props) {
  if (!post) return null
  const title = post.fields?.title
  const hero = post.frontmatter?.banner?.childImageSharp?.fluid
  const url = post.fields?.url
  const draft = post.fields?.draft

  return (
    <Layout title={title} description={post.excerpt} image={hero ? hero.src : null} url={url} noIndex={!!draft}>
      <Nav />
      {post ? <Post post={post} /> : null}
      <Footer />
    </Layout>
  )
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
        url
        date(formatString: "MMMM DD, YYYY")
        draft
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
`
