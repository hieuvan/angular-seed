'use strict';

define(function(require) {

  var angular = require('angular');

  var Module = function(name) {
    this.module = angular.module(name);
    this.name = name;
    this.deps = this.module.value(name).requires;
  },

  prototype = Module.prototype;

  /**
   * Test if the Module is registered
   */
  prototype.isRegistered = function() {
    it('should be registered', function(){
      expect(this.module).not.toBe(null);
    });
  };

  /**
   * Test if module has given dependencies
   *
   * @params array deps List of dependencies to check
   */
  prototype.hasDependencies = function(deps) {
    var self = this;

    describe('Dependencies:', function() {
      deps.forEach(function(dep) {
        self.hasDependency(dep);
      });

      it('should have same number of dependencies.', function() {
        expect(self.deps).toEqual(deps);
      });
    });
  };

  /**
   * Test if module has given dependency
   *
   * @params string dep dependency to check
   */
  prototype.hasDependency = function(dep) {
    var self = this;

    it('should have ' + dep + ' as a dependency', function() {
      expect(hasModule(self.deps, dep)).toBe(true);
    });
  };

  /**
   * Check if module has given dependency
   *
   * @param array deps List of array to check from
   * @param string dep Dependency to check
   *
   * @returns boolean
   */
  var hasModule = function(deps, dep) {
    return deps.indexOf(dep) >= 0;
  };

  return Module;

});
