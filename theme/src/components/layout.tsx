import React from 'react';
import { css, Global } from '@emotion/core';
import { Layout as StyledLayout, Main } from 'theme-ui';
import { graphql, useStaticQuery } from 'gatsby';
import Helmet from 'react-helmet';

interface Props {
  children: React.ReactNode;
  title?: string;
  description?: string;
  image?: string | null;
}

const globalCss = css`
  body {
    margin: 0;
  }

  p:last-child {
    margin-bottom: 0;
  }
`;

const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
        description
        keywords
        language
      }
    }
  }
`;

export default function Layout({ children, title: customTitle, description: customDescription, image }: Props) {
  const { site } = useStaticQuery(query);
  const { title, description, keywords, language } = site.siteMetadata;

  return (
    <StyledLayout>
      <Global styles={globalCss} />
      <Helmet title={customTitle || title}>
        <html lang={language} />
        <meta name="description" content={customDescription || description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={customTitle || title} />
        <meta property="og:description" content={customDescription || description} />
        {image ? <meta property="og:image" content={image} /> : null}
      </Helmet>
      <Main>{children}</Main>
    </StyledLayout>
  );
}
