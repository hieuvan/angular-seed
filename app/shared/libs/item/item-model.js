'use strict';

define(function(require) {
  var _ = require('underscore'),
      model = require('shared/libs/object/object-model'),
      ConfigFactory = require('shared/libs/config/config-factory'),
      ObjectCollection = require('shared/libs/object/object-collection'),
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

    data.title = data.title || 'Untitled';
    data.items = data.items || [];

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

    if (items instanceof ObjectCollection) {
      return ! items.isEmpty();
    }

    return false;
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
   * @return {object} ConfigCollection
   */
  prototype.config = function() {
    return this.get('config');
  };

  /**
   * Set configuration of item
   * Overrides existing configuration
   *
   * @param {array|string} configuration
   * @return {undefined}
   */
  prototype.setConfig = function(configuration) {
    var config = ConfigFactory.get(configuration);

    var collection = new ConfigCollection();
    collection.add(config);

    this.set('config', collection);
  };

  return ItemModel;
});
