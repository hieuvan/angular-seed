'use strict';

define(function(require) {

  require('angular');

  var SafetyDocumentsController = require('components/safety-documents/safety-documents.controller');

  return angular.module('app.safety-documents', [])

  .controller('SafetyDocumentsController', SafetyDocumentsController);

});
