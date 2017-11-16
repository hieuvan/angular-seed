'use strict';

define(function(require) {

  require('angular');

  var CompletedInspectionsController = require('components/completed-inspections/completed-inspections.controller');

  return angular.module('app.completed-inspections', [])

  .controller('CompletedInspectionsController', CompletedInspectionsController);
});
