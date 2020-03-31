/*! ****************************************************************************
 * ES6Kadoo v0.0.0-alpha.0
 *
 * A template for writing pure ES6 Javascript libraries.
 * (you can download it from npm or github repositories)
 * Copyright (c) 2020 Mobilabs <contact@mobilabs.fr> (http://www.mobilabs.fr).
 * Released under the MIT license. You may obtain a copy of the License
 * at: http://www.opensource.org/licenses/mit-license.php).
 * Built from {{boiler:name}} v{{boiler:name:version}}.
 * ************************************************************************** */
// ESLint declarations
/* global define */
/* eslint no-shadow: ['error', { 'allow': ['root'] }] */
/* eslint strict: ["error", "function"] */
(function(root, factory) {
  'use strict';

  /* istanbul ignore next */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([''], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    /* eslint-disable-next-line no-param-reassign */
    module.exports = factory(root);
  } else {
    // Browser globals.
    /* eslint-disable-next-line no-param-reassign */
    root.ES6Kadoo = factory(root);
  }
}(this, (root) => {
  'use strict';

  /* ***************************************************************************
   *
   * Tree is an object that links all the internal IIFE modules.
   *
   * ************************************************************************ */
  /* eslint-disable */
  let $__TREE = {".":{"src":{"prototypal":{}}},"src":{"util":{"util":{}}}};
  $__TREE.extend=function(o,m){var k=Object.keys(m);for(var i=0;i<k.length;i++){o[k[i]]=m[k[i]]}};
  /* - */
  /* eslint-enable */

  /* index: 1, path: './src/prototypal.js', import: [2] */
  (function() {
    /** **************************************************************************
     *
     * A ...
     *
     * prototypal.js is built upon the Prototypal Instantiation pattern. It
     * returns an object by calling its constructor. It doesn't use the new
     * keyword.
     *
     * Private Functions:
     *  . none,
     *
     *
     * Constructor:
     *  . ES6Kadoo                    creates and returns the ES6Kadoo object,
     *
     *
     * Public Static Methods:
     *  . noConflict                  returns a reference to this ES6Kadoo object,
     *
     *
     * Public Methods:
     *  . getString                   returns a string,
     *  . getArray                    returns an array,
     *
     *
     *
     * @namespace    ES6Kadoo
     * @dependencies none
     * @exports      -
     * @author       -
     * @since        0.0.0
     * @version      -
     * ************************************************************************ */
    /* - */
    /* eslint-disable one-var, semi-style */


    // -- Vendor Modules


    // -- Local Modules
    const Util = $__TREE.src.util.util;


    // -- Local Constants
    // Saves the previous value of the library variable, so that it can be
    // restored later on, if noConflict is used.
    const previousES6Kadoo = root.ES6Kadoo
        ;


    // -- Local Variables
    let methods
      ;


    // -- Public ---------------------------------------------------------------

    /**
     * Returns the ES6Kadoo object.
     * (Prototypal Instantiation Pattern)
     *
     * @constructor (arg1)
     * @public
     * @param {String}          the argument to be saved as an object variable,
     * @returns {Object}        returns the ES6Kadoo object,
     * @since 0.0.0
     */
    const ES6Kadoo = function(name) {
      const obj = Object.create(methods);
      obj.name = name;
      return obj;
    };

    // Attaches a constant to ES6Kadoo that provides the version of the lib.
    ES6Kadoo.VERSION = '0.0.0-alpha.0';


    // -- Public Static Methods ------------------------------------------------

    /**
     * Returns a reference to this ES6Kadoo object.
     *
     * Nota:
     * Running ES6Kadoo in noConflic mode, returns the ES6Kadoo variable to
     * its previous owner.
     *
     * @method ()
     * @public
     * @param {}                -,
     * @returns {Object}        returns the ES6Kadoo object,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    ES6Kadoo.noConflict = function() {
      /* eslint-disable-next-line no-param-reassign */
      root.ES6Kadoo = previousES6Kadoo;
      return this;
    };


    // -- Public Methods -------------------------------------------------------

    methods = {

      /**
       * Returns a string.
       *
       * @method ()
       * @public
       * @param {}              -,
       * @returns {String}      returns a string,
       * @since 0.0.0
       */
      getString() {
        return Util.getString();
      },

      /**
       * Returns an array.
       *
       * @method ()
       * @public
       * @param {}              -,
       * @returns {Array}       returns an array,
       * @since 0.0.0
       */
      getArray() {
        return Util.getArray();
      },
    };


    // -- Export
    $__TREE.src.prototypal = ES6Kadoo;

    /* eslint-enable one-var, semi-style */
  }());

  /* index: 2, path: 'src/util/util.js', import: [] */
  (function() {
    /** **************************************************************************
     *
     * A ...
     *
     * util.js is just a literal object that contains a set of functions. It
     * can't be intantiated.
     *
     *
     * Private Functions:
     *  . _getString                  returns a string,
     *  . _getArray                   returns an array,
     *
     *
     * Public Static Methods:
     *  . getString                   returns a string,
     *  . getArray                    returns an array,
     *
     *
     *
     * @namespace    -
     * @dependencies none
     * @exports      -
     * @author       -
     * @since        0.0.0
     * @version      -
     * ************************************************************************ */
    /* - */
    /* eslint-disable no-underscore-dangle */


    // -- Vendor Modules


    // -- Local Modules


    // -- Local Constants


    // -- Local Variables


    // -- Private Functions ----------------------------------------------------

    /**
     * Returns a string.
     *
     * @function ()
     * @private
     * @param {}                -,
     * @returns {String}        returns a string,
     * @since 0.0.0
     */
    function _getString() {
      return 'I am a string!';
    }

    /**
     * Returns an array.
     *
     * @function ()
     * @private
     * @param {}                -,
     * @returns {Array}         returns an array,
     * @since 0.0.0
     */
    function _getArray() {
      return [1, 2, 3];
    }


    // -- Public Static Methods ------------------------------------------------

    const Util = {

      /**
       * Returns a string.
       *
       * @method ()
       * @public
       * @param {}              -,
       * @returns {String}      returns a string,
       * @since 0.0.0
       */
      getString() {
        return _getString();
      },

      /**
       * Returns an array.
       *
       * @method ()
       * @public
       * @param {}              -,
       * @returns {Array}       returns an array,
       * @since 0.0.0
       */
      getArray() {
        return _getArray();
      },
    };


    // -- Export
    $__TREE.extend($__TREE.src.util.util, Util);

    /* eslint-enable no-underscore-dangle */
  }());


  // Returns the library name:
  return $__TREE.src.prototypal;
}));
