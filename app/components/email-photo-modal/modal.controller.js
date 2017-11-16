'use strict';

define(function() {
  return ['config', '$uibModalInstance', 'emailMessage', 'SiteService', function(config, $uibModalInstance, emailMessage, SiteService) {
    var vm = this;

    vm.emailTo = null;
    vm.emailSubject = 'AHS Assure Quality Inspection Follow Up';
    vm.emailMessage = emailMessage;

    vm.cancelModal = function () {
      $uibModalInstance.close();
    };

    vm.photoSubmitted = null;
    vm.formSubmitted = false;

    vm.multipleEmailPattern = (function () {
        return {
        test: function(value) {
            return value.split(',').every(isValidEmail);
        }
    };

    })();
    function isValidEmail(email) {
      var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i;
      return EMAIL_REGEXP.test(email.trim());
    }

    vm.sendPhoto = function() {
      vm.formSubmitted = true;
      var data = {
          to: vm.emailTo,
          subject: vm.emailSubject,
          message: vm.emailMessage,
          photo: vm.emailPhoto
      };
      SiteService.emailPhoto(data).then(function(val) {
          if (val === true) {
              vm.photoSubmitted = true;
              setTimeout(function () {
                  $uibModalInstance.close();
              }, 3000);
          } else {
              if (!_.isUndefined(val.error)) {
                  vm.formError = val.error;
              }
              vm.photoSubmitted = false;
              vm.formSubmitted = false;
          }
      });
    }

  }];
});
