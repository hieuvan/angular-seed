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

    var getProjectUsers = function(id) {
      return HttpService.get('projects' + '/' + id + '/' + 'users').then(function(project) {
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

    var addTestToProject = function(id, data) {
      return HttpService.post('projects' + '/' + id + '/' + 'tests', data).then(function(test) {
        return test.data;
      });
    };

    var getProjectTest = function(projectId, testId) {
      var url = 'projects' + '/' + projectId + '/' + 'tests' + '/' + testId + '/forms';

      return HttpService.get(url).then(function(test) {
        return test.data;
      });
    };

    var addFormToTest = function(projectId, testId, data) {
      var url = 'projects' + '/' + projectId + '/' + 'tests' + '/' + testId + '/forms';

      return HttpService.post(url, data).then(function(test) {
        return test.data;
      });
    };

    var getProjectTestForm = function(projectId, testId, formId) {
      var url = 'projects' + '/' + projectId + '/' + 'tests' + '/' + testId + '/forms' + '/' + formId;

      return HttpService.get(url).then(function(form) {
        return form.data;
      });
    };

    var searchItem = function(data) {

      return HttpService.get('items?_q=' + data).then(function(items) {
        return items.data;
      });
    };

    return {
      getProjects: getProjects,
      getProject: getProject,
      getProjectTest: getProjectTest,
      getProjectUsers: getProjectUsers,
      getProjectTestForm: getProjectTestForm,
      createProject: createProject,
      addUserToProject: addUserToProject,
      addTestToProject: addTestToProject,
      addFormToTest: addFormToTest,
      searchItem: searchItem
    };
  }];
});
