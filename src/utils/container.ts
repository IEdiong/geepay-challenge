import { defineRecipe } from '@chakra-ui/react';

export const containerRecipe = defineRecipe({
  base: {
    width: { lg: '100%' },
    position: 'relative',
    paddingInline: '0',
    maxWidth: { lg: 'container.xl' },
  },
});
