'use strict';

define(function(require) {
  var GuestUser = require('shared/libs/user/guest-user-model'),
      User = require('shared/libs/user/user-model');

  return ['$cookieStore', 'HttpService', function($cookies, HttpService) {
    var currentUser;

    var login = function(user) {
      if (!authorizedUser(user)) {
        return false;
      }

      $cookies.put('user', user.get());
      currentUser = user;
      return true;
    };

    var logout = function() {
      $cookies.remove('user');
      currentUser = new GuestUser;
    };

    var authenticate = function(formdata) {
      // authorizedate the form data here
      return HttpService.post('login', formdata)
        .then(handleLoginSuccess, handleLoginFailure);
    };

    var handleLoginSuccess = function(user) {
      if (_.isObject(user)) {
        currentUser = User({
          email: user.data.email,
          family_name: user.data.family_name,
          given_name: user.data.given_name,
          name: user.data.name
        });
        return currentUser;
      }
      return false;
    };

    var handleLoginFailure = function() {
        // handle error
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
      authenticate: authenticate,
      isLoggedIn: isLoggedIn
    };
  }];
});
