'use strict';

define(function(require) {
  return ['HttpService', function(HttpService) {

    var getProjects = function() {
      return HttpService.get('projects').then(function(projects) {
        return projects.data;
      });
    };

    var getProject = function(id) {
      return HttpService.get('projects' + '/' + id, {'include[]': ['tests']}).then(function(project) {
        return project.data;
      });
    };

    var createProject = function(data) {
      return HttpService.post('projects', data).then(function(project) {
        return project.data;
      });
    };

    var addUserToProject = function(id, data) {
      return HttpService.post('projects' + '/' + id + '/' + 'users', data).then(function(user) {
        return user.data;
      });
    };

    var getProjectUsers = function(id) {
      return HttpService.get('projects' + '/' + id + '/' + 'users').then(function(project) {
        return project.data;
      });
    };

    return {
      getProjects: getProjects,
      getProject: getProject,
      createProject: createProject,
      addUserToProject: addUserToProject,
      getProjectUsers: getProjectUsers
    };
  }];
});
