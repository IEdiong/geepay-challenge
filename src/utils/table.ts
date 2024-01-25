import { tableAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(tableAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  thead: {
    th: {
      fontSize: 'md',
      fontWeight: 'medium',
      lineHeight: '24px',
      textTransform: 'none',
      paddingBlockEnd: '20px',
      color: '#9CA4AB',
    },
  },

  tr: {
    'td:first-of-type': {
      fontWeight: 'medium',
      lineHeight: '24px',
    },
    'td:nth-of-type(2)': {
      fontWeight: 'normal',
      color: '#737373',
      lineHeight: '24px',
    },
    'td:nth-of-type(3)': {
      fontWeight: 'medium',
      color: '#0D062D',
      lineHeight: '24px',
    },
    'td:nth-of-type(4)': {
      fontWeight: 'normal',
      lineHeight: '24px',
    },
    'td:nth-of-type(5)': {
      fontSize: 'sm',
      fontWeight: 'normal',
      lineHeight: '22px',
    },
    th: {
      paddingBlockEnd: '20px',
    },
  },

  tbody: {
    'tr:last-of-type': {
      td: {
        borderBottom: 'none',
      },
    },
  },
});

const mdTd = defineStyle({
  fontSize: 'md',
  paddingInlineStart: '0',
  paddingBlockStart: '3',
  paddingBlockEnd: '4',
  h: '12',
});

const mdTh = defineStyle({
  fontSize: 'md',
  paddingInlineStart: '0',
  paddingBlockStart: '0',
  paddingBlockEnd: '0',
  lineHeight: '24px',
});

const sizes = {
  md: definePartsStyle({
    td: mdTd,
    th: mdTh,
  }),
};

export const tableTheme = defineMultiStyleConfig({ baseStyle, sizes });
