/** @import {Linter} from 'eslint' */

import js from '@eslint/js';
import _import from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import typescript from 'typescript-eslint';

/** @type {Linter.Config[]} */
export default [
  js.configs.recommended,
  _import.flatConfigs.recommended,
  prettier,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      globals: { globalThis: 'readonly' },
      parserOptions: { ecmaFeatures: { jsx: true } }
    },
    plugins: { react },
    rules: {
      'import/newline-after-import': 'error',
      'import/no-unresolved': 'off',
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          alphabetize: { order: 'asc' },
          groups: ['builtin', 'external', 'internal', 'sibling']
        }
      ],
      'no-async-promise-executor': 'off',
      'no-constant-condition': ['error', { checkLoops: false }],
      'prefer-const': ['error', { destructuring: 'all' }],
      'prettier/prettier': [
        'error',
        {
          arrowParens: 'avoid',
          jsxSingleQuote: true,
          objectWrap: 'collapse',
          plugins: ['prettier-plugin-jsdoc'],
          singleQuote: true,
          trailingComma: 'none'
        },
        { fileInfoOptions: { withNodeModules: true } }
      ],
      'react/jsx-key': 'error',
      'react/jsx-no-undef': 'error',
      'react/jsx-uses-vars': 'error',
      'require-atomic-updates': 'off',
      'sort-imports': ['error', { ignoreDeclarationSort: true }],
      curly: ['error', 'multi-line'],
      eqeqeq: ['error', 'always', { null: 'ignore' }]
    }
  },
  ...typescript.configs.recommended.map(config => ({
    ...config,
    files: ['*.ts', '*.tsx', '*.d.ts']
  })),
  {
    files: ['*.ts', '*.tsx'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'off'
    }
  },
  { files: ['*.d.ts'], rules: { 'import/no-named-export': 'off' } }
];
