/** @import {Linter} from 'eslint' */

import js from '@eslint/js';
import _import from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import typescript from 'typescript-eslint';

/** @type {Linter.Config[]} */
export default [
  js.configs.recommended,
  react.configs.flat.recommended,
  reactHooks.configs['recommended-latest'],
  _import.flatConfigs.recommended,
  prettier,
  {
    languageOptions: {
      ecmaVersion: 2025,
      globals: { globalThis: 'readonly' },
      sourceType: 'module'
    },
    settings: { react: { version: '19' } },
    rules: {
      'import/newline-after-import': 'error',
      'import/no-named-export': 'error',
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
      'react-hooks/exhaustive-deps': 'error',
      'react-hooks/rules-of-hooks': 'error',
      'react/display-name': 'off',
      'react/jsx-uses-react': 'off',
      'react/no-unknown-property': 'off',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
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
