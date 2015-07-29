'use strict';

define(function(require) {
  var TestModel = require('shared/libs/test/test-model'),
      collection = require('shared/libs/object/object-collection');

  var TestCollection = function(data) {
    this._className = 'TestCollection';

    collection.call(this, TestModel, data);
  };

  TestCollection.prototype = Object.create(collection.prototype);

  var prototype = TestCollection.prototype;

  return TestCollection;
});
