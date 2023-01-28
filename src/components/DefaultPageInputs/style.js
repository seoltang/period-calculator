import styled, { css } from 'styled-components';

import 'gestalt/dist/gestalt.css';
import theme from '../../styles/theme';
import {
  AreaWrapper as _AreaWrapper,
  AreaRow as _AreaRow,
  AreaBox as _AreaBox,
  AreaBox1 as _AreaBox1,
  AreaBox2 as _AreaBox2,
  AreaContent as _AreaContent,
  P as _P,
  Button as _Button,
} from '../styleArea';

export const AreaWrapper = styled(_AreaWrapper)`
  position: absolute;
  z-index: 100;
  bottom: 15%;

  max-width: 400px;
  width: 380px;
  padding: 0;

  @media (min-height: 910px) {
    bottom: 20%;
  }
`;
export const AreaRow = styled(_AreaRow)`
  justify-content: flex-start;
  align-items: center;
`;
export const AreaBox1 = styled(_AreaBox1)``;
export const AreaBox2 = styled(_AreaBox2)``;
export const AreaContent = styled(_AreaContent)``;

export const AreaInputRow = styled(_AreaRow)`
  z-index: 100;

  width: 100%;
  max-height: 100%;

  border-top: 3px solid white;
  border-radius: 10%;
`;

export const AreaWhiteBox1 = styled(_AreaBox1)`
  // height: 30px;

  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
`;

export const IconBox = styled(_AreaBox)`
  width: 2%;
`;

export const TextBox = styled(_AreaBox)`
  width: 30%;
`;

export const SelectBox = styled(_AreaBox)`
  width: 30%;
`;

export const ButtonBox = styled(_AreaBox)`
  width: 20%;
`;

export const RadioButtonBox = styled(_AreaBox)`
  width: 70%;
`;

export const InputBox = styled(_AreaBox)`
  width: 65%;
`;

export const SpanBox = styled(_AreaBox)`
  width: 6%;
  :not(:nth-child(1)) {
    margin-left: 5px;
    margin-right: 5px;
  }
`;

export const IconImage = styled.img`
  width: 20px;
  height: 20px;
`;

export const P = styled(_P)`
  ${(props) => {
    if (props.color) {
      const themeColor = theme[props.color];
      return css`
        color: ${themeColor};
      `;
    }
  }};
`;

export const CalendarButton = styled(_Button)`
  height: 28px;
  font-size: 0.9em;
`;

export const ConfirmButton = styled(_Button)`
  height: 60px;
`;

export const RadioButton = styled.input`
  accent-color: ${theme.blue};

  border: 2px solid #fff;
`;
