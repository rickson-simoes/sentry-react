const path = require('path');
const { upload } = require('sentry-files');

require('dotenv/config');

upload({
  version:process.env.REACT_APP_SENTRY_PROJECT_RELEASE,
  organization:process.env.REACT_APP_SENTRY_ORG,
  project:process.env.REACT_APP_SENTRY_PROJECT,
  token:process.env.REACT_APP_SENTRY_API_TOKEN,
  files: getFiles(),
})
  .then(data => console.log('----- SUCCESS ----\n', data))
  .catch(error => console.log('---- ERROR ----\n', error));


  function getFiles() {
    const BUILD_DIR = 'build';
    const assetsFile = path.resolve(BUILD_DIR, 'asset-manifest.json');
    const filePaths = require(assetsFile);

/*
 * Pela variavel filePaths, irá ser feita a busca dentro do ./build/asset-manifest.json
 * Como o asset-manifest.json possui 2 objetos, foi necessario definir qual era para ser feito o map
 * Logo é preciso destinguir o objeto por filePaths.files
 */
    const filePathsFiles = filePaths.files;

/*
 * path.resolve() não está funcionando dentro do map, foi preciso definir um caminho.
 */
    const Paths = path.resolve('build');

/*
 * Faz a leitura de todos os arquivos e retorna os valores para o files: getFiles() ;
 */
    const jsFilesRegex = /(\.js(.map)?)$/;
    return Object.keys(filePathsFiles)
      .filter(f => jsFilesRegex.test(f))
      .map(f => ({
        name: `~${filePathsFiles[f]}`,
        path: Paths+filePathsFiles[f],
      }));
  }