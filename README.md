# ES6Kadoo

[![NPM version][npm-image]][npm-url]
[![GitHub last commit][commit-image]][commit-url]
[![Github workflow][ci-image]][ci-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![npm bundle size][npm-bundle-size-image]][npm-bundle-size-url]
[![License][license-image]](LICENSE.md)

`ES6Kadoo` is a boilerplate for writing ES6 Javascript libraries that run on both Node.js and ECMAScript 2015 (ES6) compliant browsers.

The build doesn't require a transpiler (like babel) or a builder (like browserify, webpack or rollup) to produce a module that runs in the browser from source files that use `import` and `export` statements. It is useful if you want to keep your source code quite pure.

`ES6Kadoo` relies on `Kadoo` to drastically reduces the amount of extra code added to your library (go to [kadoo](https://www.npmjs.com/package/kadoo) for details).

`ES6Kadoo` relies on [Mocha](https://mochajs.org) and [Chai](http://chaijs.com) for unitary testing. It relies on [Istanbul](https://gotwarlost.github.io/istanbul/) for code coverage.

`ES6Kadoo` uses [Github Actions](https://docs.github.com/en/actions) for continuous integration and [Coveralls.io](https://coveralls.io) to display test coverage.

Nota:  
`ES6Kadoo` is a fork of the boilerplate [ES6lib](https://www.npmjs.com/package/@mobilabs/es6lib).


## Quick Startup

You can easily get your first `ES6Kadoo` library running in a couple of minutes by just typing a few command lines. But first, you need to create an empty folder. It will contain your library.

Then, you just need to create a `package.json` file that contains:

```json
{
  "name": "NameOfYourProject",
  "scripts": {
    "create": "npm install @mobilabs/es6kadoo && npm run populate",
    "populate": "es6kadoo populate --name $npm_package_name --author $npm_package_config_name --acronym $npm_package_config_acronym --email $npm_package_config_email --url $npm_package_config_url && npm install && npm run build:dev && npm run test && npm run report"
  },
  "config": {
    "name": "John Doe",
    "acronym": "jdo",
    "email": "jdo@johndoe.com",
    "url": "http://www.johndoe.com/"
  }
}
```
Replace `NameOfYourProject` by your project name and fill `writer` with your credentials.

And finally, type in the terminal:

```bash
npm run create.
```

That's almost all! When the script has been executed, your folder contains the following files:

```bash
Your project Folder
      |_ .github
      |     |_ workflows
      |           |_ ci.yml    // Github Workflow file (if you use it),
      |_ lib
      |   |_ lib.js           // Your built UMD module,
      |   |_ lib.mjs          // Your built ES6 module,
      |_ src
      |   |_ ...              // The source files of your library,
      |   |_ ...
      |   |_ ...
      |_ tasks
      |   |_ ...              // The tasks to build your project,
      |_  test
      |     |_ main.js        // Your Mocha, Chai test file,
      |_ .eslintignore        // Files to be ignored by ESLint,
      |_ .eslintrc            // A Configuration file for the ESLint linter tool (if you use it),
      |_ .gitignore           // Files that Git must ignore (if you use git),
      |_ .npmignore           // Files that Npm must ignore (optional),
      |_ .CHANGELOG.md        // The changes between your different versions,
      |_ index.js             // The link to your ES5 library,
      |_ LICENSE.md           // The license that applies to your library (here MIT),
      |_ package-lock.json    // The NPM dependency tree,
      |_ package.json         // The NPM package file,
      |_ README.md            // Your README file,
```

This folder is now a NPM package.


## How to build it

The file `package.json` contains the build instructions. These instructions populate the folder `lib` from the sources files included in the folder `src`.

`package.json` implements two operations for the build:
  * the command `npm run build:dev:` creates the library at the execution,
  * and the command `npm run watch` updates the library when one of the source files is modified.


## How to test it

Your `package.json` file contains three scripts to test your UMD library:

  * `npm run test`,
  * `npm run check:coverage`,
  * `npm run display:coverage`.

`npm run test` executes the tests and computes the test coverage.

`npm run check:coverage` checks if the test coverage matches the requirements. Here 100%.

`npm run display:coverage` opens your browser and reports the test coverage.


## How to create a distribution version

Your `package.json` file contains a script to build a distribution library:

  * `npm run build:prod`

The script `build:prod` adds a license header to the library and creates a minified version.


## How to use it

### On Node.js

Create a new project folder aside your project. Then, install your package by typing:

```bash
npm install ../your_project_library
```

Open a `Node.js` session and type:
```js
node
> var mylib = require('mylib');
undefined
> mylib.getString();
'I am a string!'
> mylib.getArray();
[ '1', '2', '3' ]
>
```

### Inside the browser

Inside the browser, pick-up the JS file `lib/mylib.js` and add it as a script in your HTML file. `mylib` is an immediately-invoked function expression. It attaches the `mylib` variable to the current context.

```html
<!DOCTYPE html>
<html>
  <body>
    <script src="./path_to_your_lib/mylib.js"></script>
    <script>
    	console.log(mylib.VERSION);
    </script>
  </body>
</html>
```

Or,

```html
<!DOCTYPE html>
<html>
  <body>
    <script type="module">
      import mylib from './<path_to_your_lib>/mylib.mjs';

      console.log(mylib.VERSION);
    </script>
  </body>
</html>
```

Enjoy!

## License

[MIT](LICENSE.md).

<!--- URls -->

[npm-image]: https://img.shields.io/npm/v/@mobilabs/es6kadoo.svg?logo=npm&logoColor=fff&label=NPM+package
[release-image]: https://img.shields.io/github/release/jclo/es6kadoo.svg?include_prereleases
[commit-image]: https://img.shields.io/github/last-commit/jclo/es6kadoo.svg?logo=github
[ci-image]: https://github.com/jclo/es6lib/actions/workflows/ci.yml/badge.svg
[coveralls-image]: https://img.shields.io/coveralls/jclo/es6kadoo/master.svg?&logo=coveralls
[npm-bundle-size-image]: https://img.shields.io/bundlephobia/minzip/@mobilabs/es6kadoo.svg
[license-image]: https://img.shields.io/npm/l/@mobilabs/es6kadoo.svg

[npm-url]: https://www.npmjs.com/package/@mobilabs/es6kadoo
[release-url]: https://github.com/jclo/es6kadoo/tags
[commit-url]: https://github.com/jclo/es6kadoo/commits/master
[ci-url]: https://github.com/jclo/es6lib/actions/workflows/ci.yml
[coveralls-url]: https://coveralls.io/github/jclo/es6kadoo?branch=master
[npm-bundle-size-url]: https://img.shields.io/bundlephobia/minzip/@mobilabs/es6kadoo
[license-url]: http://opensource.org/licenses/MIT
