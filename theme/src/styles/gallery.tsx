import styled from '@components/styled'

export const Gallery = styled.div`
  line-height: 0;
  margin: 0.3em 0;

  @media screen and (min-width: 40em) {
    margin: 0.7em 0;
  }

  p {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -0.7em !important;
  }

  .gatsby-resp-image-background-image,
  img {
    margin: 0 !important;
    border-radius: 3px;
  }

  p > .gatsby-resp-image-link,
  p > .gatsby-resp-image-wrapper {
    flex-basis: calc(33.333%);
    width: calc(33.333%);
    max-width: calc(33.333%) !important;
    padding: 0.7em;
  }

  @media (max-width: 700px) {
    p > .gatsby-resp-image-link,
    p > .gatsby-resp-image-wrapper {
      flex-basis: calc(50%);
      width: calc(50%);
      max-width: calc(50%) !important;
    }
  }

  @media (max-width: 410px) {
    p > .gatsby-resp-image-link,
    p > .gatsby-resp-image-wrapper {
      flex-basis: calc(100%);
      width: calc(100%);
      max-width: calc(100%) !important;
    }
  }
`
