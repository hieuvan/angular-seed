'use strict';

define(function(require) {

  var _ = require('underscore');

  return [function() {

    this.defaults = {
      allowedMethods: ['GET', 'POST'], // ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']
      stringify: false, // true || false
      withCredentials: false, // true || false
      headers: {},
      contentType: 'application/json; charset=utf-8'
    };

    /**
     * Provider Constructor
     * Provide the default config for post requests
     */
    this.$get = ['$q', 'localStorageService', function($q, localStorageService) {
      var self = this;

      return {

        /**
        * Get the headers for request methods that are not allowed
        *
        * @param object Http config provider
        * @return object Updated config provider
        */
        request: function(config) {

          if(!_.contains(self.defaults.allowedMethods, config.method)) {
            return config;
          }

          config.withCredentials = self.defaults.withCredentials;

          if (!_.isEmpty(self.defaults.headers)) {
            config.headers = self.defaults.headers;
          }

          config.headers['Content-Type'] = self.defaults.contentType;

          config.headers['token'] = localStorageService.get('_token');

          if (self.defaults.stringify) {
            config.transformRequest = stringify;
          }

          return config;
        },

        /**
         * Handle global request error
         *
         * @param rejection
         * @return {undefined}
         */
        requestError: function(rejection) {
          // STUB
          return rejection;
        },

        /**
         * Intercept the response
         *
         * @param response
         * @return object Response
         */
        response: function(response) {
          // STUB
          return response;
        },

        /**
         * Handle the global response error
         *
         * @param rejection
         * @return {undefined}
         */
        responseError: function(rejection) {
          // STUB
          return $q.reject(rejection);
        }
      };
    }];

    /**
     * Stringify the url with the correct data
     *
     * @param obj data to send to server
     * @return string Stringified url
     */
    var stringify = function(obj) {
      var str = [];

      str = _.map(obj, function(key, value) {
        return encodeURIComponent(value) + '=' + encodeURIComponent(key);
      });

      return str.join('&');
    };
  }];
});
