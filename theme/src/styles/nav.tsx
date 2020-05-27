import styled from '@components/styled'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

export const Nav = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
  left: 20px;
`

export const NavItem = styled(Link)`
  margin-right: 10px;
  display: inline-block;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1;

  &:hover {
    text-decoration: underline;
  }
`

export const NavPortrait = styled(Img)`
  overflow: hidden;
  border-radius: 5px;
  height: 50px;
`
