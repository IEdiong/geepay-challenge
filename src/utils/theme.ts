import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';
import { headingRecipe } from './heading';
import { containerRecipe } from './container';
import { tableSlotRecipe } from './table';
import { nativeSelectSlotRecipe } from './select';

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        gfc: {
          primary: {
            400: { value: '#34CAA5' },
            500: { value: '#20B691' },
          },
          neutral: {
            500: { value: '#737373' },
            600: { value: '#525252' },
          },
          white: { value: '#FFFFFF' },
          gray: {
            100: { value: '#F5F5F5' },
          },
          error: { value: '#ED544E' },
          purple: { value: '#6160DC' },
          blue: { value: '#54C5EB' },
          orange: { value: '#FFB74A' },
          red: { value: '#FF4A55' },
        },
      },
      fonts: {
        heading: { value: 'var(--font-pj-sans)' },
        body: { value: 'var(--font-pj-sans)' },
      },
      breakpoints: {
        sm: { value: '52em' },
        md: { value: '64em' },
        lg: { value: '80em' },
        xl: { value: '90em' },
      },
      sizes: {
        container: {
          sm: { value: '640px' },
          md: { value: '768px' },
          lg: { value: '1024px' },
          xl: { value: '1535px' },
        },
      },
    },
    semanticTokens: {
      colors: {
        dashboardBg: {
          value: { base: '#FAFAFA', _dark: '#0F1115' },
        },
        sidebarBg: {
          value: { base: '#F7F8FA', _dark: '#14161B' },
        },
        cardBg: {
          value: { base: '#FFFFFF', _dark: '#1A1D23' },
        },
        textPrimary: {
          value: { base: '#26282C', _dark: '#E8E8E8' },
        },
        textSecondary: {
          value: { base: '#3A3F51', _dark: '#A0A0A0' },
        },
        textMuted: {
          value: { base: '#898989', _dark: '#808080' },
        },
        borderDefault: {
          value: { base: '#EBECF2', _dark: '#2A2D35' },
        },
        borderInput: {
          value: { base: '#DADDDD', _dark: '#3A3D45' },
        },
        headerBg: {
          value: { base: '#FAFAFA', _dark: '#0F1115' },
        },
      },
    },
    recipes: {
      heading: headingRecipe,
      container: containerRecipe,
      table: tableSlotRecipe,
      nativeSelect: nativeSelectSlotRecipe,
    },
  },
});

export const system = createSystem(defaultConfig, config);
