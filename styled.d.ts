import 'styled-components';

type ColorGroup =
  | 'font'
  | 'logo'
  | 'image'
  | 'tag'
  | 'link'
  | 'header'
  | 'sidebar'
  | 'footer'
  | 'postCard'
  | 'body'
  | 'fullPost'
  | 'common';

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
