/*jshint node:true*/
var path = require('path');
var fs = require('fs-extra');
var RSVP = require('rsvp');

var mkdir = RSVP.denodeify(fs.mkdir);
var copy = RSVP.denodeify(fs.copy);

module.exports = {
  description: `Add \`web-animations-js\` to a consuming application's bower directory.`,

  normalizeEntityName: function () {},

  /**
   * To address this issue (https://github.com/web-animations/web-animations-js/issues/42),
   * this function adds the source files searched for by the distributed `web-animations-js`
   * source maps to a `src/` directory inside of the directory for `web-animation-js` within
   * a consuming application's bower directory.
   */
  addExtraWAAPIFiles(srcDirPath, destDirPath) {
    return mkdir(destDirPath)
      .then(function () {
        return copy(srcDirPath, destDirPath);
      });
  },

  afterInstall() {
    var self = this;

    return self.addBowerPackageToProject('web-animations-js', '^2.2.2')
      .then(function () {

        var addonSrcDir = self.srcPath('../../../vendor/web-animations-js/src');
        var projectDestDir = path.join(self.project.root, self.project.bowerDirectory, 'web-animations-js', 'src');

        return self.addExtraWAAPIFiles(addonSrcDir, projectDestDir);
      });
  }
};
