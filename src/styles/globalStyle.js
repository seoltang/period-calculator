import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
  // ${reset}
  
  // * {
  //   box-sizing: border-box;
  // }

  // body {
  //   padding: 0;
  //   margin: 0;

  //   font-family: 'SF Pro Display', sans-serif;
  //   // color: #484848;
  // }

  // button {
  //   cursor: pointer;
  // }

  // p, span.text {
  //   font-size: 16px;
  //   line-height: 16px;
  //   color: ${theme.fontNavy};
  // }
`;
export default GlobalStyle;
