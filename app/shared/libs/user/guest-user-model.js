'use strict';

define(function(require) {
  var UserModel = require('shared/libs/user/user-model');

  var GuestUserModel = function() {
    UserModel.call(this, {
      username: 'guest',
      email: '',
      family_name: '',
      given_name: '',
      name: ''
    });
  };

  GuestUserModel.prototype = Object.create(UserModel.prototype);

  var prototype = GuestUserModel.prototype;

  return GuestUserModel;
});
