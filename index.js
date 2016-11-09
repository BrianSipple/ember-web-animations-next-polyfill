/* jshint node: true */
var path = require('path');
var fs = require('fs-extra');

module.exports = {
  name: 'ember-web-animations-next-polyfill',

  /**
   * To address this issue (https://github.com/web-animations/web-animations-js/issues/42),
   * this function adds the source files searched for by the distributed `web-animations-js`
   * source maps to a `src/` directory inside of the directory for `web-animation-js` within
   * a consuming application's bower directory.
   */
  _addExtraWAAPIFiles(srcDirPath, destDirPath) {
    fs.mkdirpSync(destDirPath);
    fs.copySync(srcDirPath, destDirPath);
  },

  included: function(app) {
    this._super.included(app);

    app.import(path.join(app.bowerDirectory, 'web-animations-js', 'web-animations-next.min.js'));

    var projectRootPath = app.project.root;
    var addonRootPath = app.project.addonPackages['ember-web-animations-next-polyfill'].path;

    var addonVendorSrcDir = path.join(addonRootPath, 'vendor', 'web-animations-js', 'src');
    var projectDestDir = path.join(projectRootPath, app.bowerDirectory, 'web-animations-js', 'src');

    this._addExtraWAAPIFiles(addonVendorSrcDir, projectDestDir);
  }
};
