import { selectAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(selectAnatomy.keys);

const brand = definePartsStyle({
  field: {
    background: 'white',
    border: '1px solid',
    borderColor: '#E1DFDF',
    borderRadius: 'full',
    _dark: {},
    _hover: {
      background: 'gray.200',
      // background: '#FAFAFA',
    },
  },
  icon: {
    color: '#000',
  },
});

export const selectTheme = defineMultiStyleConfig({
  variants: { brand },
});
