import styled from '@emotion/styled';

interface SpacerProps {
  size: number;
}

export const Spacer = styled('div')<SpacerProps>`
  height: ${({ size }) => size * 10}px;
`;
