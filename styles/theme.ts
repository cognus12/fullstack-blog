const baseColors = {
  gray100: '#708090',
  gray200: '#33363b',
  gray300: '#303846',
  gray400: '#1f2326',
  green100: '#09d3ac',
  white100: '#f0f4f9',
  black100: '#14171a',
  black200: '#0c1013',
};

export const theme = {
  colors: {
    font: {
      primary: baseColors.white100,
    },
    logo: {
      color: baseColors.green100,
    },
    body: {
      background: baseColors.black100,
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
    header: {
      background: baseColors.black200,
    },
    footer: {
      background: baseColors.black200,
    },
    sidebar: {
      background: baseColors.gray400,
    },
    postCard: {
      background: baseColors.black200,
    },
  },
};
