import 'styled-components';

type ColorGroup = 'font' | 'layout' | 'logo' | 'image' | 'tag' | 'link';

type ColorScheme = {
  [key in ColorGroup]: {
    [key: string]: string;
  };
};

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorScheme;
  }
}
