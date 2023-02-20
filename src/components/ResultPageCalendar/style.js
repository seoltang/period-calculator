import styled from 'styled-components';
import { flexCustom } from '../../styles/theme';
import {
  AreaWrapper as _AreaWrapper,
  AreaRow as _AreaRow,
  AreaBox1 as _AreaBox1,
  AreaContent as _AreaContent,
} from '../styleArea';

export const AreaWrapper = styled(_AreaWrapper)`
  position: absolute;
  bottom: 15%;

  max-width: 400px;
  width: 380px;
  padding: 0;

  @media (min-height: 910px) {
    bottom: 20%;
  }
`;

export const AreaRow = styled(_AreaRow)``;

export const AreaBox1 = styled(_AreaBox1)``;

export const AreaCenterContent = styled(_AreaContent)`
  ${flexCustom('column', 'center', 'center')}
`;
