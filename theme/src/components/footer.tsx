import React from 'react'
import { Footer as FooterStyled } from '@styles/footer'
import { Styled } from 'theme-ui'

export default function Footer() {
  return (
    <FooterStyled>
      © {new Date().getFullYear()}, Built with <Styled.a href="https://www.gatsbyjs.org/">Gatsby</Styled.a>
    </FooterStyled>
  )
}
