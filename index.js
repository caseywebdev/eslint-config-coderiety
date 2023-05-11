module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 2022,
    sourceType: 'module'
  },
  plugins: ['import', 'prettier', 'react', 'react-hooks'],
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
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'require-atomic-updates': 'off',
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    curly: ['error', 'multi-line'],
    eqeqeq: ['error', 'always', { null: 'ignore' }]
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      extends: 'plugin:@typescript-eslint/recommended',
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off'
      },
      overrides: [
        { files: ['*.d.ts'], rules: { 'import/no-named-export': 'off' } }
      ]
    }
  ],
  settings: {
    'import/internal-regex': '^src/',
    react: { version: '18' }
  },
  globals: { globalThis: 'readonly' }
};
