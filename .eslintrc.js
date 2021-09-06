module.exports = {
  extends: [
    'airbnb',
    'prettier',
    'next/core-web-vitals',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    'simple-import-sort',
    'jsx-a11y',
    'prettier',
    '@typescript-eslint',
    'import',
    'react',
    'react-hooks',
  ],
  rules: {
    // code style
    'arrow-body-style': ['warn', 'as-needed'],
    'arrow-parens': ['warn', 'as-needed'],
    'arrow-spacing': 'warn',
    'no-confusing-arrow': 'warn',
    'prefer-arrow-callback': 'warn',
    'dot-notation': 'warn',
    'no-console': 'warn',
    'no-multi-assign': 'warn',
    'no-var': 'warn',
    'prefer-template': 'warn',
    quotes: ['warn', 'single'],
    semi: ['error', 'never'],
    'no-useless-escape': 'warn',
    'operator-linebreak': 'warn',
    'space-before-blocks': 'warn',
    'prefer-destructuring': 'warn',
    'no-dupe-class-members': 'warn',
    'template-curly-spacing': 'warn',

    // instances
    'no-new-object': 'warn',
    'object-shorthand': 'warn',
    'no-array-constructor': 'warn',
    'no-duplicate-imports': 'warn',
    'no-restricted-properties': 'warn',
    'no-async-promise-executor': 'warn',

    // plugins
    'simple-import-sort/imports': 'error',
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.jsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': [
      'error',
      {
        explicitSpread: 'enforce',
        html: 'ignore',
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight'],
        aspects: ['invalidHref', 'preferButton'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
  },
}
