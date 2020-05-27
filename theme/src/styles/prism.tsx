import { css } from '@emotion/core'
import FiraCodeRegularWoff from '../fonts/FiraCode-Light.woff'
import FiraCodeRegularWoff2 from '../fonts/FiraCode-Light.woff2'

export default css`
  @font-face {
    font-family: 'Fira Code';
    src: url(${FiraCodeRegularWoff}) format('woff2'), url(${FiraCodeRegularWoff2}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  code {
    color: #ccc;
    background: #2d2d2d;
    padding: 1px 5px;
    border-radius: 3px;
    font-size: 15px;
    font-family: 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-feature-settings: 'calt' 1 !important; /* Enable ligatures for IE 10+, Edge */
    text-rendering: optimizeLegibility !important; /* Force ligatures for Webkit, Blink, Gecko */
    font-variation-settings: 'wght' 400 !important;
    font-weight: 400;
  }

  code[class*='language-'] {
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    display: block;
    -moz-tab-size: 2;
    -o-tab-size: 2;
    tab-size: 2;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
    padding: 0.8em;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    font-size: 14px;
  }

  pre {
    background: none;
    margin: 0;
    padding: 0;
    font-family: 'Fira Code', Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace !important;
    font-feature-settings: 'calt' 1 !important; /* Enable ligatures for IE 10+, Edge */
    text-rendering: optimizeLegibility !important; /* Force ligatures for Webkit, Blink, Gecko */
    font-variation-settings: 'wght' 400 !important;
  }

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #999;
  }

  .token.punctuation {
    color: #ccc;
  }

  .token.tag,
  .token.attr-name,
  .token.namespace,
  .token.deleted {
    color: #e2777a;
  }

  .token.function-name {
    color: #6196cc;
  }

  .token.boolean,
  .token.number,
  .token.function {
    color: #f08d49;
  }

  .token.property,
  .token.class-name,
  .token.constant,
  .token.symbol {
    color: #f8c555;
  }

  .token.selector,
  .token.important,
  .token.atrule,
  .token.keyword,
  .token.builtin {
    color: #cc99cd;
  }

  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable {
    color: #7ec699;
  }

  .token.operator,
  .token.entity,
  .token.url {
    color: #67cdcc;
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.inserted {
    color: green;
  }
`
