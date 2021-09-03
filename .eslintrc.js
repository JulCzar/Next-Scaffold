module.exports = {
  extends: 'next/core-web-vitals',
  plugins: ['simple-import-sort'],
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
    'quotes': ['warn', 'single'],
    'semi': ['error', 'never'],
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

    // plugins
    'simple-import-sort/imports': 'error',
  },
}
