import React from 'react';
import Layout from '@components/layout';
import { H1 } from '@styles/header';
import { Link } from 'gatsby';

export default function FourOFour() {
  return (
    <Layout>
      <H1>That page doesn’t exist.</H1>
      <p>
        Head to the <Link to="/">homepage</Link> that does exist.
      </p>
    </Layout>
  );
}
