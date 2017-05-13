# 2.2.0 &mdash; May 13, 2017

- **[ENHANCEMENT]** Ember CLI Fastboot compatibility: no longer import the polyfill -- which requires
`document` to be present -- when consuming applications are running with Fastboot ([#27](https://github.com/BrianSipple/ember-web-animations-next-polyfill/pull/27)).
- **[ENHANCEMENT]** Update project structure for Ember / Ember CLI 2.13
  - [#22](https://github.com/BrianSipple/ember-web-animations-next-polyfill/pull/22)
  - [#23](https://github.com/BrianSipple/ember-web-animations-next-polyfill/pull/23)
  - [#25](https://github.com/BrianSipple/ember-web-animations-next-polyfill/pull/25)
  - [#28](https://github.com/BrianSipple/ember-web-animations-next-polyfill/pull/28)

# 2.1.1 &mdash; May 9, 2017

- **[PATCH]** Protect against missing keywords in a consuming project's `package.json` ([#15](https://github.com/BrianSipple/ember-web-animations-next-polyfill/pull/15)).


# 2.1.0 &mdash; March 21, 2017

- **[ENHANCEMENT]** Update project structure for ember / ember-cli 2.12 ([#9](https://github.com/BrianSipple/ember-web-animations-next-polyfill/pull/9)).
- **[ENHANCEMENT]** Add `yarn.lock` file ([#9](https://github.com/BrianSipple/ember-web-animations-next-polyfill/pull/9)).
- **[ENHANCEMENT]** Remove bower.json and .bowerrc ([#9](https://github.com/BrianSipple/ember-web-animations-next-polyfill/pull/9)).


# 2.0.1 &mdash; March 20, 2017

- **[PATCH]** Fix `treeForVendor` hook ([#8](https://github.com/BrianSipple/ember-web-animations-next-polyfill/pull/8)).
  + Account for the `vendorTree` argument potentially being undefined.
  + Refrain from modifying the vendor tree if we're running inside of another addon.


# 2.0.0 &mdash; March 3, 2017

- **[BREAKING CHANGE]** Remove Bower dependency; use NPM distribution of `web-animations-js` to build addon instead ([#4](https://github.com/BrianSipple/ember-web-animations-next-polyfill/pull/4)).


# 1.1.0 &mdash; March 3, 2017

- **[ENHANCEMENT]** Update to `ember-cli-2.11` ([#3](https://github.com/BrianSipple/ember-web-animations-next-polyfill/pull/3)).


# 1.0.2 &mdash; November 9, 2016

- Perform `src/` file transfer during app build in the addon's `included` hook
so that this process won't fail in CI -- or anytime when the default blueprint can't
be run.


# 1.0.1 &mdash; November 6, 2016

- Include `VSCode`-related files in `.npmignore`


# 1.0.0 &mdash; November 6, 2016

- Initial release
