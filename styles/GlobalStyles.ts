import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
  ${reset}
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    font-size: 12px;
  }
  body{
    font-size: 1.4rem;
    background-color: #fafafa;
    color: #262626;
    font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  }
  
  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
  ol, ul, li {
    list-style: none;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  input, button {
    background-color: transparent;
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
