'use strict';

define(function(require) {
  return ['HttpService', 'UserCollection', function(HttpService, UserCollection) {

    var getUsers = function() {
      return HttpService.get('users').then(function(users) {
        return new UserCollection(users.data);
      });
    };

    var getUser = function(id) {
      return HttpService.get('users' + '/' + id, {'include[]': ['projects']}).then(function(user) {
        return user.data;
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
