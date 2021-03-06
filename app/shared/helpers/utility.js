'use strict';

define(function(require) {
  var constant = require('app.constant');

  var Utility = function() {},
      prototype = Utility.prototype;


  /**
   * Check to make sure its safe to call $scope.$apply.
   *
   * @param $scope scope
   * @param function fn
   */
  prototype.safeApply = function(scope, fn) {
    fn = typeof fn !== 'undefined' ? fn : function(){};
    (scope.$$phase || scope.$root.$$phase) ? fn() : scope.$apply(fn);
  };

  /**
   * Return a object wrapped in a function
   *
   * @param $scope scope
   * @param function fn
   */
  prototype.factory = function(object {
    return function() { return object; };
  };

  return new Utility;
});
