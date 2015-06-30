'use strict';

define(function(require) {
  return ['HttpService', function(HttpService) {

    var getProjectUsers = function(id) {
      return HttpService.get('projects' + '/' + id + '/' + 'users').then(function(project) {
        return project.data;
      });
    };

    return {
      getProjectUsers: getProjectUsers
    };
  }];
});
