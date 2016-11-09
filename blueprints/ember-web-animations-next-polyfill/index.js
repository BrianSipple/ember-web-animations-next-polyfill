/*jshint node:true*/

module.exports = {
  description: `Add \`web-animations-js\` to a consuming application's bower directory.`,

  normalizeEntityName: function () {},

  afterInstall() {
    return this.addBowerPackageToProject('web-animations-js', '^2.2.2');
  }
};
