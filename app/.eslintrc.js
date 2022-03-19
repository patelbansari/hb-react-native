module.exports = {
  root: true,
  extends: ['@react-native-community', 'prettier', "plugin:import/errors", "plugin:import/warnings"],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import'],
  env: {
    node: true,
  },
  rules: {
    semi: ['error', 'never'],
    'padding-line-between-statements': [
      'warn',
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    '@typescript-eslint/member-delimiter-style': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'parent', 'sibling', 'index'],
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
}
