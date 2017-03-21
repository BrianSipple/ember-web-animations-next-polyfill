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
