import React from 'react';
import DefaultPageDescription from '../../components/DefaultPageDescription';
import DefaultPageInputs from '../../components/DefaultPageInputs';
import gradation from '../../assets/images/gradation_bg.jpg';
import styled from 'styled-components';
import { flexCustom } from '../../styles/theme';

const DefaultPage = () => {
  return (
    <MainWrapper>
      <MainBackgroundImg src={gradation} alt="background" />
      <DefaultPageDescription />
      <DefaultPageInputs border />
    </MainWrapper>
  );
};

export default DefaultPage;

const MainWrapper = styled.div`
  position: relative;
  ${flexCustom('column', 'center', 'flex-start')}

  height: 100vh;
  width: 100vw;
  min-height: 820px;
  // max-height: 380px;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

const MainBackgroundImg = styled.img`
  max-width: 400px;
  opacity: 0.75;
`;
