import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    background: ${({ theme }) => theme.colors.layout.primary};
    color: ${({ theme }) => theme.colors.font.primary};
  }

  body::-webkit-scrollbar {
    width: 8px;
  }

  body::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.logo.color};
    outline: 1px solid slategrey;
  }
  
  a, button {
    cursor: pointer;
  }
`;
