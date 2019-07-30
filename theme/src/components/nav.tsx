import React from 'react';
import { useStaticQuery } from 'gatsby';
import { Link, graphql, StaticQuery } from 'gatsby';
import { Nav as NavStyled, NavItem, NavPortrait } from '@styles/nav';
import Img from 'gatsby-image';

const query = graphql`
  query {
    portrait: file(relativePath: { eq: "img/author.png" }) {
      childImageSharp {
        fixed(width: 30, height: 30) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default function Nav() {
  const { portrait } = useStaticQuery(query);

  return (
    <NavStyled>
      <NavItem to="/">
        {portrait.childImageSharp && portrait.childImageSharp.fixed ? <NavPortrait fixed={portrait.childImageSharp.fixed} alt="My portrait" /> : null}
      </NavItem>
      <NavItem to="/">Index</NavItem>
    </NavStyled>
  );
}
