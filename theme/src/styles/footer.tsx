import styled from '@components/styled';

export const Footer = styled.footer`
  margin-top: 60px;
  padding: 30px 0 0;
  position: relative;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;

  &:before {
    content: '';
    border-top: 1px solid ${({ theme }) => theme.colors.light};
    width: 100px;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;
