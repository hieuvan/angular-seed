'use strict';

define(function(require) {
  return [function() {

    var allowedMethods = ['GET'];

    /**
     * Provider Constructor
     * Provide the default config for post requests
     */
    this.$get = [function() {

      return {

        /**
        * Get the headers for the not allowed request methods
        *
        * @param object Http config provider
        * @return object Updated config provider
        */
        request: function(config) {
          if(!_.contains(allowedMethods, config.method)) {
            config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            config.transformRequest = stringify;
          }

          return config;
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
        return encodeURIComponent(value) + "=" + encodeURIComponent(key);
      });

      return str.join("&");
    };
  }];
});
