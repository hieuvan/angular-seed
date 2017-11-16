'use strict';

define(function(require) {

  require('angular');

  var ModalController = require('components/email-photo-modal/modal.controller');

  return angular.module('app.email-photo-modal', [])

  .controller('ModalController', ModalController);
});
