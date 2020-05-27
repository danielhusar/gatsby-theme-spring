import React from 'react'
import { Link } from 'gatsby'
import Layout from '@daniel.husar/gatsby-theme-spring/src/components/layout'
import { H1 } from '@daniel.husar/gatsby-theme-spring/src/styles/header'

export default function FourOFour() {
  return (
    <Layout>
      <H1>That page doesn’t exist.</H1>
      <p>
        Head to the <Link to="/">homepage</Link> that does exist.
      </p>
    </Layout>
  )
}
