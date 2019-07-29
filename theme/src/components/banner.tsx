import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { Spacer } from '@styles/utils';

export default function Banner({ banner, url }: any) {
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
