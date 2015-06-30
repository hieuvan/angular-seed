'use strict';

define(function(require) {
  return ['HttpService', function(HttpService) {

    var projects, project, projectUsers;

    var getProjects = function() {
      if (!projects) {
        projects = HttpService.get('projects').then(function(projects) {
          return projects.data;
        });
      }

      return projects;
    };

    var getProjectUsers = function(id) {
      if (!projectUsers) {
        projectUsers = HttpService.get('projects' + '/' + id + '/' + 'users').then(function(project) {
          return project.data;
        });
      }

      return projectUsers;
    };

    var getProject = function(id) {
      if (!project) {
        project = HttpService.get('projects' + '/' + id, {'include[]': ['tests']}).then(function(project) {
          return project.data;
        });
      }

      return project;
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

    var addTestToProject = function(id, data) {
      return HttpService.post('projects' + '/' + id + '/' + 'tests', data).then(function(test) {
        return test.data;
      });
    };

    return {
      getProjects: getProjects,
      getProject: getProject,
      createProject: createProject,
      addUserToProject: addUserToProject,
      getProjectUsers: getProjectUsers,
      addTestToProject: addTestToProject
    };
  }];
});
