import React from 'react';
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
  return (
    <HeaderStyled>
      <Img fixed={portrait.childImageSharp.fixed} alt="My portrait" />
      <H1>Hi there!</H1>
      <p>
        Nulla facilisi. Donec a ligula lacus. Cras in dignissim nibh, eget sodales nulla. Sed auctor sed ante et varius. Donec id nisi eget leo
        iaculis vulputate. Suspendisse ut ipsum elit.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eleifend ac massa in imperdiet. Nulla at molestie nibh, in lobortis lectus.
        Vestibulum odio diam, luctus a massa convallis, malesuada sollicitudin nunc. Sed efficitur a justo eget sagittis. Aliquam purus lorem, tempus
        eget ex vel, sollicitudin egestas risus.{' '}
      </p>
    </HeaderStyled>
  );
}
