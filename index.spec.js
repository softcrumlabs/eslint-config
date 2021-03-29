/**
 *
 *
 */
const index = require('./index');

/**
 * Configuracion del contador
 *
 */
let counter = 0;
function getCounter() {
  counter += 1;
  return counter < 10 ? `0${counter}` : counter;
}

/**
 * Starting tests
 *
 */
describe('Test - Rules index', () => {
  /**
   *
   * Se valida si el archivo se encuentra definido
   */
  test(`Test ${getCounter()} - File`, async () => {
    counter += 1;
    expect(index).toBeDefined();
  }, 500);
  /**
   *
   * Se valida si en el archivo se encuentra definidas las extensiones
   */
  test(`Test ${getCounter()} - Extends`, async () => {
    counter += 1;
    expect(index).toBeDefined();
    expect(index.extends).toBeDefined();
    expect(Array.isArray(index.extends)).toEqual(true);
    expect(index.extends.length).toBeGreaterThanOrEqual(0);
  }, 500);
  /**
   *
   * Se valida si en el archivo se encuentra definidas las reglas
   */
  test(`Test ${getCounter()} - Rules`, async () => {
    counter += 1;
    expect(index).toBeDefined();
    expect(index.rules).toBeDefined();
    expect(typeof index.rules).toEqual('object');
    expect(Object.keys(index.rules).length).toEqual(0);
  }, 500);
});
