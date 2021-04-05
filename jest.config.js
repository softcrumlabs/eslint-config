/**
 * Configuracion de la libreria Jest
 * Se configuran todos los parametros necesarios para el uso de Jest en las pruebas del proyectos
 */
module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['*.{js,jsx,ts}'],
  coverageDirectory: './coverage/',
  coveragePathIgnorePatterns: ['./bin', './build', './coverage', './dist', './logs', './node_modules', 'jest.config.js'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  forceExit: true,
  testEnvironment: 'node',
  testResultsProcessor: 'jest-sonar-reporter',
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  verbose: true,
};
