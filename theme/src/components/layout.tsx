import React from 'react';
import { css, Global } from '@emotion/core';
import { Layout as StyledLayout, Main } from 'theme-ui';
import { graphql, useStaticQuery } from 'gatsby';

interface Props {
  children: React.ReactNode;
}

const globalCss = css`
  body {
    margin: 0;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

export default function Layout({ children }: Props) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <StyledLayout>
      <Global styles={globalCss} />
      <Main>{children}</Main>
    </StyledLayout>
  );
}
