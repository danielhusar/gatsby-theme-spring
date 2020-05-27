import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Spacer } from '@styles/utils'
import { Hero as HeroStyled } from '@styles/hero'
import { ImageSharpFluid } from '../types/graphql-types'

interface Props {
  src: ImageSharpFluid
  url?: string
  alt?: string
}

export default function Hero({ src, url, alt }: Props) {
  if (!src) return null

  return (
    <HeroStyled>
      <Spacer size={1} />
      {url ? (
        <Link to={url}>{alt ? <Img sizes={src} alt={alt} /> : <Img sizes={src} />}</Link>
      ) : alt ? (
        <Img sizes={src} alt={alt} />
      ) : (
        <Img sizes={src} />
      )}
    </HeroStyled>
  )
}
