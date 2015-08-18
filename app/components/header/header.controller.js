'use strict';

define(function(require) {
  return [function() {
    var vm = this;

    vm.buildVersion = '3.4.5';
    vm.buildDate = "23/5/12";
    vm.username = "Subash";

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
