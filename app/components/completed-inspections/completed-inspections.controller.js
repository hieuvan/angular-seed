'use strict';

define(function() {
  return ['config', 'SiteService', 'DTOptionsBuilder', 'DTColumnDefBuilder', '$stateParams', '$state', 'sharedProperties', function(config, SiteService, DTOptionsBuilder, DTColumnDefBuilder, $stateParams, $state, sharedProperties) {
    var vm = this;

    vm.title = config.siteTitle;
    var section_id = $stateParams.section_id;
    var sub_section_id = $stateParams.sub_section_id;

    if (_.isNull(section_id) || _.isNull(sub_section_id)) {
      $state.go('root.site');
    }
    vm.hotel = sharedProperties.getProperty('hotel');
    vm.permissionAccessable = vm.hotel.view_completed_inspections;

    vm.dateFrom = null;
    vm.dateTo = null;

    vm.inlineOptions = {
      minDate: new Date(),
      showWeeks: true
    };

    vm.dateOptions = {
      formatYear: 'yy',
      minDate: new Date(),
      startingDay: 1,
      monthColumns: 1,
      showWeeks: true,
      yearColumns: 1,
      yearRows: 1
    };

    vm.toggleMin = function() {
      vm.inlineOptions.minDate = vm.inlineOptions.minDate ? null : new Date();
      vm.dateOptions.minDate = vm.inlineOptions.minDate;
    };

    vm.toggleMin();

    vm.open1 = function() {
      vm.popup1.opened = true;
    };

    vm.open2 = function() {
      vm.popup2.opened = true;
    };

    vm.format = 'dd/MM/yyyy';
    vm.altInputFormats = ['M!/d!/yyyy'];

    vm.popup1 = {
      opened: false
    };

    vm.popup2 = {
      opened: false
    };
    vm.completedInspections = null;

    vm.dtOptions = DTOptionsBuilder.newOptions()
        .withPaginationType('full_numbers')
        .withDisplayLength(10)
        .withBootstrap();

    vm.dtColumnDefs = [
      DTColumnDefBuilder.newColumnDef(0),
      DTColumnDefBuilder.newColumnDef(1)
    ];

    vm.showInspections = function() {
      if (!vm.dateFrom || !vm.dateTo) {
        return;
      }
      var params = {};
      var dateFrom = new Date(vm.dateFrom);
      var dateTo = new Date(vm.dateTo);
      var hotelId = $stateParams.siteId;
      params.dateFrom = dateFrom.getTime();
      params.dateTo = dateTo.getTime();
      params.hotelId = hotelId;
      SiteService.getInspections(params).then(function(val) {
        if (val) {
          vm.completedInspections = val;
        }
      });

    }


  }];
});
