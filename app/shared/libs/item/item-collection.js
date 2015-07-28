'use strict';

define(function(require) {
  var ItemModel = require('shared/libs/item/item-model'),
      collection = require('shared/libs/object/object-collection');

  var ItemCollection = function(data) {
    this._className = 'ItemCollection';

    collection.call(this, ItemModel, data);
  };

  ItemCollection.prototype = Object.create(collection.prototype);

  var prototype = ItemCollection.prototype;

  return ItemCollection;
});
