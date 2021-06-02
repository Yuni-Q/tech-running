import { css } from 'styled-components'

import { DEVICE } from './style'

export const FONT_SCALE = {
  H1: css`
    font-size: 44px;
    line-height: 64px;
    letter-spacing: -1.2px;
  `,
  H2: css`
    font-size: 32px;
    line-height: 48px;
    letter-spacing: -1.2px;
  `,
  H3: css`
    font-size: 22px;
    line-height: 32px;
    letter-spacing: -0.4px;
  `,
  H4: css`
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.4px;
  `,
  H5: css`
    font-size: 16px;
    line-height: 24px;
    letter-spacing: -0.4px;
  `,
  H6: css`
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.4px;
  `,
  DESC: css`
    font-size: 12px;
    line-height: 20px;
    letter-spacing: -0.2px;
  `,
}

export const typo = css`
  h1,
  .h1,
  h2,
  .h2,
  h3,
  .h3,
  h4,
  .h4,
  h5,
  .h5,
  h6,
  .h6 {
    margin-top: 0;
    margin-bottom: 0;
    font-weight: normal;
  }

  h1,
  .h1 {
    ${FONT_SCALE.H1};
    .banner {
      line-height: 56px;
    }
  }

  h2,
  .h2 {
    ${FONT_SCALE.H2};
  }

  h3,
  .h3 {
    ${FONT_SCALE.H3};
  }

  h4,
  .h4 {
    ${FONT_SCALE.H4};
  }

  h5,
  .h5 {
    ${FONT_SCALE.H5};
  }

  h6,
  .h6 {
    ${FONT_SCALE.H6};
  }

  .desc {
    ${FONT_SCALE.DESC};
  }

  .m-h1 {
    @media (${DEVICE.mobile}) {
      ${FONT_SCALE.H1};
    }
  }

  .m-h2 {
    @media (${DEVICE.mobile}) {
      ${FONT_SCALE.H2};
    }
  }

  .m-h3 {
    @media (${DEVICE.mobile}) {
      ${FONT_SCALE.H3};
    }
  }

  .m-h4 {
    @media (${DEVICE.mobile}) {
      ${FONT_SCALE.H4};
    }
  }

  .m-h5 {
    @media (${DEVICE.mobile}) {
      ${FONT_SCALE.H5};
    }
  }

  .m-h6 {
    @media (${DEVICE.mobile}) {
      ${FONT_SCALE.H6};
    }
  }

  .m-desc {
    @media (${DEVICE.mobile}) {
      ${FONT_SCALE.DESC};
    }
  }

  .bold {
    font-weight: bold !important;
  }
  .bolder {
    font-weight: bolder !important;
  }

  .align-baseline {
    vertical-align: baseline !important;
  }
  .align-top {
    vertical-align: top !important;
  }
  .align-middle {
    vertical-align: middle !important;
  }
  .align-bottom {
    vertical-align: bottom !important;
  }
  .align-text-bottom {
    vertical-align: text-bottom !important;
  }
  .align-text-top {
    vertical-align: text-top !important;
  }

  .text-center {
    text-align: center !important;
  }
  .text-right {
    text-align: right !important;
  }
  .text-left {
    text-align: left !important;
  }
  .text-justify {
    text-align: justify !important;
  }
  .text-wrap {
    white-space: normal !important;
  }
  .text-nowrap {
    white-space: nowrap !important;
  }
  .text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .text-lowercase {
    text-transform: lowercase !important;
  }
  .text-uppercase {
    text-transform: uppercase !important;
  }
  .text-capitalize {
    text-transform: capitalize !important;
  }

  .text-underline {
    text-decoration: underline !important;
  }

  .font-weight-light {
    font-weight: 300 !important;
  }
  .font-weight-lighter {
    font-weight: lighter !important;
  }
  .font-weight-normal {
    font-weight: 400 !important;
  }
  .font-weight-medium {
    font-weight: 500 !important;
  }
  .font-weight-bold {
    font-weight: 700 !important;
  }
  .font-weight-bolder {
    font-weight: bolder !important;
  }
  .font-italic {
    font-style: italic !important;
  }

  .text-break {
    word-break: break-word !important; // IE & < Edge 18
    overflow-wrap: break-word !important;
  }

  .text-break-all {
    word-break: break-all !important;
  }

  .text-small {
    font-size: 85%;
  }

  .btn-text {
    border: none;
    display: inline;
    padding: 0;
    margin: 0;
  }

  .text-ellipsis {
    white-space: normal;
    line-height: 1.4;
    height: 1.4em;
    text-align: left;
    word-wrap: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
  }

  _:-ms-fullscreen,
  :root .text-ellipsis {
    white-space: nowrap;
  }

  .text-ellipsis-2 {
    max-height: 2.86em;
    line-height: 1.4;
    text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .break-keep-all {
    word-break: keep-all;
  }
`
