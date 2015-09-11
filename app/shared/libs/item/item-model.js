'use strict';

define(function(require) {
  var model = require('shared/libs/object/object-model'),
      schema = require('shared/libs/item/item-schema');

  var containers = ['folder', 'cluster'];

  var attributes = {
    'Free Form': {
      icon: 'file-text'
    },
    'Complex Multiple Choice': {
     icon: 'book'
    },
   'Multiple Choice': {
     icon: 'list'
   },
   'folder': {
     icon: 'folder-open'
   },
   'items': {
     icon: 'pencil'
   },
   'cluster': {
     icon: 'folder-close'
   }
  };


  var ItemModel = function(data, includes) {
    this._schema = schema;

    model.call(this, data, includes);
  };

  ItemModel.prototype = Object.create(model.prototype);

  var prototype = ItemModel.prototype;

  /**
   * Check if node is a container
   *
   * @return {boolean}
   */
  prototype.isContainer = function() {
    return _.contains(containers, this._data.type);
  },

  /**
   * Get glyphicon class
   *
   * @return string icon
   */
  prototype.getIcon = function() {
    return attributes[this._data.type].icon;
  }

  return ItemModel;
});
