import React from 'react'
import { Meta as MetaStyled } from '@styles/meta'

interface Props {
  timeToRead: number
  date: Date
}

export default function Meta({ date, timeToRead }: Props) {
  const formatedDate = new Date(date).toLocaleDateString('eu', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  })
  return (
    <MetaStyled>
      <time dateTime={formatedDate}>{date}</time>
      <span>•</span>
      {timeToRead} minute{timeToRead > 1 ? 's' : ''} read
    </MetaStyled>
  )
}
