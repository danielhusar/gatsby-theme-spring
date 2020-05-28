const margin = ['1em 0', '1.5em 0']
const headingsMargin = ['1em 0 .3em', '1.5em 0 .3em']

export default {
  colors: {
    text: '#232129',
    background: 'white',
    light: '#737376',
    superlight: '#cfcfd9',
  },
  fonts: {
    default:
      'Source Sans Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  fontSizes: [16, 18, 20, 22, 27, 36],
  margin,
  lineHeights: {
    text: '1.45',
    heading: '1.1',
  },
  sizes: {
    container: 800,
  },
  styles: {
    root: {
      backgroundColor: 'background',
      color: 'text',
      fontFamily: 'default',
      fontSize: [0, 1],
      lineHeight: 'text',
    },
    h1: {
      color: 'text',
      fontSize: [4, 5],
      lineHeight: 'heading',
      margin: headingsMargin,
    },
    h2: {
      color: 'text',
      fontSize: [3, 4],
      lineHeight: 'heading',
      margin: headingsMargin,
    },
    h3: {
      color: 'text',
      fontSize: [2, 3],
      margin: headingsMargin,
    },
    h4: {
      color: 'text',
      fontSize: [1, 2],
      margin: headingsMargin,
    },
    h5: {
      color: 'text',
      fontSize: [0, 1],
      margin: headingsMargin,
    },
    h6: {
      color: 'text',
      fontSize: [0, 1],
      margin: headingsMargin,
    },
    a: {
      color: 'inherit',
      ':hover': {
        textDecoration: 'none',
      },
    },
    p: {
      margin,
    },
    ol: {
      margin,
    },
    ul: {
      margin,
    },
    section: {
      margin,
    },
    blockquote: {
      margin,
      paddingLeft: '20px',
      borderLeft: '5px solid #968d8d',
    },
    table: {
      margin,
      width: '100%',
      borderCollapse: 'collapse',
    },
    th: {
      textAlign: 'left',
      padding: '0.5em 0.2em',
    },
    td: {
      padding: '0.5em 0.2em',
      borderTop: '1px solid #968d8d',
    },
  },
}
