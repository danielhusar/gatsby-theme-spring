import styled from '@components/styled'
import { css } from '@emotion/core'
import { defaultMargin } from './utils'

interface InnerProps {
  width: number | null
}

interface CaptionProps {
  width: number | null
}

export const Wrapper = styled.div`
  text-align: center;
  display: block;
  ${defaultMargin}

  p {
    margin: 0 !important;
  }

  img {
    border-radius: 3px;
  }
`

export const Inner = styled.div<InnerProps>`
  display: block;
  margin-left: auto !important;
  margin-right: auto !important;

  ${({ width }) =>
    width != null &&
    css`
      max-width: ${width}px;
    `}
`

export const Caption = styled.div<CaptionProps>`
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.light};
  font-size: 14px;
  text-align: center;

  margin-left: auto !important;
  margin-right: auto !important;

  ${({ width }) =>
    width != null &&
    css`
      max-width: ${width}px;
    `}
`
