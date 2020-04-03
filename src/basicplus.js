/** ************************************************************************
 *
 * A ...
 *
 * basicplus.js is based on a variation of the basic.js pattern. The
 * properties are added dynamically. Thus, it can be divided in several
 * chunks of properties and the build can produces several versions of the
 * library by including or not some chunks.
 *
 * Private Functions:
 *  . none,
 *
 *
 * Public Static Methods:
 *  . noConflict                  returns a reference to this ES6Kadoo object,
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
 * ********************************************************************** */
/* global root */
/* eslint-disable one-var, semi-style */


// -- Vendor Modules


// -- Local Modules
import Util from './util/util';


// -- Local Constants
// Saves the previous value of the library variable, so that it can be
// restored later on, if noConflict is used.
const previousES6Kadoo = root.ES6Kadoo;


// -- Local Variables


// -- Private Functions ----------------------------------------------------

/**
 * Extends the passed-in object with new methods.
 *
 * Nota: this function mutates object.
 *
 * @function (arg1, arg2)
 * @private
 * @param {Object}          the object to extend,
 * @param {Object}          an object containing a set of methods,
 * @returns {}              -,
 * @since 0.0.0
 */
function extend(object, methods) {
  const keys = Object.keys(methods);

  for (let i = 0; i < keys.length; i++) {
    /* eslint-disable-next-line no-param-reassign */
    object[keys[i]] = methods[keys[i]];
  }
}


// -- Public Static Methods ------------------------------------------------

const ES6Kadoo = {

  /**
   * Returns a reference to this ES6Kadoo object.
   *
   * Nota:
   * Running ES6Kadoo in noConflic mode, returns the ES6Kadoo variable to
   * its previous owner.
   *
   * @function ()
   * @public
   * @param {}              -,
   * @returns {Object}      returns the ES6Kadoo object,
   * @since 0.0.0
   */
  /* istanbul ignore next */
  noConflict() {
    /* eslint-disable-next-line no-param-reassign */
    root.ES6Kadoo = previousES6Kadoo;
    return this;
  },
};

// Attaches a constant to ES6Kadoo that provides the version of the lib.
ES6Kadoo.VERSION = '{{lib:version}}';


// Extends ES6Kadoo with new static methods.
extend(ES6Kadoo, {

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
});


// -- Export
export default ES6Kadoo;

/* eslint-enable one-var, semi-style */
