import React from 'react';
import { Meta as MetaStyled } from '@styles/meta';

interface Props {
  timeToRead: number;
  date: Date | null;
}

export default function Meta({ date, timeToRead }: Props) {
  return (
    <MetaStyled>
      <time>{date}</time>
      <span>•</span>
      {timeToRead} minute{timeToRead > 1 ? 's' : ''} read
    </MetaStyled>
  );
}
