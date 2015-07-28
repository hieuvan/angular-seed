'use strict';

define(function(require) {

  return ['projects', function(projects) {
    var vm = this;

    vm.projects = projects.getAll();
  }];
});
