/**
 * Declaracion de dependencias
 * Se declaran todas las dependencias del proyecto
 */
const base = require('./index');

/**
 * Configuracion del contador
 * Se inicializa el contador con la numeracion autoincremental
 */
let counter = 0;
function getCounter() {
  counter += 1;
  return counter < 10 ? `0${counter}` : counter;
}

/**
 * Pruebas del proyecto
 * Se inicializan las pruebas del proyecto
 */
describe('Test - Rules base', () => {
  /**
   * Prueba de definicion
   * Se valida si el archivo se encuentra definido
   */
  test(`Test ${getCounter()} - File`, async () => {
    counter += 1;
    expect(base).toBeDefined();
  }, 500);
  /**
   * Prueba de validez de atributo parserOptions
   * Se valida si en el archivo se encuentra definidas las configuraciones
   */
  test(`Test ${getCounter()} - ParserOptions`, async () => {
    counter += 1;
    expect(base).toBeDefined();
    expect(base.parserOptions).toBeDefined();
    expect(typeof base.parserOptions).toEqual('object');
    expect(Object.keys(base.parserOptions).length).toBeGreaterThanOrEqual(0);
  }, 500);
  /**
   * Prueba de validez de atributo plugins
   * Se valida si en el archivo se encuentra definidas los complementos
   */
  test(`Test ${getCounter()} - Plugins`, async () => {
    counter += 1;
    expect(base).toBeDefined();
    expect(base.plugins).toBeDefined();
    expect(Array.isArray(base.plugins)).toEqual(true);
    expect(base.plugins.length).toBeGreaterThanOrEqual(0);
  }, 500);
  /**
   * Prueba de validez de atributo rules
   * Se valida si en el archivo se encuentra definidas las reglas
   */
  test(`Test ${getCounter()} - Rules`, async () => {
    counter += 1;
    expect(base).toBeDefined();
    expect(base.rules).toBeDefined();
    expect(typeof base.rules).toEqual('object');
    expect(Object.keys(base.rules).length).toBeGreaterThanOrEqual(0);
  }, 500);
});
