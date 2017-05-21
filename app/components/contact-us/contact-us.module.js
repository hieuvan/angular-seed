'use strict';

define(function(require) {

  require('angular');

  var ContactUsController = require('components/contact-us/contact-us.controller');

  return angular.module('app.contact-us', [])

  .controller('ContactUsController', ContactUsController);
});
