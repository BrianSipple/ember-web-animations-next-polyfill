/*jshint node:true*/
/* global require, module */
var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
var path = require('path');
var fs = require('fs-extra');

function addExtraWAAPIFiles(srcDirPath, destDirPath) {
  fs.mkdirpSync(destDirPath);
  fs.copySync(srcDirPath, destDirPath);
}

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
    // Add options here
  });

  /*
    This build file specifies the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */
  var rootPath = app.project.root;

  var vendorSrcDir = path.join(rootPath, 'vendor/web-animations-js', 'src');
  var projectDestDir = path.join(rootPath, app.bowerDirectory, 'web-animations-js', 'src');

  addExtraWAAPIFiles(vendorSrcDir, projectDestDir);

  return app.toTree();
};
