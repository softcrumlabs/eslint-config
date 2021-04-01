## [1.3.4](https://github.com/softcrumhq/eslint-config/compare/v1.3.3...v1.3.4) (2021-04-01)

### Bug Fixes

- Se corrigen las condiciones para omitir la ejecucion de los pipelines ([dd1cf87](https://github.com/softcrumhq/eslint-config/commit/dd1cf87b7920cbb3085cccaa0c240c11e8e81593))
- Se omiten ejecuciones de los pipelines si son del tipo release o changelog ([8a6d881](https://github.com/softcrumhq/eslint-config/commit/8a6d881be4178c42f5906723a815b1a2be33bb2d))

### Chores

- **changelog:** Update CHANGELOG.md ([f439dbc](https://github.com/softcrumhq/eslint-config/commit/f439dbcf6ac04084984ec3cd9ae40e65b04cf012))

### Other

- Merge pull request #31 from softcrumhq/release ([a8e90d5](https://github.com/softcrumhq/eslint-config/commit/a8e90d547ea68c95c94ea7114ca54fbf1c2e0309)), closes [#31](https://github.com/softcrumhq/eslint-config/issues/31)
- Merge pull request #30 from softcrumhq/develop ([fb2e53d](https://github.com/softcrumhq/eslint-config/commit/fb2e53d11acb8e6a23acfaaa676b2fccc1092825)), closes [#30](https://github.com/softcrumhq/eslint-config/issues/30)
- Merge pull request #29 from softcrumhq/feature/action-checkout ([f01844d](https://github.com/softcrumhq/eslint-config/commit/f01844d5ab65530e7b5f303e151dd9f095356e10)), closes [#29](https://github.com/softcrumhq/eslint-config/issues/29)
- Merge pull request #28 from softcrumhq/master ([696c73b](https://github.com/softcrumhq/eslint-config/commit/696c73b2703b3b077639e26f51def05f7f4d8d25)), closes [#28](https://github.com/softcrumhq/eslint-config/issues/28)

## [1.3.3](https://github.com/softcrumhq/eslint-config/compare/v1.3.2...v1.3.3) (2021-03-31)

### Bug Fixes

- Se corrige error al leer el archivo CHANGELOG.md ([05fa1b2](https://github.com/softcrumhq/eslint-config/commit/05fa1b2795b34a49f863297cf957d65072dc6fac))

## [1.3.2](https://github.com/softcrumhq/eslint-config/compare/v1.3.1...v1.3.2) (2021-03-31)

### Bug Fixes

- Se agregan los branches donde se ejecutara el pipeline integration ([03b55b2](https://github.com/softcrumhq/eslint-config/commit/03b55b24c76d9e41db9c29cb88fe8e001245b9c6))

## [1.3.1](https://github.com/softcrumhq/eslint-config/compare/v1.3.0...v1.3.1) (2021-03-31)

### Bug Fixes

- Se agrega correccion para el proceso de push sobre la rama master ([f1837b7](https://github.com/softcrumhq/eslint-config/commit/f1837b7d69c9ad09fd403c7f771e63dec523ff89))
- Se corrige nombre de los secrets del pipeline changelog ([b1a8524](https://github.com/softcrumhq/eslint-config/commit/b1a852405f82dd4e902a3e0b559a9b543928fdce))

# [1.3.0](https://github.com/softcrumhq/eslint-config/compare/v1.2.0...v1.3.0) (2021-03-31)

### Bug Fixes

- Se agrega GPG en los cambios realizados por los workflows ([11bdcfc](https://github.com/softcrumhq/eslint-config/commit/11bdcfc6b7efca88c810cca79fb009e0a865055d))
- Se corrige el archivo changelog.js con nueva estructura de ejecucion ([c876172](https://github.com/softcrumhq/eslint-config/commit/c876172e0886e059000e7c200b1a78ffc326c4f5))
- Se corrige secret en el pipeline package ([bc88cc7](https://github.com/softcrumhq/eslint-config/commit/bc88cc768197d98533b36ea58ae8f82f1d74960a))
- Se elimina step innecesario para la generacion de un release ([9923edf](https://github.com/softcrumhq/eslint-config/commit/9923edf6d720012b573aa37f297f4ee717a523c9))
- Se modifican los tokens para los workflows ([a87ba09](https://github.com/softcrumhq/eslint-config/commit/a87ba09d31d80fd8fdc9246c1fd299bf0e65bed4))
- Se reemplaza secret de github en sonarcloud ([67494f1](https://github.com/softcrumhq/eslint-config/commit/67494f1a6bcc35bd1186657a7f4e2550313efb3f))

### Features

- Se agrega variable de entorno CI en las pruebas ([f599b53](https://github.com/softcrumhq/eslint-config/commit/f599b53db46c56982b56842abfcdca4c9a5b5c55))

# [1.2.0](https://github.com/softcrumhq/eslint-config/compare/v1.1.0...v1.2.0) (2021-03-30)

### Bug Fixes

- Se actualiza archivo de configuracion para Sonarcloud ([b3ebd8c](https://github.com/softcrumhq/eslint-config/commit/b3ebd8cc2bf9afe4f72ba758fb5f3c1f9cf36899))
- Se actualiza la descripcion del repositorio ([35ef1c0](https://github.com/softcrumhq/eslint-config/commit/35ef1c0ac40daf9f2b01a99aa4d7c1f9ac4b6057))
- Se actualizan las dependencias @babel/core y @babel/eslint-parser ([dac0bbe](https://github.com/softcrumhq/eslint-config/commit/dac0bbeed7eb279a19f998ed9ba3d968642be798))
- Se corrige archivo de configuracion .eslintignore ([c178a45](https://github.com/softcrumhq/eslint-config/commit/c178a45378ad75d17611232e93b22528e0b92c99))
- Se corrige nombre de la empresa en lel archivo LICENSE ([ba932cf](https://github.com/softcrumhq/eslint-config/commit/ba932cf04b97d5fc82c8fe7d97c919fe9e7e8ab0))

### Documentation

- Se documenta el archivo de configuracion .editorconfig ([752fbf4](https://github.com/softcrumhq/eslint-config/commit/752fbf453696defb9ff21b58fa76210ca5720931))
- Se documenta el archivo de configuracion de Jest ([8d9f689](https://github.com/softcrumhq/eslint-config/commit/8d9f6896cf58701686490add9fffa22c4b91cf7f))
- Se documenta el archivo de configuracion para Gitignore ([9d2c704](https://github.com/softcrumhq/eslint-config/commit/9d2c704dbff081feffeb1f7723de609201dabc4a))

### Features

- Se agregan los badges correspondientes a todos los pipelines del repositorio ([7e75d7d](https://github.com/softcrumhq/eslint-config/commit/7e75d7de05c129edf61338fe2be1f63a8f6f7278))

# [1.1.0](https://github.com/softcrumhq/eslint-config/compare/v1.0.0...v1.1.0) (2021-03-29)

### Bug Fixes

- Se corrige nombre del step en el pipeline integration ([5f45c7f](https://github.com/softcrumhq/eslint-config/commit/5f45c7fd42662655907c6ab2f2c9cd43c93e866d))
- Se corrigen los nombres de todos los steps de los pipelines ([26637b5](https://github.com/softcrumhq/eslint-config/commit/26637b5a2cdfecb06614f1d3ccf2bb872c47c6b3))
- Se modifica el token para obtener la version del package.json ([8b87218](https://github.com/softcrumhq/eslint-config/commit/8b87218aeb3650fc33bbff89fa02b0111f8a9eb1))

### Features

- Se modifica el pipeline integration con la configuracion para coverage en Sonarcloud ([43fe8ac](https://github.com/softcrumhq/eslint-config/commit/43fe8acb43f53d464177eaeec9b038bc9354d0c8))

# 1.0.0 (2021-03-29)

### Features

- Se inicializa el proyecto ([054f2e1](https://github.com/softcrumhq/eslint-config/commit/054f2e10c9e9dbe1d90d8e1609763448aeb77b7a))
- Se inicializa el proyecto ([232cd8a](https://github.com/softcrumhq/eslint-config/commit/232cd8a9fa7395cbd1f945c7f5e69f690c00835e))
