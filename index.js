module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'import', 'prettier', 'react', 'react-hooks'],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
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
    'no-unused-vars': 'off',
    'prefer-const': ['error', { destructuring: 'all' }],
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        jsxSingleQuote: true,
        singleQuote: true,
        trailingComma: 'none'
      },
      { fileInfoOptions: { withNodeModules: true } }
    ],
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/display-name': 'off',
    'react/jsx-uses-react': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'require-atomic-updates': 'off',
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    curly: ['error', 'multi-line'],
    eqeqeq: ['error', 'always', { null: 'ignore' }]
  },
  settings: {
    'import/internal-regex': '^src/',
    react: { version: '17' }
  },
  globals: { globalThis: 'readonly' }
};
