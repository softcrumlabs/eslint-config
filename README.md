Repositorio con la configuración base para proyectos en Javascript, consideranddo las buenas prácticas de Airbnb y otros estándares internacionales de codificación.


## Pipeline Status
[![Pipeline Integration](https://github.com/softcrumhq/eslint-config/actions/workflows/integration.yml/badge.svg?branch=master)](https://github.com/softcrumhq/eslint-config/actions/workflows/integration.yml)
[![Pipeline Release](https://github.com/softcrumhq/eslint-config/actions/workflows/release.yml/badge.svg?branch=release)](https://github.com/softcrumhq/eslint-config/actions/workflows/release.yml)
[![Pipeline Package](https://github.com/softcrumhq/eslint-config/actions/workflows/package.yml/badge.svg?branch=master)](https://github.com/softcrumhq/eslint-config/actions/workflows/package.yml)
[![Pipeline Publish](https://github.com/softcrumhq/eslint-config/actions/workflows/publish.yml/badge.svg?branch=master)](https://github.com/softcrumhq/eslint-config/actions/workflows/publish.yml)
[![Sonarcloud Status](https://sonarcloud.io/api/project_badges/measure?project=softcrumhq_eslint-config&metric=alert_status)](https://sonarcloud.io/dashboard?id=softcrumhq_eslint-config)


## Repository Status
[![Package version](https://img.shields.io/badge/version-1.6.3-blue?logo=github)](https://github.com/softcrumhq/eslint-config)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=softcrumhq_eslint-config&metric=bugs)](https://sonarcloud.io/project/issues?id=softcrumhq_eslint-config&resolved=false&types=BUG)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=softcrumhq_eslint-config&metric=code_smells)](https://sonarcloud.io/project/issues?id=softcrumhq_eslint-config&resolved=false&types=CODE_SMELL)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=softcrumhq_eslint-config&metric=coverage)](https://sonarcloud.io/component_measures?id=softcrumhq_eslint-config&metric=coverage&view=list)
[![Duplicated Lines Density](https://sonarcloud.io/api/project_badges/measure?project=softcrumhq_eslint-config&metric=duplicated_lines_density)](https://sonarcloud.io/component_measures?id=softcrumhq_eslint-config&metric=Duplications)
[![Ncloc](https://sonarcloud.io/api/project_badges/measure?project=softcrumhq_eslint-config&metric=ncloc)](https://sonarcloud.io/component_measures?id=softcrumhq_eslint-config&metric=ncloc&view=list)
[![Maintainability](https://sonarcloud.io/api/project_badges/measure?project=softcrumhq_eslint-config&metric=sqale_rating)](https://sonarcloud.io/component_measures?id=softcrumhq_eslint-config&metric=Maintainability)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=softcrumhq_eslint-config&metric=reliability_rating)](https://sonarcloud.io/component_measures?id=softcrumhq_eslint-config&metric=Reliability)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=softcrumhq_eslint-config&metric=security_rating)](https://sonarcloud.io/component_measures?id=softcrumhq_eslint-config&metric=Security)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=softcrumhq_eslint-config&metric=sqale_index)](https://sonarcloud.io/component_measures?id=softcrumhq_eslint-config&metric=sqale_index&view=list)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=softcrumhq_eslint-config&metric=vulnerabilities)](https://sonarcloud.io/project/issues?id=softcrumhq_eslint-config&resolved=false&types=VULNERABILITY)


## Uso de la librería

Nuestra librería contiene todas las buenas prácticas de ESLint, incluidas ECMAScript 6+ y React. Requiere de las librerías `eslint`, `eslint-plugin-import`, `eslint-plugin-jsx-a11y`, `eslint-plugin-prettier`, `eslint-plugin-react` y `eslint-plugin-react-hooks`.

### Instalación

Instale las versiones correctas para cada uno de los paquetes, tal como se enumeran con el comando:

```sh
npm info @softcrumhq/eslint-config@latest peerDependencies
```

Si utiliza **NPM 5+**, utilice el siguiente comando:

```sh
npx install-peerdeps --dev @softcrumhq/eslint-config@latest
```

Si usa **yarn**, también puede utilizar el comando anteriormente descrito si es que tiene instalado NPM 5+ en su máquina, ya que el comando detectará que está usando yarn. De lo contrario, ejecute `npm info @softcrumhq/eslint-config@latest peerDependencies` para enumerar las dependencias y sus correspondientes versiones. Luego ejecute `yarn add --dev <dependency>@<version>` para cada dependencia listada.

Si usa **NPM < 5** en maquinas Linux/OSX, puede utilizar el siguiente comando:

```sh
(
  export PKG=@softcrumhq/eslint-config;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs yarn install --dev "$PKG@latest"
)
```

Lo anterior produce y ejecuta el siguiente comando:

```sh
yarn install --dev @softcrumhq/eslint-config eslint@#.#.# eslint-plugin-import@#.#.# eslint-plugin-jsx-a11y@#.#.# eslint-plugin-prettier@#.#.# eslint-plugin-react@#.#.# eslint-plugin-react-hooks@^#.#.#
```

Si usa **NPM < 5**, en máquinas Windows, pueden instalar todas las dependencias manualmente o usar la herramienta CLI [install-peerdeps](https://github.com/nathanhleung/install-peerdeps).

```sh
npm install -g install-peerdeps
install-peerdeps --dev @softcrumhq/eslint-config@latest
```
El CLI ejecutará el siguiente comando:

```sh
yarn install --dev @softcrumhq/eslint-config eslint@#.#.# eslint-plugin-import@#.#.# eslint-plugin-jsx-a11y@#.#.# eslint-plugin-prettier@#.#.# eslint-plugin-react@#.#.# eslint-plugin-react-hooks@^#.#.#
```

### Configuración

Agregue la siguiente configuración en el archivo `.eslintrc` del repositorio.

```sh
{
  "extends": ["@softcrumhq"],
  "rules": {}
}
```

### Scripts en package.json

Luego de agregar el archivo `.eslintrc` en nuestro repositorio, debemos incorporar los siguientes comandos en la sección `scripts` del archivo `package.json`, tal como se visualiza en el siguiente código:

```sh
{
  ...
  "scripts": {
    "changelog": "node ./.github/changelog.js",
    "ci": "yarn run lint:check && yarn run lint:duplicate && yarn run test",
    "clean": "rimraf -rf dist node_modules/.cache",
    "lint:check": "eslint . --fix",
    "lint:duplicate": "yarn run jscpd -i '**/+(.github|coverage|node_modules)/**' -t '0'",
    "test": "jest --coverage --detectOpenHandles --passWithNoTests --runInBand --watchAll=false"
  }
  ...
}
```


## Mejorando esta configuración

Considere agregar pruebas si se encuentra realizando cambios en reglas complicadas, como en cualquier cosa que involucre expresiones regulares.

Puede ejecutar pruebas con `yarn test`.

Puede asegurarse de que este repositorio se ejecute con la misma configuración desarrollada utilizando el siguiente comando `yarn ci`.
