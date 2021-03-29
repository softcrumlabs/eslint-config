/**
 * Configuracion de Eslint
 * Se exporta la configuracion de los estandares de desarrollo con Eslint
 */
module.exports = {
  extends: ['eslint-config-airbnb', './rules/base'].map(require.resolve),
  rules: {},
};
