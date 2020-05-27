import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';
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

const HeaderStyled = styled.header`
  display: block;
  margin: 0;
  padding: 0 0 40px;
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  font-size: ${({ theme }) => theme.fontSizes[0]}px;

  img: {
    borderradius: '5px';
  }

  .social-icon {
    margin: 0 5px;
  }
`;

export default function Header() {
  const { portrait } = useStaticQuery(query);
  const image = portrait?.childImageSharp.fixed;
  return (
    <HeaderStyled>
      {image ? <Img fixed={image} alt="" /> : null}
      <H1>Hi there!</H1>
      <p>My name is Daniel, and I’m a product engineer based in San Francisco.</p>
      <p>Right now I’m working on Intercom Messenger to make internet business personal. Check out my blog or follow me on social media.</p>
    </HeaderStyled>
  );
}
