import styled, { css } from 'styled-components';
import theme from '../../styles/theme';
import {
  AreaWrapper as _AreaWrapper,
  AreaRow as _AreaRow,
  AreaBox1 as _AreaBox1,
  AreaBox2 as _AreaBox2,
  AreaContent as _AreaContent,
  P as _P,
  Button as _Button,
} from '../styleArea';

export const AreaWrapper = styled(_AreaWrapper)`
  position: absolute;
  z-index: 100;
  transform: translate(0, 60%);

  height: 60%;
  padding: 0;

  // background: ${theme.backgroundColor};
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
  border-radius: 16px;
`;

export const IconBox = styled(_AreaBox1)`
  width: 10%;
`;

export const QuestionBox = styled(_AreaBox1)`
  width: 30%;
`;

export const AnswerBox = styled(_AreaBox1)`
  width: 40%;
`;

export const ButtonBox = styled(_AreaBox1)`
  width: 20%;
`;

export const IconImage = styled.img`
  width: 20px;
  height: 20px;
`;

export const P = styled(_P)`
  margin: 1em 0;

  ${(props) => {
    if (props.color === 'blue') {
      return css`
        color: ${theme.blue};
      `;
    }
    if (props.color === 'red') {
      return css`
        color: ${theme.red};
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
