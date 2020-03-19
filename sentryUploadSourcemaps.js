const path = require('path');
const { upload } = require('sentry-files');

require('dotenv/config');

upload({
  version: process.env.REACT_APP_SENTRY_PROJECT_RELEASE,
  organization: process.env.REACT_APP_SENTRY_ORG,
  project: process.env.REACT_APP_SENTRY_PROJECT,
  token: process.env.REACT_APP_SENTRY_API_TOKEN,
  files: getFiles(),
})
  .then(data => console.log('----- SUCCESS ----\n', data))
  .catch(error => console.log('---- ERROR ----\n', error));


  function getFiles() {
    const BUILD_DIR = 'build';
    const assetsFile = path.resolve(BUILD_DIR, 'asset-manifest.json');
    const filePaths = require(assetsFile);

    const filePathsFiles = filePaths.files;

    const Paths = path.resolve('build');

    const jsFilesRegex = /(\.js(.map)?)$/;
    return Object.keys(filePathsFiles)
      .filter(f => jsFilesRegex.test(f))
      .map(f => ({
        name: `~${filePathsFiles[f]}`,
        path: Paths+filePathsFiles[f],
      }));
  }