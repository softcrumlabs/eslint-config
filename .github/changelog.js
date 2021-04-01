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
 *
 * Funcion que almacena la linea en el archivo indicado
 */
writeFile = (file, line) => {
  console.info(line.replace(/\n/g, ''));
  fs.writeFileSync(file, line, {
    encoding: "utf8",
    flag: "a+",
    mode: 0o666,
  }, () => {});
};

/**
 * Metodo Changelog
 * Funcion que elimina las lineas que no aportan valor sobre los cambios realizados al proyecto
 */
fs.readFile(FILE_NAME, 'utf8', async(error, data) => {
  if (error) {
    console.info('');
    return [''];
  }
  // Se declaran las variables internas a utilizar en el metodo
  const file = data.split('\n');
  const parser = [];
  let release = 0;
  let type = '';
  // Se genera un arbol con todos los comentarios del proyecto
  await file.forEach((line) => {
    if (line.includes('# ') && (!line.includes('# ', 1) || !line.includes('## ', 1))) {
      release++;
      parser.push({
        data: {},
        id: release,
        title: line,
      });
    } else {
      if (line.includes('### ')) {
        type = line.replace(/#/g, '').trim().toLowerCase().replace(/ /g, '_');
        parser[release - 1].data[type] = [];
      } else if (line.trim() !== '') {
        parser[release - 1].data[type].push(line);
      }
    }
  });
  // Se eliminan los comentarios en la categoria Other y los Chores de actualizacion
  await parser.forEach((release, keyRelease) => {
    Object.keys(release.data).forEach((category) => {
      parser[keyRelease].data[category] = release.data[category].filter((item) => !item.includes('- **changelog:**'));
    })
  });
  await parser.forEach((release, key) => {
    Object.keys(release.data).forEach((category) => {
      if (category === 'other' || release.data[category].length === 0) {
        delete (parser[key].data[category]);
      }
    })
  });
  // Se elimina el contenido previo del archivo
  await fs.writeFile(FILE_NAME, '', {}, () => {});
  console.info('\n##############\n###  File  ###\n##############\n');
  // Se agregan todos los comentarios al archivo
  parser.forEach((release, keyRelease) => {
    writeFile(FILE_NAME, `${release.title}\n`);
    writeFile(FILE_NAME, '\n');
    Object.keys(release.data).forEach((category) => {
      writeFile(FILE_NAME, `### ${category.replace(/_/g, ' ').toLowerCase().replace(/\b[a-z]/g, text => text.toUpperCase())}\n`);
      writeFile(FILE_NAME, '\n');
      release.data[category].forEach((comment) => {
        writeFile(FILE_NAME, `${comment}\n`);
      });
      if (parser.length !== keyRelease + 1) {
        writeFile(FILE_NAME, '\n');
      }
    });
  });
  // Se visualiza si el archivo fue modificado
  await fs.readFile(FILE_NAME, 'utf8', async(error, data) => {
    console.info('\n\n##############\n### Detail ###\n##############\n');
    if (error) {
      console.info('The file has not been modified\n');
    }
    console.info(file.length !== data.split('\n').length ? 'The file has been modified\n' : 'The file has not been modified\n');
  });
});
