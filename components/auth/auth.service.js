'use strict';

define(function(require) {
  var GuestUser = require('shared/libs/user/guest-user-model'),
      User = require('shared/libs/user/user-model');

  return ['$cookieStore', 'HttpService', '$q', function($cookies, HttpService, $q) {
    var currentUser;

    var login = function(formdata) {
      var deferred = $q.defer();

      HttpService.post('login', formdata).then(function(user) {
        user = new User({
          email: user.data.email,
          family_name: user.data.family_name,
          given_name: user.data.given_name,
          name: user.data.name
        });

        $cookies.put('user', user.get());
        deferred.resolve(user);
      });

      var $promise = deferred.promise;

      currentUser = $promise;

      return $promise;
    };

    var logout = function() {
      $cookies.remove('user');
      currentUser = new GuestUser;
    };

    var isLoggedIn = function() {
      var userData = $cookies.get('user');
      currentUser = userData ? new User(userData) : new GuestUser;

      return authorizedUser(currentUser);
    };

    var getUser = function() {
      return currentUser;
    };

    var authorizedUser = function(user) {
      return user && !_.isEqual(user.get('email'), 'guest');
      return true;
    };

    return {
      getUser: getUser,
      login: login,
      logout: logout,
      isLoggedIn: isLoggedIn
    };
  }];
});
