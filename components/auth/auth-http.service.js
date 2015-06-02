'use strict';

define(function(require) {
  var User = require('shared/libs/user/user-model');

  return ['$q', function($q) {

    var authenticate = function(username, password) {
      var deferred = $q.defer();

      var data = {
        user: new User({
          username: '',
          firstname: '',
          lastname: ''
        })
      };

      deferred.resolve(data);

      return deferred.promise;
    };

    return {
      authenticate: authenticate
    };
  }];
});
