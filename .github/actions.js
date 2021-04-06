/**
 * Declaracion de dependencias
 * Se declaran todas las dependencias y subdependencias para la ejecucion de los metodos
 */
const fs = require('fs');

/**
 * Declaracion de variables
 * Se declaran todas las variables que se necesitan para la ejecucion de los metodos
 */
const FILE_NAME_CHANGELOG = 'CHANGELOG.md';
const FILE_NAME_PACKAGE = 'package.json';
const FILE_NAME_README = 'README.md';

/**
 * Metodo WriteFile
 * Funcion que almacena la linea en el archivo indicado
 */
writeFile = (file, line, print = true) => {
  if (print) {
    console.info(line.replace(/\n/g, ''));
  }
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
module.exports.changelog = () => {
  fs.readFile(FILE_NAME_CHANGELOG, 'utf8', async(error, data) => {
    if (error) {
      console.info('The file has not been modified');
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
    await fs.writeFile(FILE_NAME_CHANGELOG, '', {}, () => {});
    console.info('\n##############\n###  File  ###\n##############\n');
    // Se agregan todos los comentarios al archivo
    parser.forEach((release, keyRelease) => {
      writeFile(FILE_NAME_CHANGELOG, `${release.title}\n`);
      writeFile(FILE_NAME_CHANGELOG, '\n');
      Object.keys(release.data).forEach((category) => {
        writeFile(FILE_NAME_CHANGELOG, `### ${category.replace(/_/g, ' ').toLowerCase().replace(/\b[a-z]/g, text => text.toUpperCase())}\n`);
        writeFile(FILE_NAME_CHANGELOG, '\n');
        release.data[category].forEach((comment) => {
          writeFile(FILE_NAME_CHANGELOG, `${comment}\n`);
        });
        if (parser.length !== keyRelease + 1) {
          writeFile(FILE_NAME_CHANGELOG, '\n');
        }
      });
    });
    // Se visualiza si el archivo fue modificado
    await fs.readFile(FILE_NAME_CHANGELOG, 'utf8', async(error, data) => {
      console.info('\n\n##############\n### Detail ###\n##############\n');
      if (error) {
        console.info('The file has not been modified\n');
      }
      console.info(file.length !== data.split('\n').length ? 'The file has been modified\n' : 'The file has not been modified\n');
    });
  });
};

/**
 * Metodo Version
 * Funcion que actualiza la version del repositorio en el archivo README.md
 */
module.exports.version = () => {
  fs.readFile(FILE_NAME_PACKAGE, 'utf8', async(errorPackage, dataPackage) => {
    if (errorPackage) {
      console.info('The file has not been modified');
      return [''];
    }
    // Se obtiene la version del repositorio
    const version = JSON.parse(dataPackage).version;
    // Se obtiene la informacion del archivo
    fs.readFile(FILE_NAME_README, 'utf8', async(errorReadme, dataReadme) => {
      if (errorReadme) {
        console.info('The file has not been modified');
        return [''];
      }
      // Se elimina el contenido previo del archivo
      await fs.writeFile(FILE_NAME_README, '', {}, () => {});
      // Se agrega la documentacion al archivo
      dataReadme.split('\n').forEach((line, keyLine) => {
        let newLine = '';
        if (line.includes('[![Package version]')) {
          line.split('-').forEach((row, keyRow) => {
            if (keyRow === 0 || keyRow === 2) {
              newLine += row;
            } else if (keyRow === 1) {
              newLine += `-${version}-`;
            } else {
              newLine += `-${row}`;
            }
          });
          writeFile(FILE_NAME_README, `${newLine}\n`, false);
        } else {
          if (dataReadme.split('\n').length !== keyLine + 1) {
            writeFile(FILE_NAME_README, `${line}\n`, false);
          }
        }
      });
    });
  });
};
