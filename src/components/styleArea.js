import React from 'react';
import styled, { css } from 'styled-components';
import theme from '../styles/theme';

// css 정책 !!!!!
// margin, pading, border 값은 아래 작성된 공통사항중에서만 셀렉해서 사용합니다--
// 폰트(+line-height)는 em 단위, padding과 margin은 px 단위를 사용합니다
// 가장 큰거에다가 min-width를 넣고, 그 안에 박스들한테는 % width를 설정
// 가장 큰 거에 shadow넣고 그안에는 두개이상일때 border 넣는걸로
// 내부 패딩 적용하는 방법은 각자 padding-right 20을 넣고, last child에만 넣지 않는방식으로

// border는 default가 #d4d8d9; 진한버전은 #9d9d9d;
// 두꺼운 border는 2.5px solid #222222;
// font-weight 400,500,700,900

// 컴포넌트 구조 : Wrapper -> Row -> Box -> Row -> Box ... -> Content
// 페이지별로 Wrapper는 하나만 존재하며, Content 안에는 하나의 컴포넌트만 존재합니다.

const DEFAULT_MARGIN = 20;
const DEFAULT_PADDING = 20;
const DEFAULT_MINWIDTH = 350;

// AreaWrapper는 컴포넌트안에서 가장 상단의 태그로 한번만 사용됩니다.
export const AreaWrapper = React.memo(styled.div`
  padding: ${DEFAULT_PADDING}px;
`);

// AreaRow의 특징으로는 "flex"가 들어간다는 점입니다.
export const AreaRow = React.memo(styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  :not(:nth-of-type(1)) {
    margin-top: ${DEFAULT_MARGIN}px;
  }
  ${(props) => {
    return css`
      ${getAreaCssStr(props)}
    `;
  }}
`);

// Content는 가장 하위 태그로 쓰입니다 (Content 안에 Row나 Box 없음)
export const AreaContent = React.memo(styled.div`
  ${(props) => {
    return css`
      ${getAreaCssStr(props)}
    `;
  }}
`);

export const AreaBox = React.memo(styled.div`
  :not(:nth-child(1)) {
    margin-left: ${DEFAULT_MARGIN}px;
  }
  ${(props) => {
    return css`
      ${getAreaCssStr(props)}
    `;
  }}
`);

export const AreaBox1 = styled(AreaBox)`
  width: 100%;
`;

export const AreaBox2 = styled(AreaBox)`
  width: 50%;
`;

export const AreaBox3 = styled(AreaBox)`
  width: 33%;
`;

export const AreaBox4 = styled(AreaBox)`
  width: 25%;
`;

export const AreaFlexBox = styled(AreaBox)`
  display: flex;
`;

export const P = React.memo(styled.p`
  font-size: 16px;
  height: 18px;

  color: ${theme.fontNavy}
    ${(props) => {
      if (props.color === 'blue') {
        return css`
          color: ${theme.blue};
        `;
      }
    }};
`);

export const Button = React.memo(styled.button`
  width: 100%;
  height: 100%;

  padding: 0;
  border: none;
  border-radius: 20px;

  font-size: 16px;

  background: linear-gradient(#69d4fb, #1ebefa);
  color: ${theme.white};
`);

const getAreaCssStr = (props) => {
  let cssStr = '';
  cssStr += getCssStrBorder(props);
  cssStr += getCssStrMargin(props);
  cssStr += getCssStrPadding(props);
  cssStr += getCssStrMinWidth(props);
  return cssStr;
};

const getCssStrPadding = (props) => {
  let cssStr = '';
  let defaultCssStr = `${DEFAULT_PADDING}px;`;
  if (props.padding) {
    if (typeof props.padding === 'number') {
      cssStr += `padding: ${props.padding}px;`;
    }
    if (typeof props.padding === 'string') {
      cssStr += `padding: ${props.padding}`;
    } else if (props.padding === true) {
      cssStr += `padding: ${defaultCssStr};`;
    }
  }
  return cssStr;
};

const getCssStrMargin = (props) => {
  let cssStr = '';
  const defaultCssStr = `${DEFAULT_MARGIN}px;`;
  if (props.margin) {
    if (typeof props.margin === 'number') {
      cssStr += `margin: ${props.margin}px !important`;
    }
    if (typeof props.margin === 'string') {
      cssStr += `margin: ${props.margin} !important`;
    } else if (props.margin === true) {
      cssStr += `margin: ${defaultCssStr};`;
    }
  }
  return cssStr;
};

const getCssStrBorder = (props) => {
  let cssStr = '';
  let defaultCssStr = '1px solid #ebedf0;';
  if (props.border) {
    if (props.border === 'bottom') {
      cssStr += `border-bottom: ${defaultCssStr};`;
    } else if (props.border === true) {
      cssStr += `border: ${defaultCssStr};`;
    }
  }
  return cssStr;
};

const getCssStrMinWidth = (props) => {
  let cssStr = '';
  let defaultCssStr = `${DEFAULT_MINWIDTH}px;`;
  if (props.minWidth) {
    if (typeof props.minWidth === 'number') {
      const calculatedMinWidth = DEFAULT_MINWIDTH / props.minWidth;
      cssStr += `min-width: ${calculatedMinWidth}px`;
    } else if (props.minWidth === true) {
      cssStr += `min-width: ${defaultCssStr};`;
    }
  }
  return cssStr;
};
