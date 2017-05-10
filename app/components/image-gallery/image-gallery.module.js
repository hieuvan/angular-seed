'use strict';

define(function(require) {

  require('angular');

  var ImageGalleryController = require('components/image-gallery/image-gallery.controller');

  return angular.module('app.image-gallery', [])

  .controller('ImageGalleryController', ImageGalleryController);
});
