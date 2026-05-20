import { defineSlotRecipe } from '@chakra-ui/react';

export const nativeSelectSlotRecipe = defineSlotRecipe({
  slots: ['root', 'field', 'indicator'],
  base: {
    root: {
      background: 'white',
      border: '1px solid',
      borderColor: '#E1DFDF',
      borderRadius: 'full',
    },
    field: {
      background: 'white',
      borderRadius: 'full',
      _hover: {
        background: 'gray.200',
      },
    },
    indicator: {
      color: '#000',
    },
  },
});
