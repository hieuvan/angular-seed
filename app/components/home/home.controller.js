'use strict';

define(function() {
  return ['config', function(config) {
    var vm = this;

    vm.siteTitle = config.siteTitle;
    vm.selectHotel = null;

  }];
});
