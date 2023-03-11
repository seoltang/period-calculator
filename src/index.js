import React from 'react';
import ReactDOM from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import { ThemeProvider } from 'styled-components';
import enUsMsg from './translations/en.json';
import koMsg from './translations/ko.json';
import Router from './routes';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';

const DEFALUT_LANGUAGE = 'en-US';
let locale;

switch (navigator.language) {
  case 'ko-KR':
    locale = 'ko';
    break;

  case navigator.language:
    locale = navigator.language;
    break;

  default:
    locale = DEFALUT_LANGUAGE;
    break;
}

// const locale = localStorage.getItem('locale') ?? 'ko'; // 사용자가 선택할 수 있게된 후
const messages = { 'en-US': enUsMsg, ko: koMsg }[locale];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyle />
    <IntlProvider locale={locale} key={locale} messages={messages}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </IntlProvider>
  </>,
);
