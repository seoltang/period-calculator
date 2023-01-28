import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import Router from './routes';
// import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <GlobalStyle /> */}
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  </>
);
