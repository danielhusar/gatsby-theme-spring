// https://github.com/erikdstock/DefinitelyTyped/pull/1/files

declare module 'theme-ui' {
  import * as StyledSystem from 'styled-system';
  import { SystemStyleObject } from '@styled-system/css';
  import * as React from 'react';
  import * as Emotion from '@emotion/core';
  import * as CSS from 'csstype';
  export {};

  type Omit<T, K> = Pick<T, Exclude<keyof T, K>>;
  type ObjectOrArray<T> = T[] | { [K: string]: T | ObjectOrArray<T> };
  type Object<T> = { [k: string]: T | Object<T> };

  export const ThemeProvider: typeof Emotion.ThemeContext.Provider;

  type SSColors = StyledSystem.Theme['colors'];
  type ColorModes = {
    [k: string]: Partial<Omit<Theme['colors'], 'modes'>>;
  };

  // TODO: Are Theme.colors.background, text, etc really required?
  export interface Theme extends StyledSystem.Theme {
    /** Provide a value here to enable color modes */
    initialColorMode?: string;
    colors?: { [k: string]: CSS.ColorProperty | ObjectOrArray<CSS.ColorProperty> } & {
      /** Body background color */
      background: CSS.ColorProperty;
      /** Body foreground color */
      text: CSS.ColorProperty;
      /** Primary brand color for links, buttons, etc. */
      primary: CSS.ColorProperty;
      /** A secondary brand color for alternative styling */
      secondary: CSS.ColorProperty;
      /** A faint color for backgrounds, borders, and accents that do not require high contrast with the background color */
      muted: CSS.ColorProperty;
      /** A contrast color for emphasizing UI */
      accent: CSS.ColorProperty;
      /** Nested color modes can provide overrides when used in conjunction with `Theme.initialColorMode and `useColorMode()` */
      modes?: ColorModes;
    };

    /**
     * Styles for elements rendered in MDX can be added to the theme.styles object.
     * This is the primary, low-level way to control typographic and other styles in markdown content.
     * Styles within this object are processed with @styled-system/css
     * and have access to base theme values like colors, fonts, etc.
     */
    styles?: {
      [k: string]: SystemStyleObject;
    };
  }
  /**
   * A React renderer with awareness of the `sx` prop.
   * Requires the [custom @jsx jsx pragma](https://theme-ui.com/sx-prop) declaration
   * at the top of your file for use.
   */
  export const jsx: typeof React.createElement;

  type SxComponent = React.ComponentClass<any>;
  export const Box: SxComponent;
  export const Container: SxComponent;
  export const Flex: SxComponent;
  export const Header: SxComponent;
  export const Footer: SxComponent;
  export const Layout: SxComponent;
  export const Main: SxComponent;
  export const Styled: { [k: string]: SxComponent };
}
