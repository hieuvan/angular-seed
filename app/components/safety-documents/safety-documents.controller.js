'use strict';

define(function() {
  return ['config', 'SiteService', '$stateParams', 'sharedProperties', '$state', function(config, SiteService, $stateParams, sharedProperties, $state) {
    var vm = this;

    vm.siteTitle = config.siteTitle;
    var section_id = $stateParams.section_id;
    var sub_section_id = $stateParams.sub_section_id;

    if (_.isNull(section_id) || _.isNull(sub_section_id)) {
      $state.go('root.site');
    }
    vm.hotel = sharedProperties.getProperty('hotel');
    vm.permissionAccessable = vm.hotel.submit_safety_documents;

    vm.documentSubmitted = null;
    vm.formSubmitted = false;

    vm.submitDocuments = function() {
      if (vm.safetyDocument) {
        vm.formSubmitted = true;
        var data = {
          type: vm.documentType,
          period: vm.documentPeriod,
          year: vm.documentYear,
          file: vm.safetyDocument,
          hotel: $stateParams.siteId
        };
        SiteService.submitSafetyDocuments(data).then(function(val) {
          if (val) {
            vm.documentSubmitted = true;
          } else {
            vm.documentSubmitted = false;
          }
        });
      }
    }

  }];
});
