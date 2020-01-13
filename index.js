module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended'
  ],
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2019,
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['import', 'prettier', 'react', 'react-hooks'],
  rules: {
    'import/newline-after-import': 'error',
    'import/no-named-export': 'error',
    'import/no-unresolved': 'off',
    'import/order': [
      'error',
      { alphabetize: { order: 'asc' }, 'newlines-between': 'always' }
    ],
    'prefer-const': ['error', { destructuring: 'all' }],
    'prettier/prettier': [
      'error',
      { jsxSingleQuote: true, singleQuote: true },
      { fileInfoOptions: { withNodeModules: true } }
    ],
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/display-name': 'off',
    'react/prop-types': 'off',
    'require-atomic-updates': 'off',
    'require-await': 'error',
    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    curly: ['error', 'multi-line']
  },
  settings: {
    'import/internal-regex': '^src/',
    react: { version: 'latest' }
  }
};
