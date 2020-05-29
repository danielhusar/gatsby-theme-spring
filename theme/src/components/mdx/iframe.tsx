import React from 'react'
import { css } from '@emotion/core'
import styled from '../styled'
import Overlay from '../overlay'
import { defaultMargin } from '../../styles/utils'

interface Props {
  width: number
  height: number
  src: string
  disableOverlay?: boolean
}

interface WrapperProps {
  width: number
  height: number
}

const Wrapper = styled.div`
  text-align: center;
  ${({ theme }) => defaultMargin({ theme })};

  .iframe-outer {
    display: inline-block;
    max-width: 100%;

    ${(props: WrapperProps) =>
      css`
        width: ${props.width}px;
      `};
  }

  .iframe-inner {
    display: inline-block;
    position: relative;
    height: 0;
    width: 100%;

    ${(props: WrapperProps) =>
      css`
        padding-top: ${(props.height / props.width) * 100}%;
      `};
  }

  .disclaimer,
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
  }
`

const Iframe = ({ width, height, src, disableOverlay, ...rest }: Props) => (
  <Wrapper width={width} height={height}>
    <div className="iframe-outer">
      <div className="iframe-inner">
        <Overlay disableOverlay={disableOverlay}>
          <iframe src={src} {...rest} />
        </Overlay>
      </div>
    </div>
  </Wrapper>
)

export default Iframe
