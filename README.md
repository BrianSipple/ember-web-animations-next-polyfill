# ember-web-animations-next-polyfill

[![Greenkeeper badge](https://badges.greenkeeper.io/BrianSipple/ember-web-animations-next-polyfill.svg)](https://greenkeeper.io/)

_An Ember addon that provides and enables use of the `web-animations-next` version of the 
[Web Animations API Polyfill](https://github.com/web-animations/web-animations-js)._

[![Latest NPM release][npm-badge]][npm-badge-url]
[![Build Status][circle-badge]][circle-badge-url]
[![Ember Observer Score][ember-observer-badge]][ember-observer-badge-url]
[![License][license-badge]][license-badge-url]
[![Dependencies][dependencies-badge]][dependencies-badge-url]
[![Dev Dependencies][devDependencies-badge]][devDependencies-badge-url]

In addition to encapsulating the build step for `app.import`ing the polyfill 
from an application's Bower directory, this addon handles some 
[manual heavy-lifting](./blueprints/ember-web-animations-next-polyfill/index.js) 
of the the polyfill's source files in order to overcome a peculiarity of its source maps
being shipped with its distribution files 
(See [this issue](https://github.com/web-animations/web-animations-js/issues/42) for more insight). 

## Usage

```shell
ember install ember-web-animations-next-polyfill
```

No setup or special configuration is needed: you can now use the all of the functionality
of the [upcoming version of the Web Animations API](http://w3c.github.io/web-animations/).

## Contributing

This project will intend to stay up to date with offering the 
[latest version of the polyfill](https://github.com/web-animations/web-animations-js/blob/master/package.json). 
If you notice a discrepency between said version and the [version installed by the 
addon's blueprint](https://github.com/BrianSipple/ember-web-animations-next-polyfill/blob/master/blueprints/ember-web-animations-next-polyfill/index.js#L30), 
please feel free to [open up an issue](https://github.com/BrianSipple/ember-web-animations-next-polyfill/issues).
  
### Installation

* `git clone` this repository
* `npm install`
* `bower install`

### Running

* `ember serve`
* Visit your app at http://localhost:4200.

### Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).


[npm-badge]: https://img.shields.io/npm/v/ember-web-animations-next-polyfill.svg
[npm-badge-url]: https://www.npmjs.com/package/ember-web-animations-next-polyfill
[circle-badge]: https://circleci.com/gh/BrianSipple/ember-web-animations-next-polyfill/tree/master.svg?style=svg&circle-token={{CIRCLE_TOKEN}}
[circle-badge-url]: https://circleci.com/gh/BrianSipple/ember-web-animations-next-polyfill/tree/master
[ember-observer-badge]: http://emberobserver.com/badges/ember-web-animations-next-polyfill.svg
[ember-observer-badge-url]: http://emberobserver.com/addons/ember-web-animations-next-polyfill
[license-badge]: https://img.shields.io/npm/l/ember-web-animations-next-polyfill.svg
[license-badge-url]: LICENSE
[dependencies-badge]: https://img.shields.io/david/BrianSipple/ember-web-animations-next-polyfill.svg
[dependencies-badge-url]: https://david-dm.org/BrianSipple/ember-web-animations-next-polyfill
[devDependencies-badge]: https://img.shields.io/david/dev/BrianSipple/ember-web-animations-next-polyfill.svg
[devDependencies-badge-url]: https://david-dm.org/BrianSipple/ember-web-animations-next-polyfill#info=devDependencies
