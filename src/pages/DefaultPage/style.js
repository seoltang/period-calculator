import styled from 'styled-components';
import theme, { TitleH3 as _TitleH3 } from '../../styles/theme';
import {
  AreaWrapper as _AreaWrapper,
  AreaRow as _AreaRow,
  AreaBox1 as _AreaBox1,
  AreaContent as _AreaContent,
} from '../../components/styleArea';

export const AreaWrapper = styled(_AreaWrapper)`
  background: ${theme.backgroundColor};
`;
export const AreaRow = styled(_AreaRow)``;
export const AreaInputRow = styled(_AreaRow)`
  z-index: 100;
  padding: 0;
  border-top: 2px solid white;
  border-radius: 10px;
`;
export const AreaBox1 = styled(_AreaBox1)``;
export const AreaContent = styled(_AreaContent)``;

export const TitleH3 = styled(_TitleH3)`
  margin: 0;
  padding: 0.2rem 0;

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
  padding: 0.5rem 0;

  line-height: 1.5em;

  color: ${theme.fontGrey};
`;
