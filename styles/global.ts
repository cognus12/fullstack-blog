import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const screenSize = {
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1440px',
  large: '2560px',
};

export const device = {
  mobileM: `(min-width: ${screenSize.mobileM})`,
  mobileL: `(min-width: ${screenSize.mobileL})`,
  tablet: `(min-width: ${screenSize.tablet})`,
  laptop: `(min-width: ${screenSize.laptop})`,
  desktop: `(min-width: ${screenSize.desktop})`,
  large: `(min-width: ${screenSize.large})`,
};

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
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
