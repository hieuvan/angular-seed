'use strict';

define(function() {
  return ['config', 'sharedProperties', function(config, sharedProperties) {
    var vm = this;

    vm.photos = [];

    vm.hotel = sharedProperties.getProperty('hotel');

    var photos = vm.hotel.brand_images;

    _.each(photos, function(photo) {
      vm.photos.push({'src': photo.url});
    });

    vm._Index = 0;

    // if a current image is the same as requested image
    vm.isActive = function (index) {
      return vm._Index === index;
    };

    // show prev image
    vm.showPrev = function () {
      vm._Index = (vm._Index > 0) ? --vm._Index : vm.photos.length - 1;
    };

    // show next image
    vm.showNext = function () {
      vm._Index = (vm._Index < vm.photos.length - 1) ? ++vm._Index : 0;
    };

    // show a certain image
    vm.showPhoto = function (index) {
      vm._Index = index;
    };

  }];
});