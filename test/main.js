// ESLint declarations:
/* global describe */
/* eslint one-var: 0, semi-style: 0 */


// -- Vendor Modules


// -- Local Modules
const ES6Kadoo = require('../index.js')
    , pack     = require('../package.json')
    , testlib  = require('./int/libprototypal')
    ;


// -- Local Constants
const libname = 'ES6Kadoo';


// -- Local Variables


// -- Main
describe('Test ES6Kadoo:', () => {
  testlib(ES6Kadoo, libname, pack.version);
});
