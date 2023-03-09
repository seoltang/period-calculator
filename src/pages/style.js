import styled from 'styled-components';
import { flexCustom } from '../styles/theme';
import gradation from '../assets/images/gradation.jpg';

export const MainWrapper = styled.div`
  position: relative;
  ${flexCustom('column', 'center', 'flex-start')}

  height: 100vh;
  width: 100vw;
  min-height: 820px;

  @media (max-width: 400px) {
    width: 100%;
  }
`;

export const MainBackgroundImg = styled.div`
  background-color: #f8f3f4;
  background-image: url(${gradation});
  width: 380px;
  height: 820px;
  opacity: 0.75;
`;
