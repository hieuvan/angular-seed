'use strict';

define(function(require) {
  var model = require('shared/libs/object/object-model'),
      schema = require('shared/libs/item/item-schema');

  var ItemModel = function(data, includes) {
    this._schema = schema;

    model.call(this, data, includes);
  };

  ItemModel.prototype = Object.create(model.prototype);

  var prototype = ItemModel.prototype;

  return ItemModel;
});
