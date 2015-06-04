'use strict';

define(function(require) {
  return ['$auth', function($auth) {
    var vm = this;

    vm.authUserFullName = $auth.getUser().get('name');

    vm.buildVersion = '3.4.5';
    vm.buildDate = "23/5/12";
    //vm.username = "Matt";

    vm.breadcrumbTemplate = 'test';

    vm.menuItems = [
      { name: 'Profile', state: "root.profile" },
      { name: 'Admin', state: "root.profile" },
      { name: 'Help', state: "root.profile" },
      { divider: true , state: false },
      { name: 'logout', state: "root.logout" }
    ];
  }];
});
