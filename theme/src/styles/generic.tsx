import { css } from '@emotion/core';

export default css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
  }

  img {
    max-width: 100%;
  }

  p:last-child {
    margin-bottom: 0;
  }

  .header-anchor-link {
    position: absolute;
    left: 0;
    opacity: 0;
    transition: opacity 0.2s;
    font-size: 1.2em;
    margin-top: -0.2em;
    text-decoration: none;
    color: inherit;

    &:after {
      content: '#';
      font-weight: 100;
      font-size: 80%;
    }

    svg {
      display: none;
    }
  }

  h1[id],
  h2[id],
  h3[id],
  h4[id],
  h5[id],
  h6[id] {
    position: relative;
    padding-left: 15px !important;
    margin-left: -15px !important;

    &:hover .header-anchor-link {
      opacity: 1;
    }
  }

  h1[id] {
    padding-left: 23px !important;
    margin-left: -23px !important;
  }

  h2[id] {
    padding-left: 20px !important;
    margin-left: -20px !important;
  }
`;
