import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  * {
    box-sizing: border-box;
  }
  
  body {
    background: ${({ theme }) => theme.colors.mainBg};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
  
  a {
    cursor: pointer;
  }
`;
