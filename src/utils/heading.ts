import { defineStyleConfig } from '@chakra-ui/react';

const Heading = defineStyleConfig({
  // Styles for the base style
  baseStyle: {
    fontWeight: 'semibold',
    fontFamily: 'inherit',
    letterSpacing: 'normal',
    color: '#26282C',
  },
  // Styles for the visual style variations
  variants: {
    //! In use
    h1: {
      fontSize: 'xl',
      lineHeight: '28px',
    },
    'h1-sm': {
      fontSize: '4xl',
      lineHeight: '40px',
      letterSpacing: '1.286px',
    },
    //! In use
    h2: {
      fontSize: 'lg',
      lineHeight: '26px',
    },
    'h2-sm': {
      fontSize: '2xl',
      letterSpacing: '1px',
    },
    //! In use
    h3: {
      fontSize: 'lg',
      lineHeight: '26px',
      color: '#22242C',
    },
  },
  // The default `size` or `variant` values
  defaultProps: {
    variant: 'h2',
  },
});

export default Heading;
