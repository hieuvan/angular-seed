'use strict';

define(function(require) {
  return [function() {

    /**
     * Capitalize string
     *
     * @param string    input
     * @param {object}  scope
     *
     * @return {string} capitalized input
     */
    return function(input, scope) {
      if (input) {
        return input.substring(0,1).toUpperCase()+input.substring(1);
      }
    };
  }];
});
