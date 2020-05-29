import { css } from '@emotion/core'

export default css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    -webkit-font-smoothing: antialiased;
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

    + p,
    + style + p,
    + ul,
    + style + ul,
    + ol,
    + style + ol,
    + table,
    + style + table,
    + blockquote,
    + style + blockquote,
    + .pre,
    + style + .pre {
      margin-top: 0.5em !important;

      @media screen and (min-width: 40em) {
        margin-top: 1em !important;
      }
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

  article {
    .gatsby-resp-image-link {
      line-height: 0;
    }

    .gatsby-resp-image-image {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
      opacity: 1;
      transition: none 0s ease 0s;
    }

    .gatsby-resp-image-link {
      position: relative;
    }
  }

  #gatsby-noscript {
    color: white;
    background: #4a65ff;
    text-align: center;
    padding: 10px;
    width: 100%;
    display: block;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
  }
`
