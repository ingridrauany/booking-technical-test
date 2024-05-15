import { createGlobalStyle } from 'styled-components';

interface GlobalStylesProps {}

const GlobalStyles = createGlobalStyle<GlobalStylesProps>`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  #root, #__next {
    isolation: isolate;
  }

  html {
    font-size: 14px;
  }

  body {
    color: #485257;
    font-size: 1rem;
    font-family: 'Fredoka', sans-serif;
  }
`;

export default GlobalStyles;