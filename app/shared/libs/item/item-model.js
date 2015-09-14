'use strict';

define(function(require) {
  var model = require('shared/libs/object/object-model'),
      ConfigCollection = require('shared/libs/config/config-collection'),
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
    this._config = new ConfigCollection;

    model.call(this, data);
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
  };

  /**
   * Number of child item has
   *
   * @return {int}
   */
  prototype.childCount = function() {
    return this.get('items').count();
  };

  /**
   * Check if item has child
   *
   * @return {boolean}
   */
  prototype.hasChild = function() {
    var items = this.get('items');

    return items ? ! items.isEmpty() : false;
  };

  /**
   * Get glyphicon class
   *
   * @return string icon
   */
  prototype.getIcon = function() {
    return attributes[this._data.type].icon;
  };

  /**
   * Get configuration collection
   *
   * @return {object}
   */
  prototype.getConfig = function() {
    console.log(this._config);
    return [];
    return {
      calculator: {
        icon: 'wrench'
      },
      timer: {
        icon: 'plus'
      }
    };
  };

  return ItemModel;
});
