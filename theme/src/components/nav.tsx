import React from 'react';
import { oc } from 'ts-optchain';
import { useStaticQuery } from 'gatsby';
import { graphql } from 'gatsby';
import { Nav as NavStyled, NavItem, NavPortrait } from '@styles/nav';

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
  const image = oc(portrait).childImageSharp.fixed();

  return (
    <NavStyled>
      <NavItem to="/">{image ? <NavPortrait fixed={image} alt="" /> : null}</NavItem>
      <NavItem to="/">Index</NavItem>
    </NavStyled>
  );
}
