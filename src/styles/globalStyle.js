import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  * {
    box-sizing: border-box;
  }

  body {
    padding: 0;
    margin: 0;

    font-family: 'SF Pro Display', sans-serif;
    line-height: 1.2rem;
    // color: #484848;
  }

  button {
    cursor: pointer;
  }

  body {
    font-family: 'SF Pro Display', sans-serif
  }

  button {
    cursor:pointer;
  }

  b {
    font-weight: bold;
  }
`;
export default GlobalStyle;
