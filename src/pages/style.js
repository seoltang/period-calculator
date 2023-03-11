import styled from 'styled-components';
import { flexCustom } from '../styles/theme';
import hourGlass from '../assets/images/hourglass-transparent.png';

export const MainWrapper = styled.div`
  position: relative;
  ${flexCustom('column', 'center', 'flex-start')}

  height: 100vh;
  min-height: 820px;
  background-color: #fde0dc;
  z-index: -100;
`;

export const HourGlass = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(calc(-50% - 300px));
  width: 500px;
  height: 500px;
  background-image: url(${hourGlass});
  z-index: -99;
`;

export const MainBackground = styled.div`
  width: 400px;
  height: 100%;
  background-color: white;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);

  @media (max-width: 540px) {
    width: 100%;
  }
`;

export const BackgroundGradient = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(217deg, lavenderBlush, rgba(255, 0, 0, 0) 70.71%),
    linear-gradient(127deg, mintCream, rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, aliceBlue, rgba(0, 0, 255, 0) 70.71%);
`;
