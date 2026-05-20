import { defineRecipe } from '@chakra-ui/react';

export const headingRecipe = defineRecipe({
  base: {
    fontWeight: 'semibold',
    fontFamily: 'inherit',
    letterSpacing: 'normal',
    color: 'textPrimary',
  },
  variants: {
    size: {
      h1: {
        fontSize: 'xl',
        lineHeight: '28px',
      },
      'h1-sm': {
        fontSize: '4xl',
        lineHeight: '40px',
        letterSpacing: '1.286px',
      },
      h2: {
        fontSize: 'lg',
        lineHeight: '26px',
      },
      'h2-sm': {
        fontSize: '2xl',
        letterSpacing: '1px',
      },
      h3: {
        fontSize: 'lg',
        lineHeight: '26px',
        color: 'textSecondary',
      },
    },
  },
  defaultVariants: {
    size: 'h2',
  },
});
