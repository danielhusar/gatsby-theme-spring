export default {
  colors: {
    text: '#232129',
    background: 'white',
    light: '#968d8d',
  },
  fonts: {
    default:
      'Source Sans Pro, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  fontSizes: [16, 18, 20, 22, 27, 36],
  margins: ['1.5em', '1em'],
  lineHeights: {
    text: '1.45',
    heading: '1.1',
  },
  sizes: {
    container: 800,
  },
  styles: {
    Layout: {
      backgroundColor: 'background',
      color: 'text',
      fontFamily: 'default',
      fontSize: [0, 1],
      lineHeight: 'text',
    },
    Header: {
      display: 'block',
      margin: 0,
      padding: '0 0 40px',
      textAlign: 'center',
      fontSize: [1, 2],
      img: {
        borderRadius: '5px',
      },
    },
    Main: {
      margin: '0 auto',
      width: 'container',
      maxWidth: '100%',
      padding: '40px 20px',
      position: 'relative',
    },
    h1: {
      color: 'text',
      fontSize: [4, 5],
      lineHeight: 'heading',
      margin: ['1em 0 .3em', '1.5em 0 .3em'],
    },
    h2: {
      color: 'text',
      fontSize: [3, 4],
      lineHeight: 'heading',
      margin: ['1em 0 .3em', '1.5em 0 .3em'],
    },
    h3: {
      color: 'text',
      fontSize: [2, 3],
      margin: ['1em 0 .3em', '1.5em 0 .3em'],
    },
    h4: {
      color: 'text',
      fontSize: [1, 2],
      margin: ['1em 0 .3em', '1.5em 0 .3em'],
    },
    h5: {
      color: 'text',
      fontSize: [0, 1],
      margin: ['1em 0', '1.5em 0'],
    },
    p: {
      margin: ['1em 0', '1.5em 0'],
    },
    ol: {
      margin: ['1em 0', '1.5em 0'],
    },
    ul: {
      margin: ['1em 0', '1.5em 0'],
    },
    section: {
      margin: ['1em 0', '1.5em 0'],
    },
    blockquote: {
      margin: ['1em 0', '1.5em 0'],
      paddingLeft: '20px',
      borderLeft: '5px solid #968d8d',
    },
    table: {
      margin: ['1em 0', '1.5em 0'],
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
};
