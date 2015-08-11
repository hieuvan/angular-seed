'use strict';

define(function(require) {

  require('app.module');

  var angular = require('angular');

  describe('App Module:', function() {

    var module;

    beforeEach(function() {
      module = angular.module('app');
    });

    it('should be registered', function(){
      //console.log(module);
    });

  });

});
