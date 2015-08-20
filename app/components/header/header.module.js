'use strict';

define(function(require) {

  require('angular');

  var HeaderController = require('components/header/header.controller');

  return angular.module('app.header', [])

  .controller('HeaderController', HeaderController);
});
