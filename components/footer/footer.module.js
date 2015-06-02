'use strict';

define(function(require) {

  require('angular');

  var FooterController = require('components/footer/footer.controller');

  return angular.module('app.footer', [])

  .controller('FooterController', FooterController);
});
