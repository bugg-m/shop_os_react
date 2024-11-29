import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

export default {
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    js.configs.recommended,
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    prettier,
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['react-hooks', 'react-refresh', '@typescript-eslint'],
  globals: {
    browser: true,
  },
  rules: {
    'react-hooks/rules-of-hooks': 'warn',
    'react-hooks/exhaustive-deps': 'warn',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/explicit-module-boundary-types': 'warn',
    'react/react-in-jsx-scope': 'off',
  },
  ignorePatterns: ['dist'],
};
