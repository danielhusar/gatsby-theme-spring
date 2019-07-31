import styled from '@emotion/styled';
import { css } from '@emotion/core';

interface SpacerProps {
  size: number;
}

export const Spacer = styled('div')<SpacerProps>`
  height: ${({ size }) => size * 10}px;
`;

export const defaultMargin = ({ theme }) => css`
  margin: ${theme.margin[0]};

  @media screen and (min-width: 40em) {
    margin: ${theme.margin[1]};
  }
`;
