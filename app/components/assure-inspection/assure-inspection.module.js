'use strict';

define(function(require) {

  require('angular');

  var AssureInspectionController = require('components/assure-inspection/assure-inspection.controller');

  return angular.module('app.assure-inspection', [])

  .controller('AssureInspectionController', AssureInspectionController);
});
