import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { Spacer } from '@styles/utils';
import { Hero as HeroStyled } from '@styles/hero';
import { ImageSharpFluid } from '../types/graphql-types';

interface Props {
  src: ImageSharpFluid;
  url?: string;
}

export default function Hero({ src, url }: Props) {
  if (!src) return null;

  return (
    <HeroStyled>
      <Spacer size={1} />
      {url ? (
        <Link to={url}>
          <Img sizes={src} />
        </Link>
      ) : (
        <Img sizes={src} />
      )}
    </HeroStyled>
  );
}
