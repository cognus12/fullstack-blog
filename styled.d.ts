import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      mainBg: string;
      headerBg: string;
      textPrimary: string;
      logo: string;
      secondaryBg: string;
      imageBg: string;
    };
  }
}
