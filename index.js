/**
 * Configuracion de Eslint
 * Se exporta la configuracion de los estandares de desarrollo con Eslint
 */
module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
    node: true,
  },

  extends: ['airbnb', 'prettier'],

  parser: '@babel/eslint-parser',

  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      impliedStrict: true,
      jsx: true,
      modules: true,
    },
    ecmaVersion: 2021,
    requireConfigFile: false,
    sourceType: 'module',
  },

  plugins: ['import', 'jsx-a11y', 'prettier', 'react', 'react-hooks'],

  rules: {
    // Enforce require() on the top-level module scope (global-require)
    // https://eslint.org/docs/rules/global-require
    'global-require': 0,

    // Forbid require() calls with expressions
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
    'import/no-dynamic-require': 0,

    // Use this rule to prevent unnecessary path segments in import and require statements
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-useless-path-segments.md
    'import/no-useless-path-segments': 0,

    //
    //
    'import/order': 0,

    //
    //
    'linebreak-style': 0,

    //
    //
    'max-len': [
      'error',
      {
        code: 2500,
        tabWidth: 2,
      },
    ],

    //
    //
    'no-else-return': 0,

    //
    //
    'no-nonoctal-decimal-escape': 0,

    //
    //
    'no-param-reassign': 0,

    //
    //
    'no-undef': 0,

    //
    //
    'no-underscore-dangle': 0,

    //
    //
    'no-unsafe-optional-chaining': 0,

    //
    //
    'no-use-before-define': 0,

    //
    //
    'operator-linebreak': 0,

    //
    //
    'prefer-object-spread': 0,

    //
    //
    'prettier/prettier': ['error'],

    //
    //
    'react/jsx-curly-brace-presence': 0,

    //
    //
    'react/jsx-filename-extension': 0,

    //
    //
    'react/jsx-no-constructed-context-values': 0,

    //
    //
    'react/no-unstable-nested-components': 0,
  },
};
