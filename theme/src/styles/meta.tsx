import styled from '@components/styled'

export const Meta = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  color: ${({ theme }) => theme.colors.light};

  span {
    padding: 0 10px;
  }
`
