'use strict';

define(function(require) {
  var User = require('shared/libs/user/user-model');

  return [function() {
    var self = this;

    this.loginUrl = 'login';

    this.$get = ['$cookieStore', 'HttpService', '$q', function($cookies, HttpService, $q) {

      var user, tokenName = '_token';

      var login = function(formdata) {

        return HttpService.post(self.loginUrl, formdata)
          .then(function(response) {
            var token = response.data;

            setToken(token);

            return getUser();
          });
      };

      var logout = function() {
        removeToken();
        user = null;
      };

      var getUser = function() {
        var payload = getPayload();

        return new User({
          id: payload.id,
          name: payload.name
        });
      };

      var isAuthenticated = function() {
        if (!getToken()) return false;

        var payload = getPayload();

        if (!payload) return false;

        return isTokenExpired(payload.exp);
      };

      var isTokenExpired = function(exp) {
        if (!exp) return true; // no expiry is set in the token

        return Math.round(new Date().getTime() / 1000) <= exp;
      };

      var setToken = function(token) {
        $cookies.put(tokenName, token);
      };

      var removeToken = function() {
        $cookies.remove(tokenName);
      };

      var getToken = function() {
        return $cookies.get(tokenName);
      };

      var getPayload = function(token) {
        token = token || getToken();

        if (token && token.split('.').length === 3) {
          var base64Url = token.split('.')[1];
          var base64 = base64Url.replace('-', '+').replace('_', '/');

          return JSON.parse(decodeURIComponent(escape(window.atob(base64))));
        }

        return false;
      };

      return {
        getUser: getUser,
        login: login,
        logout: logout,
        isAuthenticated: isAuthenticated
      };
    }];

  }];
});
