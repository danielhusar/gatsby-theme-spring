/// <reference path="./graphql-types.tsx" />

declare module 'gatsby-image' {
  import * as React from 'react';
  // @ts-ignore
  import { ImageSharpFluid, ImageSharpFixed } from '@types/graphql-types';

  export interface FixedObject {
    width: number;
    height: number;
    src: string;
    srcSet: string;
    base64?: string;
    tracedSVG?: string;
    srcWebp?: string;
    srcSetWebp?: string;
    media?: string;
  }

  export interface FluidObject {
    aspectRatio: number;
    src: string;
    srcSet: string;
    sizes: string;
    base64?: string;
    tracedSVG?: string;
    srcWebp?: string;
    srcSetWebp?: string;
    media?: string;
  }

  interface GatsbyImageProps {
    resolutions?: FixedObject;
    sizes?: ImageSharpFluid | ImageSharpFixed;
    fixed?: FixedObject | FixedObject[];
    fluid?: FluidObject | FluidObject[];
    fadeIn?: boolean;
    title?: string;
    alt?: string;
    className?: string | object;
    critical?: boolean;
    crossOrigin?: string | boolean;
    style?: object;
    imgStyle?: object;
    placeholderStyle?: object;
    backgroundColor?: string | boolean;
    onLoad?: () => void;
    onStartLoad?: (param: { wasCached: boolean }) => void;
    onError?: (event: any) => void;
    Tag?: string;
    itemProp?: string;
    loading?: `auto` | `lazy` | `eager`;
    draggable?: boolean;
  }

  export default class GatsbyImage extends React.Component<GatsbyImageProps, any> {}
}
