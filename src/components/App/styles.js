import { css } from '@emotion/core';

export const globalCSS = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    min-height: 100vh;
    color: #808080;
  }

  a {
    text-decoration: none;
    color: inherit;
    display: inline-flex;
    align-items: center;
  }
  input[type="number"] {
    &::-webkit-inner-spin-button &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  button {
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
    }
  }

  #root {
    min-height: 100vh;
  }
`;

export const container = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
