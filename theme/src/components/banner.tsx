import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { Spacer } from '@styles/utils';
import { ImageSharpFluid } from '../types/graphql-types';

interface Props {
  banner: ImageSharpFluid;
  url: string;
}

export default function Banner({ banner, url }: Props) {
  if (!banner) return null;

  return (
    <>
      <Spacer size={1} />
      <Link to={url}>
        <Img sizes={banner} />
      </Link>
    </>
  );
}
