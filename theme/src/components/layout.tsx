import React from 'react';
import { css, Global } from '@emotion/core';
import { Layout as StyledLayout, Header, Main, Container } from 'theme-ui';
import { graphql, useStaticQuery } from 'gatsby';

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
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
      <Global
        styles={css`
          body {
            margin: 0;
          }

          p:last-child {
            margin-bottom: 0;
          }
        `}
      />
      <Main>{children}</Main>
    </StyledLayout>
  );
};

export default Layout;
