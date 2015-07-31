'use strict';

define(function(require) {
  return ['HttpService', 'UserCollection', 'UserModel', 'ProjectModel',
  function(HttpService, UserCollection, UserModel, ProjectModel) {

    var getUsers = function() {
      return HttpService.get('users').then(function(users) {
        return new UserCollection(users.data);
      });
    };

    var getUser = function(id) {
      return HttpService.get('users' + '/' + id, {'include[]': ['projects']}).then(function(user) {
        return new UserModel(user.data, { projects: ProjectModel });
      });
    };

    var createUser = function(data) {
      return HttpService.post('users', data).then(function(user) {
        return user.data;
      });
    };

    var getProjects = function(id) {
      return HttpService.get('users' + '/' + id + '/' + 'projects')
      .then(function(response) {
        return response.data.projects;
      });
    };

    return {
      getUsers: getUsers,
      getUser: getUser,
      createUser: createUser,
      getProjects: getProjects
    };
  }];
});
