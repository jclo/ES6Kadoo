/** ************************************************************************
 *
 * A ...
 *
 * basic.js is just a literal object that contains a set of functions. It
 * can't be intantiated.
 *
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
/* - */


// -- Vendor Modules


// -- Local Modules
import Util from './util/util';


// -- Local Constants
// Saves the previous value of the library variable, so that it can be
// restored later on, if noConflict is used.
const previousES6Kadoo = root.ES6Kadoo;


// -- Local Variables


// -- Public Static Methods ------------------------------------------------

const ES6Kadoo = {

  /**
   * Returns a reference to this ES6Kadoo object.
   *
   * Nota:
   * Running ES6Kadoo in noConflic mode, returns the ES6Kadoo variable to
   * its previous owner.
   *
   * @method ()
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

// Attaches a constant to ES6Kadoo that provides the version of the lib.
ES6Kadoo.VERSION = '{{lib:version}}';


// -- Export
export default ES6Kadoo;

/* - */
