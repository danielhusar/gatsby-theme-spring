import styled from '@components/styled'
import { Styled } from 'theme-ui'
import { Link } from 'gatsby'

export const PostSummary = styled.article`
  margin: 40px 0;
  position: relative;

  & + & {
    padding-top: 40px;

    &:before {
      content: '';
      border-top: 1px solid ${({ theme }) => theme.colors.light};
      width: 100px;
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  &:first-of-type {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    border-radius: 3px;
  }
`

export const H2 = styled(Styled.h2)`
  margin: 0 !important;

  a {
    color: inherit;
  }
`

export const ContinueReading = styled(Link)`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
`
