import styled from 'styled-components';
import { flexCustom } from '../styles/theme';

export const MainWrapper = styled.div`
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

export const MainBackgroundImg = styled.img`
  max-width: 400px;
  opacity: 0.75;
`;
