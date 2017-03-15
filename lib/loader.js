/*
 * Webpack loader to convert asset url references in css / less files to the actual urls.
 */

const loaderUtils = require("loader-utils");
const cloneDeep = require("clone-deep");

module.exports = function(source) {
  const loaderContext = this;
  const options = Object.assign(
      {
          helpers: [
            'asset',
            'image',
            'font'
          ],
          assetsPrefix: '/assets'
      },
      cloneDeep(loaderUtils.getOptions(this))
  );

  const helperRegex = options.helpers.join('|');
  const assetHelperRegex = new RegExp(`(${helperRegex})-url\\\(["']([^\)]*)["']\\\)`, 'g');

  // uses the assetDatabaseRegex to identify asset pipeline helper calls and replace them with standard css
  let result = source.replace(assetHelperRegex, function(match, methodType, assetName) {
    return `url(${options.assetsPrefix}/${assetName})`;
  });

  return result;
}