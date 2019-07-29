import styled from '@emotion/styled';
import { Styled } from 'theme-ui';
import { Link } from 'gatsby';

export const Article = styled.article`
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

  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    border-radius: 3px;
  }
`;

export const H2 = styled(Styled.h2)`
  margin: 0;

  a {
    color: inherit;
  }
`;

export const Meta = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  color: ${({ theme }) => theme.colors.light};

  span {
    padding: 0 10px;
  }
`;

export const ContinueReading = styled(Link)`
  color: ${({ theme }) => theme.colors.light};
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
`;
