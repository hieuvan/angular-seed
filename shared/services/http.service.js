'use strict';

define(function(require) {
  return ['$http', '$q', 'constant', function($http, $q, constant) {

    var csrf;

    /**
     * Perform a get request
     *
     * @param string Url to post to
     * @param object data Data to send to server
     *
     * @return object Promise with resolved data
     */
    var get = function(url, data) {
      var data = data || {},
          deferred = $q.defer();

      return $http.get(getUrl(url), { params: data, cache: true })
        .then(handleSuccess, handleError);
    };

    /**
     * Perform a post request
     *
     * @param string Url to post to
     * @param object data Data to send to server
     *
     * @return object Promise with resolved data
     * @todo Check why errors are not returning from server correctly
     */
    var post = function(url, data) {
      var data = data || {};

      //return getPostConfig().then(function(config) {
         return $http.post(getUrl(url), data)
          .then(handleSuccess, handleError);
      //});
    };

    /**
     * Handle Http request success
     *
     * @param response
     */
    var handleSuccess = function(response) {
      return response.data;
    };

    /**
     * Handle Http errors
     *
     * @param object response Response from server
     */
    var handleError = function(response) {
      if (_.isObject(response.data) && _.isObject(response.data.error)) {
        console.debug(response.data.error);
        return( $q.reject(response.data.error) );
      }

      return($q.reject({message: response.statusText}));
    };

    /**
     * Get Post headers
     *
     * @return object Header
     */
    var getPostConfig = function() {
      return getCsrf().then(function(csrf) {
        return { headers : { 'X-XSRF-TOKEN' : csrf } };
      });
    };

    /**
     * Get CSRF token from the api
     *
     * @return string csrf
     */
    var getCsrf = function() {
      if (!csrf) {
        csrf = get('csrf').then(function(response) {
          return response.data;
        });
      }

      return csrf;
    };

    /**
     * Get the full url of the api
     *
     * @param string url
     */
    var getUrl = function(url) {
      return constant.apiUrl + url;
    };

    return {
      get: get,
      post: post
    };
  }];
});
