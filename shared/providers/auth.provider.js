'use strict';

define(function(require) {
  var User = require('shared/libs/user/user-model');

  return [function() {
    var self = this;

    this.loginUrl = 'login';

    this.$get = ['$cookieStore', 'HttpService', '$q', function($cookies, HttpService, $q) {

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
        var payload = getPayload();

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
        if (!getToken()) return false;

        var payload = getPayload();

        if (!payload) return false;

        return isTokenExpired(payload.exp);
      };

      /**
       * Check if token is expired
       * if expired also delete it
       *
       * @return boolean
       */
      var isTokenExpired = function(exp) {
        if (!exp) return true; // no expiry is set in the token

        if (Math.round(new Date().getTime() / 1000) <= exp) return true;

        // if token expired, remove it
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

      /**
       * Decode the token and get the Json object associated to it
       * If not token provided will get the token from cookie
       *
       * @param string token Optional.
       * @return string || boolean Token or false
       */
      var getPayload = function(token) {
        token = token || getToken();

        if (token && token.split('.').length === 3) {
          var base64Url = token.split('.')[1];
          var base64 = base64Url.replace('-', '+').replace('_', '/');

          return JSON.parse(decodeURIComponent(escape(window.atob(base64))));
        }

        return false;
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
