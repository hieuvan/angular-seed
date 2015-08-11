'use strict';

define(function(require) {

  var angular = require('angular');

  var Module = function(name) {
    this.name = name;
    this.module = angular.module(this.name);
    this.deps = this.module.value(this.name).requires;
  },

  prototype = Module.prototype;

  prototype.isRegistered = function() {
    it('should be registered', function(){
      expect(this.module).not.toBe(null);
    });
  };

  prototype.hasDependencies = function(deps) {
    describe('Dependencies:', function() {
      deps.forEach(function(dep) {
        it('should have ' + dep + ' as a dependency', function() {
          expect(hasModule(dep)).toBe(true);
        });
      });
    });
  };

  var hasModule = function(dep) {
    return this.deps.indexOf(dep) >= 0;
  };

  return Module;

});
