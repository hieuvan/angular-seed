'use strict';

define(function(require) {

  return ['$state', 'project', 'ProjectsService',
  function($state, project, ProjectsService) {
    var vm = this;

    vm.project = project;

    // update the bread crumb
    $state.current.data.displayName = project.name;

    vm.tests = [];
    vm.exports = [];

    vm.tables = {
      exports: ['Date', 'Form', 'User', 'Notes'] ,
      tests: ['#', 'Name', 'Last Updated', 'Updated by', 'Version']
    };
  }];
});
