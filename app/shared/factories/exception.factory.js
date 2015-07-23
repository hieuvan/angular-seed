'use strict';

define(function(require) {
  return ['$exceptionHandler', function($exceptionHandler) {
    // handle the exceptions here
    // may be a nice page in the application
    return function(exception, cause) {
      exception.message += ' (caused by "' + cause + '")';
      throw exception;
    };
  }];
});
