// ESLint declarations:
/* global describe */
/* eslint one-var: 0, semi-style: 0 */


// -- Vendor Modules


// -- Local Modules
const ES6Kadoo = require('../index')
    // ES6Kadoo = require('../src/prototypal').default
    , pack     = require('../package.json')
    , testlib  = require('./int/libprototypal')
    ;


// -- Local Constants
const libname = 'ES6Kadoo';


// -- Local Variables


// -- Main

// Nota:
// If you choose 'ES6Kadoo = require('../index')', 'display-coverage' will
// show the coverage of all the library in one file.
//
// If you want to display the coverage file by file, you must choose
// 'ES6Kadoo = require('../src/prototypal').default'. But, in this case,
// the build isn't done, so you should pass '{{lib:name}}' as libname and
// '{{lib:version}}' as the library version.

describe('Test ES6Kadoo:', () => {
  // testlib(ES6Kadoo, '{{lib:name}}', '{{lib:version}}', 'without new');
  testlib(ES6Kadoo, libname, pack.version, 'without new');
});
