/* jshint node: true */
var bower = require('bower');
var assert = require('assert');
var readFileSync = require('fs').readFileSync;

var BLUEPRINT_PATH = 'blueprints/ember-web-animations-next-polyfill/index.js';

var message = 'The version of the web-animations-js added to consuming projects should match the version in the addon\'s dependencies';

bower.commands.list().on('end', function(packageInfo) {
  var addonDependencyVersion = packageInfo.dependencies['web-animations-js'].endpoint.target;
  var blueprintContent = readFileSync(BLUEPRINT_PATH, 'utf-8');

  assert.ok(blueprintContent.indexOf(addonDependencyVersion) !== -1, message);
});
