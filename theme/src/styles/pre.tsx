import styled from '@components/styled';
import { css } from '@emotion/core';
import { defaultMargin } from './utils';

export const LiveWrap = styled.div`
  ${defaultMargin}

  code {
    display: block !important;
  }
`;

export const FileName = styled.div`
  font-size: 12px;
  padding: 0.2em 0.8em 0.3em;
  border: 1px solid ${({ theme }) => theme.colors.light};
  border-radius: 3px;
  border-bottom: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`;

interface LiveEditWrapProps {
  withFilename?: boolean;
  liveEdit?: boolean;
}

export const LiveEditWrap = styled.code<LiveEditWrapProps>`
  margin-bottom: 0 !important;
  position: relative;

  ${({ withFilename }) =>
    withFilename &&
    css`
      border-top-left-radius: 0 !important;
      border-top-right-radius: 0 !important;
    `}

  ${({ liveEdit }) =>
    liveEdit &&
    css`
      border-bottom-left-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
    `}

  pre:focus {
    outline-offset: 12px;
  }
`;

export const LiveLabel = styled.div`
  position: absolute;
  top: 5px;
  right: 0;
  font-size: 10px;
  text-transform: uppercase;
  padding: 2px 3px 1px;
  background: white;
  color: ${({ theme }) => theme.colors.text};
  border: 1px solid ${({ theme }) => theme.colors.light};
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
`;

export const LiveErrorWrap = styled.div`
  pre {
    margin: 0;
    padding: 1em;
    color: white;
    background: #a04141;
    font-size: 14px;
  }
`;

export const LivePreviewWrap = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.light};
  border-top: 0;
  padding: 1em;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  font-size: 15px;
  position: relative;
`;
