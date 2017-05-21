'use strict';

define(function(require) {

  require('angular');

  var AboutUsController = require('components/about-us/about-us.controller');

  return angular.module('app.about-us', [])

  .controller('AboutUsController', AboutUsController);
});
