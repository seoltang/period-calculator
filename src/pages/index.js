import React from 'react';
import { useLocation } from 'react-router-dom';
import DefaultPage from './DefaultPage';
import ResultPage from './ResultPage';
import { ROUTE_PATH } from '../constants/routePath';
import { MainWrapper, HourGlass, MainBackground, BackgroundGradient } from './style';

function Main() {
  const { pathname } = useLocation();

  return (
    <MainWrapper>
      <HourGlass />
      <MainBackground>
        <BackgroundGradient />
      </MainBackground>
      {
        {
          [ROUTE_PATH.default]: <DefaultPage />,
          [ROUTE_PATH.result]: <ResultPage />,
        }[pathname]
      }
    </MainWrapper>
  );
}

export default Main;
