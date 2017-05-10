'use strict';

define(function(require) {

  require('angular');

  var DocumentsController = require('components/documents/documents.controller');

  return angular.module('app.documents', [])

  .controller('DocumentsController', DocumentsController);
});
