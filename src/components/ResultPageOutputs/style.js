import styled from 'styled-components';
import theme, { flexCustom } from '../../styles/theme';
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
  ${flexCustom('column', 'center', 'center')}
  min-width: 300px;
`;

export const TitleH1 = styled.h1`
  padding: 0.2rem 0;
  padding-top: 20px;

  font-style: normal;
  font-weight: 700;
  font-size: 1.4em;
  line-height: 1.4em;

  color: ${theme.fontTitle};
`;

export const TitleH5 = styled.h5`
  font-weight: 500;
  font-size: 1em;
  line-height: 1.4em;

  color: ${theme.blue};
`;

export const AreaOutputRow = styled(_AreaRow)`
  ${flexCustom('column', 'flex-start', 'center')}
`;

export const OutputBox = styled(_AreaBox1)`
  border-bottom: 1px solid ${theme.lightGrey};
`;

export const OutputText = styled.div`
  font-weight: 700;
  font-size: 1.6em;
  line-height: 1.4em;

  color: ${theme.darkGrey};
`;
