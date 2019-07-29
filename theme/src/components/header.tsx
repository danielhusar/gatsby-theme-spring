import React from 'react';
import { Header as HeaderStyled, Styled } from 'theme-ui';

export default function Header() {
  return (
    <HeaderStyled>
      <img src="https://picsum.photos/id/1005/300/300" alt="My Name" width="150" />
      <Styled.h1>Hi there!</Styled.h1>
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
