import { defineStyleConfig } from '@chakra-ui/react';

const Container = defineStyleConfig({
  // Styles for the base style
  baseStyle: {
    width: {
      lg: '100%',
    },
    position: 'relative',
    paddingInline: '0',
    maxWidth: {
      lg: 'container.xl',
    },
  },
});

export default Container;
