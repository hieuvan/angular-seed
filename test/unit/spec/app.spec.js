'use strict';

define(function(require) {

  var angular = require('underscore');
  require('app.module');

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
