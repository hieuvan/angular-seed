'use strict';

define(function() {
  return ['config', '$Auth', '$state', function(config, $Auth, $state) {
    var vm = this;

    vm.siteTitle = config.siteTitle;
    vm.errorResetPassword = false;

    vm.resetPassword = function() {
      var formData = {email: vm.email};
      $Auth.resetPassword(formData).then(function (val) {
        if (!val) {
          vm.errorResetPassword = true;
          vm.resetPasswordSuccessfully = false;
        } else {
          vm.errorResetPassword = false;
          vm.resetPasswordSuccessfully = true;
        }
      });
    };

  }];
});
