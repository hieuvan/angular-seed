'use strict';

define(function() {
  return ['config', '$Auth', '$state', function(config, $Auth, $state) {
    var vm = this;
    console.log('log out bbbbfdsfsd');
    vm.siteTitle = config.siteTitle;

    $Auth.logout().then(function(val) {
      if (val) {
        console.log('log out');
        $state.go('root.login', {}, { reload: true });
      }
    });
    console.log('log outfdsfsd');
    $Auth.removeToken();

  }];
});
