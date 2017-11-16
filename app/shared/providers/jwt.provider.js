'use strict';

define(function(require) {
  return [function() {
    this.$get = [function() {

      /**
       * Get JWT header
       *
       * @param object Token
       * @return object JWT header
       */
      var getHeader = function(token) {
        var segments = getSegments(token);

        return parseSegment(segments[0]);
      };

      /**
       * Decode the token and get the Json object associated to it
       * If not token provided will get the token from cookie
       *
       * @param string token Optional.
       * @return string || boolean Token or false
       */
      var getPayload = function(token) {
        var segments = getSegments(token);

        return parseSegment(segments[1]);
      };

      /**
       * Get signature
       *
       * @param object Token
       * @return string JWT Signature
       */
      var getSignature = function(token) {
        var segments = getSegments(token);

        return base64urlUnscape(segments[2]);
      };

      /**
       * Check if token is expired
       * if expired also delete it
       *
       * @return boolean
       */
      var isTokenExpired = function(token) {
        var exp = getPayload(token).exp;

        if (!exp) {
            return false; // no expiry is set in the token
        }

        return Math.round(new Date().getTime() / 1000) > exp;
      };

      /**
       * Parse Token segments to json
       *
       * @param string Token segment
       * @return object Parsed token segment
       */
      var parseSegment = function(segment) {
        var base64 = base64urlUnscape(segment);

        return JSON.parse(base64urlDecode(base64));
      };

      /**
       * Seperate token segments
       *
       * @param token
       * @return array Segments
       */
      var getSegments = function(token) {
        if (!token) {
          throw new Error('Token must be passed.');
        }

        var segments = token.split('.');

        if (segments.length !== 3) {
          throw new Error('Token has not enough or too many segments.');
        }

        return segments;
      };

      /**
       * Decode base64 url
       *
       * @param str String to decode
       * @return string decoded string
       */
      var base64urlDecode = function(str) {
        return decodeURIComponent(escape(window.atob(str)));
      };

      /**
       * Unescape base64 url
       *
       * @param str string to unescape
       * @return string Escaped string
       */
      var base64urlUnscape = function(str) {
        return str.replace('-', '+').replace('_', '/');
      };

      // public methods
      return {
        getHeader: getHeader,
        getPayload: getPayload,
        getSignature: getSignature,
        isTokenExpired: isTokenExpired
      };
    }];
  }];
});
