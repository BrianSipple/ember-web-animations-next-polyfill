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

  treeForVendor(vendorTree) {
    var WAAPITree = new Funnel(path.dirname(require.resolve('web-animations-js/' + FILE_NAME)), {
      include: [
        'src/*',
        FILE_NAME,
        FILE_NAME + '.map'
      ]
    });

    return new MergeTrees([vendorTree, WAAPITree]);
  }
};
