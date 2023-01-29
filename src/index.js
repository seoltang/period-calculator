import React from 'react';
import ReactDOM from 'react-dom/client';
import { IntlProvider } from 'react-intl';
import enUsMsg from './translations/en.json';
import koMsg from './translations/ko.json';
import { ThemeProvider } from 'styled-components';
import Router from './routes';
// import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';

const DEFALUT_LANGUAGE = 'en-US';
const locale =
  navigator.language === 'ko-KR'
    ? 'ko'
    : navigator.language
    ? navigator.language
    : DEFALUT_LANGUAGE;

// const locale = localStorage.getItem('locale') ?? 'ko'; // 사용자가 선택할 수 있게된 후
const messages = { 'en-US': enUsMsg, ko: koMsg }[locale];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    {/* <GlobalStyle /> */}
    <IntlProvider locale={locale} key={locale} messages={messages}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </IntlProvider>
  </>
);
