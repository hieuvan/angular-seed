'use strict';

define(function(require) {
  return ['HttpService', function(HttpService) {

    var getUsers = function() {
      return HttpService.get('users').then(function(users) {
        return users.data;
      });
    };

    var getUser = function(id) {
      return HttpService.get('users' + '/' + id).then(function(user) {
        return user.data;
      });
    };

    var createUser = function(data) {
      return HttpService.post('users', data)
    };

    var getUserProjects = function(id) {
      return HttpService.get('users' + '/' + id + '/' + 'projects').then(function(projects) {
        return projects.data;
      });
    };

    return {
      getUsers: getUsers,
      getUser: getUser,
      createUser: createUser,
      getUserProjects: getUserProjects
    };
  }];
});
