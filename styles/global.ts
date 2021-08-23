import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  body {
    background: ${({ theme }) => theme.colors.mainBg};
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;
