/**
 * This theme uses `theme-ui` under the hood.
 * @see https://theme-ui.com/
 * @see https://theme-ui.com/gatsby-plugin/
 */
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
      fontSize: 1,
      lineHeight: 'text',
    },
    Header: {
      display: 'block',
      margin: 0,
      padding: '40px 0',
      textAlign: 'center',
      fontSize: 2,
      img: {
        borderRadius: '50%',
      },
    },
    Main: {
      margin: '0 auto',
      maxWidth: 'container',
      padding: '0 20px',
    },
    h1: {
      color: 'text',
      fontSize: 5,
      lineHeight: 'heading',
    },
    h2: {
      color: 'text',
      fontSize: 4,
    },
  },
};
