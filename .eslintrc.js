module.exports = {
  extends: ['airbnb', 'airbnb/hooks', 'airbnb-typescript'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: './tsconfig.json',
  },
  rules: {
    // on
    'no-undef': 2,

    // off
    '@typescript-eslint/semi': 'off',
    'import/extensions': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/function-component-definition': 'off',
    '@typescript-eslint/object-curly-spacing': 'off',
    'import/prefer-default-export': 'off',
    'arrow-body-style': 'off',
    'arrow-parens': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'object-curly-newline': 'off',
    'prefer-template': 'off',
    'react/destructuring-assignment': 'off',
    'react/require-default-props': 'off',
    'function-paren-newline': 'off',
    'react/jsx-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-confusing-arrow': 'off',
    'react/button-has-type': 'off',
    'react/jsx-one-expression-per-line': 'off',
  },
}
