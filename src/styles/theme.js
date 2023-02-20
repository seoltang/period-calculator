import { css } from 'styled-components';

const theme = {
  white: '#ffffff',
  backgroundColor: '#fafafa',
  blue: '#1DBEF9',
  red: '#FD6754',
  orange: '#FE9B4B',
  navy: '#3C5073',
  darkNavy: '#1E2843',
  lightGrey: '#e6e6e6',
  darkGrey: '#606060',
  fontTitle: '#465A7A',
  fontGrey: '#acadb5',
  fontNavy: '#45597a',
};

export const flexCustom = (flexDirection, alignItems, justifyContent) => css`
  display: flex;
  flex-direction: ${flexDirection || 'initial'};
  align-items: ${alignItems || 'center'};
  justify-content: ${justifyContent || 'center'};
`;

export default theme;
