'use strict';

define(function(require) {
  return [function() {
    var vm = this;

    vm.buildVersion = '3.4.5';
    vm.buildDate = "23/5/12";
    vm.username = "Matt";

    vm.breadcrumbTemplate = 'test';

    vm.menuItems = [
      { name: 'Profile', state: "profile" },
      { name: 'Admin', state: "profile" },
      { name: 'Help', state: "profile" },
      { divider: true , state: false },
      { name: 'logout', state: "logout" }
    ];
  }];
});
