'use strict';

define(function() {
  return [function() {
    this.apiUrl = '';

    this.$get = ['httpi', '$q', function(httpi, $q) {
      var apiUrl = this.apiUrl, resource;

      /**
       * Set the resource url
       *
       * @param String url Url to query
       *
       * @returns HttpiResource
       */
      var url = function(url) {
        resource = httpi.resource(apiUrl + url);

        return this;
      };

      /**
       * Perform a get request
       *
       * @param object data Data to send to server
       * @param cache enable cahche or not
       *
       * @return object Promise with resolved data
       */
      var get = function(params, cache) {
        if (_.isUndefined(cache)) cache = true;

        return resource.get({ params: params, cache: cache })
          .then(handleSuccess, handleError);
      };

      /**
       * Perform a post request
       *
       * @param object data Data to send to server
       *
       * @return object Promise with resolved data
       * @todo Check why errors are not returning from server correctly
       */
      var post = function(data) {
        return resource.post(data).then(handleSuccess, handleError);
      };

      var put = function(data) {
        return resource.put(data).then(handleSuccess, handleError);
      };

      var remove = function(data) {
        return resource.delete({data: data}).then(handleSuccess, handleError);
      };

      var head = function(data) {
        return resource.head(data).then(handleSuccess, handleError);
      };

      var jsonp = function(data) {
        return resource.jsonp(data).then(handleSuccess, handleError);
      };

      var setKeepTrailingSlash = function(value) {
        return resource.setKeepTrailingSlash(value);
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

      return {
        url: url,
        get: get,
        post: post,
        put: put,
        delete: remove,
        head: head,
        jsonp: jsonp,
        setKeepTrailingSlash: setKeepTrailingSlash
      };
    }];
  }];
});
