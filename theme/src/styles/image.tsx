import styled from '@emotion/styled';
import { css } from '@emotion/core';

interface WrapperProps {
  width: number | null;
}

export const Wrapper = styled.div<WrapperProps>`
  text-align: center;
  display: block;
  margin: 1em auto;

  @media screen and (min-width: 40em) {
    margin: 1.5em auto;
  }

  ${({ width }) =>
    width != null &&
    css`
      max-width: ${width}px;
    `}

  p {
    margin: 0 !important;
  }

  img {
    border-radius: 3px;
  }
`;

export const Caption = styled.div`
  margin-top: 10px;
  color: ${({ theme }) => theme.colors.light};
  font-size: 14px;
  text-align: center;
`;
