/* jshint node: true */
var path = require('path');

module.exports = {
  name: 'ember-web-animations-next-polyfill',

  included: function(app) {
    this._super.included(app);

    if (!process.env.EMBER_CLI_FASTBOOT) {
      app.import(path.join(app.bowerDirectory, 'web-animations-js', 'web-animations-next.min.js'));
    }
  }
};
