'use strict';

define(function() {
  return ['config', 'SiteService', '$stateParams', '$state', 'hotel', 'sharedProperties', function(config, SiteService, $stateParams, $state, hotel) {
    var vm = this;
    var hotelId = $stateParams.siteId;
    vm.hotel = hotel;

    if (_.isEmpty(hotelId)) {
      $state.go('root.home');
    }

  }];
});
