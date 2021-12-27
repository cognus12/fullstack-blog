import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    background: ${({ theme }) => theme.colors.body.background};
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
    text-decoration: none;
    color: unset;
  }
  
  svg {
    display: block;
  }
  
  p {
    line-height: 36px;
  }
`;
