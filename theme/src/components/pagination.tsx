import React from 'react'
import { Pagination as PaginationStyled, PaginationItem } from '@styles/pagination'

interface Props {
  nextPagePath: string | null
  previousPagePath: string | null
}

export default function Pagination({ nextPagePath, previousPagePath }: Props) {
  return nextPagePath != null || previousPagePath != null ? (
    <PaginationStyled>
      {nextPagePath != null && (
        <PaginationItem position="left" to={nextPagePath}>
          Newer
        </PaginationItem>
      )}
      {previousPagePath != null && (
        <PaginationItem position="right" to={previousPagePath}>
          Older
        </PaginationItem>
      )}
    </PaginationStyled>
  ) : null
}
