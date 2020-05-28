import React from 'react'
import { Wrapper, Inner, Caption } from '@styles/image'

interface Props {
  children: React.ReactNode
  caption: string | null
  width: number | null
  captionWidth: number | null
}

const Image = ({ width, captionWidth, children, caption }: Props) => (
  <Wrapper>
    <Inner width={width}>{children}</Inner>
    {caption ? <Caption width={captionWidth}>{caption}</Caption> : null}
  </Wrapper>
)

export default Image
