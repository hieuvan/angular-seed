'use strict';

define(function(require) {
  var model = require('shared/libs/object/object-model'),
      ConfigCollection = require('shared/libs/config/config-collection'),
      ConfigFactory = require('shared/libs/config/config-factory'),
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

    this._config = setConfiguration(data.config);

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
    return this._config;
  };

  /**
   * Set the configuration of items
   *
   * @param configuration
   * @return {object} ConfigCollection
   */
  var setConfiguration = function(configuration) {
    var collection = new ConfigCollection;

    if (!configuration) return collection;

    for (var i in configuration) {
      collection.add(ConfigFactory.get(configuration[i]));
    }

    return collection;
  };

  return ItemModel;
});
