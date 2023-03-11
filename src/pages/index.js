import React from 'react';
import { useLocation } from 'react-router-dom';
import DefaultPage from './DefaultPage';
import ResultPage from './ResultPage';
import { PATH } from '../routes/config';
import {
  MainWrapper,
  HourGlass,
  MainBackground,
  BackgroundGradient,
} from './style';

const Main = () => {
  const { pathname } = useLocation();

  return (
    <MainWrapper>
      <HourGlass />
      <MainBackground>
        <BackgroundGradient />
      </MainBackground>
      {
        {
          [PATH.default]: <DefaultPage />,
          [PATH.result]: <ResultPage />,
        }[pathname]
      }
    </MainWrapper>
  );
};

export default Main;
