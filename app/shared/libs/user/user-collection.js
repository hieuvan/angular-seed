'use strict';

define(function(require) {
  var UserModel = require('shared/libs/user/user-model'),
      collection = require('shared/libs/object/object-collection');

  var UserCollection = function(data) {
    this._className = 'UserCollection';

    collection.call(this, UserModel, data);
  };

  UserCollection.prototype = Object.create(collection.prototype);

  var prototype = UserCollection.prototype;

  return UserCollection;
});
