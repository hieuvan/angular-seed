'use strict';

define(function() {
  return ['config', 'SiteService', '$stateParams', function(config, SiteService, $stateParams) {
    var vm = this;
    var hotelId = $stateParams.siteId;
    vm.hotel = null;

    SiteService.getHotel(hotelId).then(function(value) {
      vm.hotel = value;
    });

  }];
});
