'use strict';

define(function(require) {

  require('angular');

  var HomeController = require('components/home/home.controller');

  return angular.module('app.home', [])

  .controller('HomeController', HomeController);
});
