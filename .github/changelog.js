/**
 * Declaracion de dependencias
 * Se declaran todas las dependencias y subdependencias para la ejecucion de los metodos
 */
const fs = require('fs');

/**
 * Declaracion de variables
 * Se declaran todas las variables que se necesitan para la ejecucion de los metodos
 */
const FILE_NAME = 'CHANGELOG.md';

/**
 * Metodo Changelog
 * Funcion que elimina las lineas que no aportan valor sobre los cambios realizados al proyecto
 */
fs.readFile(FILE_NAME, 'utf8', async(error, data) => {
  if (error) {
    return [''];
  }
  const file = data.split('\n');
  const lines = [];
  let newLine = false;
  await file.forEach((line) => {
    if (line.trim() === '') {
      if (!newLine) {
        lines.push(line);
      }
      newLine = true;
    }
    else {
      newLine = false;
      lines.push(line);
    }
  });
  await fs.writeFile(FILE_NAME, '', {}, () => {});;
  let remove = 0;
  await lines.forEach((line, key) => {
    if (line.includes('Other')) {
      remove = 2;
    } else if (remove > 0 && line.trim() === '') {
      remove--;
    } else if (remove === 0) {
      fs.writeFileSync(FILE_NAME, lines.length === key + 1 ? line : `${line}\n`, {
        encoding: "utf8",
        flag: "a+",
        mode: 0o666,
      }, () => {});
    }
  })
});
