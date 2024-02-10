// ESLint declarations:
/* global describe */
/* eslint one-var: 0, semi-style: 0 */


// -- Vendor Modules


// -- Local Modules
const testlib = require('./int/libprototypal')
    , pack    = require('../package.json')
    ;


// -- Local Constants
const libname = 'ES6Kadoo';


// -- Local Variables


// -- Main

// This define root for Node.js:
global.root = {};

// Nota:
// If you want that 'display-coverage' shows the coverage files by files,
// you should set 'ES6Kadoo' and 'testlib' like this:
//  . const ES6Kadoo = require('../src/<file>').default;
//  . testlib(ES6Kadoo, '{{lib:name}}', '{{lib:version}}', 'without new');
//
// But, if you want that 'display-coverage' shows the coverage in one file,
// you should set 'ES6Kadoo' and 'testlib' like this:
//  . const ES6Kadoo = require('../index');
//  . testlib(ES6Kadoo, libname, pack.version, 'without new');

const ES6Kadoo = require('../src/prototypal').default;
// const ES6Kadoo = require('../index');

describe('Test ES6Kadoo:', () => {
  testlib(ES6Kadoo, '{{lib:name}}', '{{lib:version}}', 'without new');
  // testlib(ES6Kadoo, libname, pack.version, 'without new');
});


// - oOo --
