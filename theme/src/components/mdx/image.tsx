import React from 'react'
import { Wrapper, Caption } from '@styles/image'

interface Props {
  children: React.ReactNode
  caption: string | null
  width: number | null
}

export default ({ width, children, caption }: Props) => (
  <Wrapper width={width}>
    {children}
    {caption ? <Caption>{caption}</Caption> : null}
  </Wrapper>
)
