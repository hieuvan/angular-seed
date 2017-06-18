'use strict';

define(function(require) {

  return [function() {
    var self = this;

    this.loginUrl = 'loginJwt';

    this.$get = ['$cookieStore', '$http', '$q', '$jwt', '$resource', 'localStorageService', '$rootScope', 'sharedProperties',
    function($cookies, $http, $q, $jwt, $resourceProvider, localStorageService, $rootScope, sharedProperties) {

      var tokenName = '_token';

      /**
       * Perform http request to the login url and get token
       * if token is received its considered that login was successful
       * and token is set to cookie
       *
       * @param formdata User credentials
       * @return User Model
       */
      var login = function(formdata) {
        return $http.post(($resourceProvider.apiUrl + self.loginUrl), formdata)
          .then(function(response) {
              if (response.data.token) {
                var token = response.data.token;
                var payload = $jwt.getPayload(token);
                var id = payload.id;

                setToken(tokenName, token);
                setToken(id + '.' +'firstName', response.data.firstname);
                setToken(id + '.' + 'lastName', response.data.surname);
                //$rootScope.hotels = response.data.hotels;
                sharedProperties.setProperty('hotels', response.data.hotels);

              return getUser(response.data);
              } else {
                return null;
              }
            }, function errorCallback(response) {
              //@todo: show error message
          });
      };

      /**
       * Logout the current logged in user
       */
      var logout = function() {
        return $http.post($resourceProvider.apiUrl + 'logout')
            .then(function(response) {

              removeToken();
              return true;

            }, function errorCallback(response) {
              //@todo: show error message
            });

      };

      /**
       * Get the user associated with the current token
       *
       * @return false || UserModel
       */
      var getUser = function(data) {
        var payload = $jwt.getPayload(getToken(tokenName));
        var firstName = '';
        var surName = '';

        if (!payload) return false;

        if (data) {
          firstName = data.firstname;
          surName = data.surname;
        } else {
          firstName = getToken(payload.id + '.' + 'firstName');
          surName = getToken(payload.id + '.' + 'surName');
        }

        return {
          id: payload.id,
          firstName: firstName,
          surName: surName
        };
      };

      /**
       * Check if the user is logged in
       * Also checks if the token is expired
       *
       * @return boolean
       */
      var isAuthenticated = function() {
        var token = getToken(tokenName);

        if (!token) return false;

        if(!$jwt.isTokenExpired(token)) return true;

        removeToken();
        return false;
      };

      /**
       * Set given token to cookie store
       *
       * @param string token Token to store
       */
      var setToken = function(key, value) {
        //$cookies.put(tokenName, token);
        localStorageService.set(key, value);
      };

      /**
       * Remove if any token exists
       */
      var removeToken = function(key) {
        //$cookies.remove(tokenName);
        if (key) {
          localStorageService.remove(key);
        } else {
          localStorageService.clearAll();
        }
      };

      /**
       * Get the current token
       *
       * @param
       *
       * @return string || null
       */
      var getToken = function(key) {
        //return $cookies.get(tokenName);
        return localStorageService.get(key);
      };

      // public methods
      return {
        getUser: getUser,
        login: login,
        logout: logout,
        isAuthenticated: isAuthenticated,
        removeToken: removeToken
      };
    }];

  }];
});
