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

  body::-webkit-scrollbar {
    width: 8px;
  }

  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.logo};
    outline: 1px solid slategrey;
  }
  
  a {
    cursor: pointer;
  }
`;
