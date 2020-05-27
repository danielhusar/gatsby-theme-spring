import styled from '@components/styled';
import { Link } from 'gatsby';

export const Pagination = styled.div`
  display: block;
  margin: 0 0 50px;
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.light};
`;

interface PaginationItemProps {
  position: 'right' | 'left';
}

export const PaginationItem = styled(Link)<PaginationItemProps>`
  margin-right: 10px;
  display: inline-block;
  font-size: ${({ theme }) => theme.fontSizes[0]}px;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  ${({ position }) => position === 'right' && 'float: right;'}
`;
