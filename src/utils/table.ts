import { defineSlotRecipe } from '@chakra-ui/react';

export const tableSlotRecipe = defineSlotRecipe({
  slots: ['table', 'thead', 'tbody', 'tr', 'td', 'th'],
  base: {
    thead: {
      fontSize: 'md',
      fontWeight: 'medium',
      lineHeight: '24px',
      textTransform: 'none',
      paddingBlockEnd: '20px',
      color: '#9CA4AB',
    },
    th: {
      paddingBlockEnd: '20px',
    },
    tr: {
      '& td:first-of-type': {
        fontWeight: 'medium',
        lineHeight: '24px',
      },
      '& td:nth-of-type(2)': {
        fontWeight: 'normal',
        color: '#737373',
        lineHeight: '24px',
      },
      '& td:nth-of-type(3)': {
        fontWeight: 'medium',
        color: '#0D062D',
        lineHeight: '24px',
      },
      '& td:nth-of-type(4)': {
        fontWeight: 'normal',
        lineHeight: '24px',
      },
      '& td:nth-of-type(5)': {
        fontSize: 'sm',
        fontWeight: 'normal',
        lineHeight: '22px',
      },
    },
    tbody: {
      '& tr:last-of-type td': {
        borderBottom: 'none',
      },
    },
    td: {
      fontSize: 'md',
      paddingInlineStart: '0',
      paddingBlockStart: '3',
      paddingBlockEnd: '4',
      h: '12',
    },
  },
});
