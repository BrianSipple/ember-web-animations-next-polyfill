/* jshint node: true */
var path = require('path');

var MergeTrees = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');

var FILE_NAME = 'web-animations-next.min.js';

module.exports = {
  name: 'ember-web-animations-next-polyfill',

  included() {
    this._super.included.apply(this, arguments);

    this.import('vendor/' + FILE_NAME);
  },

  isAddonDummyApp() {
    return this.app.name === 'dummy';
  },

  isAddon() {
    var keywords = this.project.pkg.keywords;

    return keywords.length && keywords.indexOf('ember-addon') !== -1;
  },

  shouldIgnoreVendorTree() {
    return this.isAddon() && !this.isAddonDummyApp();
  },

  treeForVendor(vendorTree) {
    if (this.shouldIgnoreVendorTree()) {
      return vendorTree;
    }

    var WAAPITree = new Funnel(path.dirname(require.resolve('web-animations-js/' + FILE_NAME)), {
      include: [
        'src/*',
        FILE_NAME,
        FILE_NAME + '.map'
      ]
    });

    return vendorTree ? new MergeTrees([vendorTree, WAAPITree]) : WAAPITree;
  }
};
