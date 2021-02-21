import typographyVariants from './typographyVariants';

export const breakpoints = {
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const colors = {
  background: {
    main: {
      color: '#fff',
      contrastText: {
        color: '#000',
      },
    },
  },
  borders: {
    main: {
      color: '#000',
    },
  },
  primary: {
    main: {
      color: '#E9C46A',
      contrastText: '#fff',
    },
  },
  secondary: {
    main: {
      color: '#FFF8E6',
      contrastText: '#000',
    },
  },
};

export default {
  breakpoints,
  colors,
  typographyVariants,
  fontFamily: '\'Fira Sans Condensed\', sans-serif',
};
