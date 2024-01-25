import { extendTheme } from '@chakra-ui/react';
import Heading from './heading';
import { tableTheme } from './table';

// Colors
const colors = {
  gfc: {
    primary: {
      400: '#34CAA5',
      500: '#20B691',
    },
    neutral: {
      // 50: '#FAFAFA',
      // 100: '#F1F1F1',
      500: '#737373',
    },
    white: '#FFFFFF',
    black: {
      // 300: '#0E0E0E',
      // 500: '#101010',
      // 900: '#000000',
    },
    error: '#ED544E',
  },
};

export const theme = extendTheme({
  fonts: {
    heading: 'var(--font-pj-sans)',
    body: 'var(--font-pj-sans)',
  },
  colors,
  components: {
    Heading,
    Table: tableTheme,
  },
});
