'use strict';

define(function() {
  return ['config', 'SiteService', '$stateParams', function(config, SiteService, $stateParams) {
    var vm = this;

    vm.siteTitle = config.siteTitle;
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
