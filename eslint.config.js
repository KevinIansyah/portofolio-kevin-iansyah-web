import js from '@eslint/js';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    languageOptions: {
      globals: globals.browser,
    },
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs['flat/essential'],
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
    },
  },
  {
    rules: {
      // Component naming
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-explicit-any': 'off',

      // Component usage rules - INI YANG PENTING!
      'vue/no-undef-components': 'error',
      'vue/no-unused-components': 'warn',

      // Import/Export rules
      'no-undef': 'error',
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
];
