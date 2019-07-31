import React from 'react';
import { oc } from 'ts-optchain';
import { Header as HeaderStyled } from 'theme-ui';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { SocialIcon } from 'react-social-icons';
import { H1 } from '@styles/header';
import styled from '@emotion/styled';

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

const MyHeaderStyled = styled(HeaderStyled)`
  .social-icon {
    margin: 0 5px;
  }
`;

export default function Header() {
  const { portrait } = useStaticQuery(query);
  const image = oc(portrait).childImageSharp.fixed();
  return (
    <MyHeaderStyled>
      <Img fixed={image} alt="My portrait" />
      <H1>Hi there!</H1>
      <p>My name is Daniel, and I’m a product engineer based in San Francisco.</p>
      <p>Right now I’m working on Intercom Messenger to make internet business personal. Check out my blog or follow me on social media.</p>
      <div>
        <SocialIcon url="https://twitter.com/danohusar" style={{ height: 35, width: 35 }} />
        <SocialIcon url="https://github.com/danielhusar" style={{ height: 35, width: 35 }} />
        <SocialIcon url="https://www.instagram.com/efrafa/" style={{ height: 35, width: 35 }} />
      </div>
    </MyHeaderStyled>
  );
}
