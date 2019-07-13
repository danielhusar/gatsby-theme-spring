import React from 'react';
import { Styled } from 'theme-ui';
import Layout from '../components/layout';

interface Props {
  pageContext: {
    heading: string;
    content: string;
  };
}

const PageTemplate = ({ pageContext }: Props) => (
  <Layout>
    <Styled.h1>{pageContext.heading}</Styled.h1>
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </Layout>
);

export default PageTemplate;
