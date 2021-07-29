module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2020: true,
    jest: true
  },
  extends: ['eslint:recommended', 'airbnb-base', 'prettier'],
  plugins: ['prettier'],
  globals: {},
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  parser: 'babel-eslint',
  rules: {
    'no-restricted-syntax': ['off', 'ForOfStatement'],
    'no-await-in-loop': 'off',
    'dot-notation': ['off'],
    'no-console': 'off',
    'no-continue': 'off',
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        trailingComma: 'es5',
      },
    ],
  },
}
