'use strict';

define(function() {

  return [function() {
    this.apiUrl = '';
    this.type = 'rest';

    this.$get = ['httpi', '$q', function(httpi, $q) {
      var type = this.type, apiUrl = this.apiUrl, resource;

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
        if (typeof cache === 'undefined') {
          cache = true;
        }

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
        return resource.post({data: data}).then(handleSuccess, handleError);
      };

      var put = function(data) {
        return resource.put({data: data}).then(handleSuccess, handleError);
      };

      var remove = function(data) {
        return resource.delete({data: data}).then(handleSuccess, handleError);
      };

      var head = function(data) {
        return resource.head({data: data}).then(handleSuccess, handleError);
      };

      var jsonp = function(data) {
        return resource.jsonp({data: data}).then(handleSuccess, handleError);
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
        var statusText = response.statusText,
            status = response.status,
            error = {status: status, statusText: statusText};

        if (response.data && response.data.error) {
          error.error = response.data.error;

          return( $q.reject(error) );
        }

        return($q.reject(response));
      };

      return {
        apiUrl: apiUrl,
        type: type,
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
