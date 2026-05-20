import { defineConfig } from 'eslint/config';
import { fixupConfigRules } from '@eslint/compat';
import js from '@eslint/js';
import next from 'eslint-config-next';
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';

export default defineConfig([
  js.configs.recommended,
  ...fixupConfigRules(next),
  ...fixupConfigRules(nextCoreWebVitals),
  {
    languageOptions: {
      globals: {
        React: 'readonly',
      },
    },
    rules: {
      'no-unused-vars': [
        'warn',
        { args: 'after-used', argsIgnorePattern: '^_' },
      ],
    },
  },
]);
