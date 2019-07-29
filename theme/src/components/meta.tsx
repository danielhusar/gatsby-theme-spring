import React from 'react';
import { Meta as MetaStyled } from '@styles/blog';

export default function Meta({ date, timeToRead }: any) {
  return (
    <MetaStyled>
      <time>{date}</time>
      <span>•</span>
      {timeToRead} minute{timeToRead > 1 ? 's' : ''} read
    </MetaStyled>
  );
}
