# eslint-config
Repositorio con la configuración genérica de Eslint para todos los proyectos de la empresa

### Pipeline Status
[![Pipeline Integration](https://github.com/softcrumhq/eslint-config/actions/workflows/integration.yml/badge.svg?branch=master)](https://github.com/softcrumhq/eslint-config/actions/workflows/integration.yml)
[![Pipeline Release](https://github.com/softcrumhq/eslint-config/actions/workflows/release.yml/badge.svg?branch=master)](https://github.com/softcrumhq/eslint-config/actions/workflows/release.yml)
[![Sonarcloud Status](https://sonarcloud.io/api/project_badges/measure?project=softcrumhq_eslint-config&metric=alert_status)](https://sonarcloud.io/dashboard?id=softcrumhq_eslint-config)


### Repository Status
[![Package version](https://img.shields.io/badge/dynamic/json?color=blue&label=version&logo=github&query=version&url=https://raw.githubusercontent.com/softcrumhq/eslint-config/master/package.json?token=AFMWHDRWLATSGK33XH7GV7LANOI5E)](https://github.com/softcrumhq/eslint-config)
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

Nuestra librería contiene todas las buenas prácticas de ESLint, incluidas ECMAScript 6+ y React. Requiere de las librerías `eslint`,` eslint-plugin-import`, `eslint-plugin-react`,` eslint-plugin-react-hooks` y `eslint-plugin-jsx-a11y`.

### eslint-config

1. Instale las versiones correctas para cada uno de los paquetes, tal como se enumeran con el comando:

  ```sh
  npm info @softcrumhq/eslint-config@latest peerDependencies
  ```

  Si utiliza **npm 5+**, usa este atajo

  ```sh
  npx install-peerdeps --dev @softcrumhq/eslint-config
  ```

  If using **yarn**, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly.
  Otherwise, run `npm info "@softcrumhq/eslint-config@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency.

  If using **npm < 5**, Linux/OSX users can run

  ```sh
  (
    export PKG=@softcrumhq/eslint-config;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

  Which produces and runs a command like:

  ```sh
  npm install --save-dev @softcrumhq/eslint-config eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.# eslint-plugin-react-hooks@^#.#.#
  ```

  If using **npm < 5**, Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

  ```sh
  npm install -g install-peerdeps
  install-peerdeps --dev @softcrumhq/eslint-config
  ```
  The cli will produce and run a command like:

  ```sh
  npm install --save-dev @softcrumhq/eslint-config eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.# eslint-plugin-react-hooks@^#.#.#
  ```

2. Add `"extends": "airbnb"` to your `.eslintrc`

### @softcrumhq/eslint-config/hooks

This entry point enables the linting rules for React hooks (requires v16.8+). To use, add `"extends": ["airbnb", "airbnb/hooks"]` to your `.eslintrc`

### @softcrumhq/eslint-config/whitespace

This entry point only errors on whitespace rules and sets all other rules to warnings. View the list of whitespace rules [here](https://github.com/airbnb/javascript/blob/master/packages/@softcrumhq/eslint-config/whitespace.js).

### @softcrumhq/eslint-config/base

This entry point is deprecated. See [@softcrumhq/eslint-config-base](https://npmjs.com/@softcrumhq/eslint-config-base).

### @softcrumhq/eslint-config/legacy

This entry point is deprecated. See [@softcrumhq/eslint-config-base](https://npmjs.com/@softcrumhq/eslint-config-base).

See [Airbnb's JavaScript styleguide](https://github.com/airbnb/javascript) and
the [ESlint config docs](https://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.
