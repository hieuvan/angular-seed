'use strict';

define(function(require) {

  return ['HttpService', '$resource', 'ItemModel', 'TestModel', 'FormModel', 'UserModel', 'ProjectModel', 'ProjectCollection', 'FormCollection', 'ItemCollection',
    function(HttpService, $resource, ItemModel, TestModel, FormModel, UserModel, ProjectModel, ProjectCollection, FormCollection, ItemCollection) {

    var getProjects = function() {
      return $resource.url('projects').get().then(function(projects) {
        return new ProjectCollection(projects.data);
      });
    };

    var getProject = function(projectId) {
      var params = {projectId: projectId},
          resource = $resource.url('projects/:projectId?include[]=tests');

      return resource.get(params).then(function(project) {
        return new ProjectModel(project.data, { tests: TestModel });
      });
    };

    var getProjectUsers = function(projectId) {
      var params = {projectId: projectId},
          resource = $resource.url('projects/:projectId/users');

      return resource.get(params).then(function(project) {
        return new ProjectModel(project.data, { users: UserModel });
      });
    };

    var createProject = function(data) {
      var resource = $resource.url('projects');

      return resource.post(data).then(function(project) {
        return project.data;
      });
    };

    var addUserToProject = function(id, data) {
      return HttpService.post('projects' + '/' + id + '/' + 'users', data).then(function(user) {
        return new UserModel(user.data);
      });
    };

    var addTestToProject = function(id, data) {
      return HttpService.post('projects' + '/' + id + '/' + 'tests', data).then(function(test) {
        return new TestModel(test.data);
      });
    };

    var getProjectTest = function(projectId, testId) {
      var params = {projectId: projectId, testId: testId},
          resource = $resource.url('projects/:projectId/tests/:testId/forms');

      return resource.get(params).then(function(test) {
        return new TestModel(test.data);
      });
    };

    var addFormToTest = function(projectId, testId, data) {
      var url = 'projects' + '/' + projectId + '/' + 'tests' + '/' + testId + '/forms';

      return HttpService.post(url, data).then(function(form) {
        return new FormModel(form.data);
      });
    };


    return {
      getProjects: getProjects,
      getProject: getProject,
      getProjectTest: getProjectTest,
      getProjectUsers: getProjectUsers,
      createProject: createProject,
      addUserToProject: addUserToProject,
      addTestToProject: addTestToProject,
      addFormToTest: addFormToTest
    };
  }];
});
