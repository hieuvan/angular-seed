'use strict';

define(function(require) {
  var User = require('shared/libs/user/user-model');

  return [function() {
    var self = this;

    this.loginUrl = 'login';

    this.$get = ['$cookieStore', 'HttpService', '$q', '$jwt',
    function($cookies, HttpService, $q, $jwt) {

      var tokenName = '_token';

      /**
       * Perform http request to the login url and get token
       * if token is recieved its considered that login was successful
       * and token is set to cookie
       *
       * @param formdata User credentials
       * @return User Model
       */
      var login = function(formdata) {

        return HttpService.post(self.loginUrl, formdata)
          .then(function(response) {
            var token = response.data;

            setToken(token);

            return getUser();
          });
      };

      /**
       * Logout the current logged in user
       */
      var logout = function() {
        removeToken();
      };

      /**
       * Get the user associated with the current token
       *
       * @return false || UserModel
       */
      var getUser = function() {
        var payload = $jwt.getPayload(getToken());

        if (!payload) return false;

        return new User({
          id: payload.id,
          name: payload.name
        });
      };

      /**
       * Check if the user is logged in
       * Also checks if the token is expired
       *
       * @return boolean
       */
      var isAuthenticated = function() {
        var token = getToken();

        if (!token) return false;

        if($jwt.isTokenExpired(token)) return true;

        removeToken();
        return false;
      };

      /**
       * Set given token to cookie store
       *
       * @param string token Token to store
       */
      var setToken = function(token) {
        $cookies.put(tokenName, token);
      };

      /**
       * Remove if any token exists
       */
      var removeToken = function() {
        $cookies.remove(tokenName);
      };

      /**
       * Get the current token
       *
       * @return string || null
       */
      var getToken = function() {
        return $cookies.get(tokenName);
      };

      // public methods
      return {
        getUser: getUser,
        login: login,
        logout: logout,
        isAuthenticated: isAuthenticated
      };
    }];

  }];
});
