'use strict';

define(function(require) {

  return ['HttpService', 'TestModel', 'FormModel', 'ProjectModel', 'ProjectCollection',
    function(HttpService, TestModel, FormModel, ProjectModel, ProjectCollection) {

    var getProjects = function() {
      return HttpService.get('projects').then(function(projects) {
          return new ProjectCollection(projects.data);
      });
    };

    var getProject = function(id) {
      return HttpService.get('projects' + '/' + id, {'include[]': ['tests']}).then(function(project) {
        return new ProjectModel(project.data);
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
        return new TestModel(test.data);
      });
    };

    var addFormToTest = function(projectId, testId, data) {
      var url = 'projects' + '/' + projectId + '/' + 'tests' + '/' + testId + '/forms';

      return HttpService.post(url, data).then(function(test) {
        return test.data;
      });
    };

    var getProjectTestForm = function(projectId, testId, formId) {
      var url = 'projects' + '/' + projectId + '/' + 'tests' + '/' + testId + '/forms' + '/' + formId + '/' + 'items';

      return HttpService.get(url, {'include': ['items']}).then(function(form) {
        return new FormModel(form.data);
      });
    };

    var searchItem = function(data) {
      return HttpService.get('items?_q=' + data.query).then(function(items) {
        return items.data;
      });
    };

    var addItemToForm = function(projectId, testId, formId, data) {
      var url = 'projects' + '/' + projectId + '/' + 'tests' + '/' + testId + '/forms' + '/' + formId + '/' + 'items';

      return HttpService.post(url, data).then(function(items) {
        console.log(items);
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
      searchItem: searchItem,
      addItemToForm: addItemToForm
    };
  }];
});
