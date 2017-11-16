'use strict';

define(function() {
  return ['config', 'sharedProperties', function(config, sharedProperties) {
    var vm = this;

    vm.photos = [];

    vm.hotel = sharedProperties.getProperty('hotel');

    var photos = vm.hotel.brand_images;

    _.each(photos, function(photo) {
      vm.photos.push({'url': photo.url, 'id': photo.id, thumbUrl: photo.thumbnail_url});
    });

  }];
});