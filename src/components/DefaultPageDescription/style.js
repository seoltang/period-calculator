import styled from 'styled-components';
import theme from '../../styles/theme';
import {
  AreaWrapper as _AreaWrapper,
  AreaRow as _AreaRow,
  AreaBox1 as _AreaBox1,
  AreaContent as _AreaContent,
} from '../styleArea';

export const AreaWrapper = styled(_AreaWrapper)`
  position: absolute;
`;
export const AreaRow = styled(_AreaRow)``;
export const AreaBox1 = styled(_AreaBox1)``;
export const AreaCenterContent = styled(_AreaContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-width: 300px;
`;

export const TitleH1 = styled.h1`
  margin: 0;
  padding: 0.2rem 0;
  padding-top: 20px;

  font-style: normal;
  font-weight: 700;
  font-size: 1.4em;
  line-height: 1.4em;

  color: ${theme.fontTitle};
`;

export const TitleH5 = styled.h5`
  margin: 0;

  font-style: normal;
  font-weight: 500;
  font-size: 1.2em;
  line-height: 1.2em;

  color: ${theme.blue};
`;

export const P = styled.p`
  margin: 0;
  padding: 0.3rem 0;

  font-weight: 400;
  line-height: 1.6em;

  color: ${theme.fontGrey};
`;
