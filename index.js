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
    // Enforce Rules of Hooks
    // https://github.com/facebook/react/blob/c11015ff4f610ac2924d1fc6d569a17657a404fd/packages/eslint-plugin-react-hooks/src/RulesOfHooks.js
    'react-hooks/rules-of-hooks': 'error',

    // Verify the list of the dependencies for Hooks like useEffect and similar
    // https://github.com/facebook/react/blob/1204c789776cb01fbaf3e9f032e7e2ba85a44137/packages/eslint-plugin-react-hooks/src/ExhaustiveDeps.js
    'react-hooks/exhaustive-deps': 'error',

    //
    //
    'global-require': 0,

    //
    //
    'import/no-dynamic-require': 0,

    //
    //
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
