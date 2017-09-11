'use strict';

define(function() {
  return ['config', '$Auth', '$state', function(config, $Auth, $state) {
    var vm = this;

    vm.siteTitle = config.siteTitle;

    $Auth.logout().then(function(val) {
      if (val) {
        $state.go('root.login', {}, { reload: true });
      }
    });

    $Auth.removeToken();

  }];
});
