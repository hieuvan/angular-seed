'use strict';

define(function() {
  return ['config', 'hotels', 'DTOptionsBuilder', 'DTColumnDefBuilder', function(config, hotels, DTOptionsBuilder, DTColumnDefBuilder) {
    var vm = this;

    vm.siteTitle = config.siteTitle;
    vm.showDT = false;
    vm.hotels = hotels;

    if (!_.isEmpty(vm.hotels)) {
      vm.showDT = true;
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
