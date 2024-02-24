import { extendTheme } from '@chakra-ui/react';
import Heading from './heading';
import { tableTheme } from './table';
import { selectTheme } from './select';
import Container from './container';

// Colors
const colors = {
  gfc: {
    primary: {
      400: '#34CAA5',
      500: '#20B691',
    },
    neutral: {
      500: '#737373',
      600: '#525252',
    },
    white: '#FFFFFF',
    gray: {
      100: '#F5F5F5',
    },
    error: '#ED544E',
    purple: '#6160DC',
    blue: '#54C5EB',
    orange: '#FFB74A',
    red: '#FF4A55',
  },
};

// breakpoints
const breakpoints = {
  base: '0em',
  sm: '30em',
  md: '46em',
  lg: '75em',
  xl: '90em',
  '2xl': '96em',
};

// sizes
const sizes = {
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    // xl: '1360px',
    xl: '1535px',
  },
};

export const theme = extendTheme({
  fonts: {
    heading: 'var(--font-pj-sans)',
    body: 'var(--font-pj-sans)',
  },
  colors,
  breakpoints,
  sizes,
  components: {
    Heading,
    Container,
    Table: tableTheme,
    Select: selectTheme,
  },
  config: {
    cssVarPrefix: 'gee',
  },
});
