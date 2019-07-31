import React from 'react';
import { oc } from 'ts-optchain';
import { Header as HeaderStyled } from 'theme-ui';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { H1 } from '@styles/header';

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
`;

export default function Header() {
  const { portrait } = useStaticQuery(query);
  const image = oc(portrait).childImageSharp.fixed();
  return (
    <HeaderStyled>
      {image ? <Img fixed={image} alt="" /> : null}
      <H1>Hi there!</H1>
      <p>My name is Daniel, and I’m a product engineer based in San Francisco.</p>
      <p>Right now I’m working on Intercom Messenger to make internet business personal. Check out my blog or follow me on social media.</p>
    </HeaderStyled>
  );
}
