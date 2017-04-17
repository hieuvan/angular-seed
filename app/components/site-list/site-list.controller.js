'use strict';

define(function() {
  return ['config', '$rootScope', 'SiteService', 'DTOptionsBuilder', 'DTColumnDefBuilder', function(config, $rootScope, SiteService, DTOptionsBuilder, DTColumnDefBuilder) {
    var vm = this;
    vm.showDT = false;

    vm.siteTitle = config.siteTitle;
    if (!_.isEmpty($rootScope.hotels)) {
      vm.hotels = $rootScope.hotels;
      vm.showDT = true;
    } else {
      SiteService.getHotels().then(function(value) {
        vm.hotels = value;
        vm.showDT = true;
      });
    }

    vm.dtOptions = DTOptionsBuilder.newOptions()
        .withPaginationType('full_numbers')
        .withDisplayLength(10)
        .withBootstrap();

    vm.dtColumnDefs = [
      DTColumnDefBuilder.newColumnDef(0),
      DTColumnDefBuilder.newColumnDef(1)
    ];
  }];
});
