const baseColors = {
  gray100: '#708090',
  gray200: '#33363b',
  gray300: '#303846',
  green100: '#09d3ac',
  white100: '#f0f4f9',
  black100: '#242526',
  black200: '#18191a',
};

export const theme = {
  colors: {
    font: {
      primary: baseColors.white100,
    },
    layout: {
      primary: baseColors.black200,
      secondary: baseColors.black100,
      content: baseColors.gray300,
    },
    logo: {
      color: baseColors.green100,
    },
    image: {
      background: baseColors.gray200,
    },
    tag: {
      background: baseColors.gray100,
    },
    link: {
      hover: baseColors.green100,
    },
  },
};
