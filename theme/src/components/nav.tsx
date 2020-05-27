import React from 'react'
import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
import { Nav as NavStyled, NavItem, NavPortrait } from '@styles/nav'

const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    portrait: file(relativePath: { eq: "img/author.png" }) {
      childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default function Nav() {
  const { portrait, site } = useStaticQuery(query)
  const image = portrait?.childImageSharp.fixed

  return (
    <NavStyled>
      <NavItem to="/">{image ? <NavPortrait fixed={image} alt={site.siteMetadata.title} /> : null}</NavItem>
      <NavItem to="/">{site.siteMetadata.title}</NavItem>
    </NavStyled>
  )
}
