import 'styled-components';

type ColorGroup =
  | 'font'
  | 'layout'
  | 'logo'
  | 'image'
  | 'tag'
  | 'link'
  | 'header'
  | 'sidebar'
  | 'footer'
  | 'postCard'
  | 'body'
  | 'fullPost';

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
