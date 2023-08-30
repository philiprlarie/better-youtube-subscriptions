module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'prettier'],
  rules: {
    'prettier/prettier': 2,

    // rules from eslint
    yoda: 'error',
    'no-var': 'error',
    radix: 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-new-func': 'error',
    'no-param-reassign': 'error',
    'require-atomic-updates': 'error',
    'no-async-promise-executor': 'error',
    'prefer-rest-params': 'error',
    'spaced-comment': 'error',
    'prefer-template': 'error',

    // these rules are from eslint-plugin-import
    'import/no-duplicates': 'error',
    'import/order': [
      'error',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          ['sibling', 'parent', 'index'],
          'object',
          'type',
        ],
        pathGroups: [
          {
            pattern: '?(react|react-*)',
            group: 'builtin',
            position: 'after',
          },
          {
            pattern: '@toasttab/**',
            group: 'internal',
          },
          {
            pattern: 'banquet-runtime-modules',
            group: 'internal',
          },
          {
            pattern: '@local/**',
            group: 'sibling',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],

    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': 'error',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        varsIgnorePattern: '^_',
      },
    ],
  },
}
