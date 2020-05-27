import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { SocialIcon } from 'react-social-icons'
import { H1 } from '@daniel.husar/gatsby-theme-spring/src/styles/header'
import styled from '@daniel.husar/gatsby-theme-spring/src/components/styled'

const query = graphql`
  query {
    portrait: file(relativePath: { eq: "img/author.png" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const MyHeaderStyled = styled.header`
  display: block;
  margin: 0;
  padding: 0 0 40px;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fontSizes[1]}px;

  @media (min-width: 766px) {
    font-size: ${({ theme }) => theme.fontSizes[2]}px;
  }

  img {
    border-radius: 5px;
  }

  .social-icon {
    margin: 0 5px;
  }
`

export default function Header() {
  const { portrait } = useStaticQuery(query)
  const image = portrait?.childImageSharp?.fixed
  return (
    <MyHeaderStyled>
      {image ? <Img fixed={image} alt="" /> : null}
      <H1>Hi there!</H1>
      <p>My name is Daniel, and I’m a product engineer based in San Francisco.</p>
      <p>Right now I’m working on Intercom Messenger to make internet business personal. Check out my blog or follow me on social media.</p>
      <div>
        <SocialIcon url="https://twitter.com/danohusar" style={{ height: 35, width: 35 }} />
        <SocialIcon url="https://github.com/danielhusar" style={{ height: 35, width: 35 }} />
        <SocialIcon url="https://www.instagram.com/efrafa/" style={{ height: 35, width: 35 }} />
      </div>
    </MyHeaderStyled>
  )
}
