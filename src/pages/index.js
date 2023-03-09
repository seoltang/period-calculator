import React from 'react';
import { useLocation } from 'react-router-dom';
import DefaultPage from './DefaultPage';
import ResultPage from './ResultPage';
import { PATH } from '../routes/config';
import { MainWrapper, MainBackgroundImg } from './style';

const Main = () => {
  const { pathname } = useLocation();

  return (
    <MainWrapper>
      <MainBackgroundImg />
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
