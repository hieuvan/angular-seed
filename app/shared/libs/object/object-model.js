'use strict';

define(function(require) {
  var Collection = require('shared/libs/object/object-collection'),
      schema = require('shared/libs/object/object-schema');

  var ObjectModel = function(data, includes) {
    this._schema = this._schema || new schema;

    data = this._processIncludes(data, includes);

    if (_.isFunction(this._processData)) {
      data = this._processData(data);
    }

    this._data = data || {};
    this._schema.validateData(this._data);
  },

  prototype = ObjectModel.prototype;

  prototype.get = function(key) {
    if (_.isUndefined(key)) return this._data;

    this._schema.validateKey(key);

    return this._data[key];
  };

  /**
   * Get flat array representation of model
   * Flattens any Collection that it has recursively
   *
   * @return {object}
   */
  prototype.flatten = function() {
    var data = {};

    _.each(this._data, function(value, key) {

      data[key] = value._className === 'ObjectCollection'
                  ? value.flatten()
                  : value;
    });

    return data;
  };

  prototype.has = function(key) {
    return this._data.hasOwnProperty(key);
  };

  prototype.isType = function(className) {
    return this.toString() == className;
  };

  prototype.set = function(key, value) {
    this._schema.validateKey(key);
    this._validateParams(key, value);

    this._data[key] = value;

    return this;
  };

  prototype.update = function(key, value) {
    this._schema.validateKey(key);
    this._validateParams(key, value);

    if (_.isArray(value) && _.isArray(this._data[key])) {
      this._data[key].push(value);
    }

    else if (_.isObject(value)) {
      this._data[key] = _.extend({}, this._data[key], value);
    }

    else if (_.isString(value)) {
      this._data[key] = value;
    }

    return this;
  };

  prototype.toString = function() {
    return this._schema.className();
  };

  prototype._validateParams = function(key, value) {
    this._schema.validateKey(key);

    if (_.isUndefined(value)) {
      throw new Error('Second parameter [value] is missing in your function call.');
    }

    if (this._schema.isPrivate(key)) {
      throw new Error(key + ' is a private property and cannot be updated.');
    }

    this._schema.validateType(key, value);
  };

  /**
   * Include collection to the model if specified
   *
   * @param array data
   * @param object includes
   */
  prototype._processIncludes = function(data, includes) {
    var self = this;

    if (_.isUndefined(includes)) return data;

    for (var i in includes) {
      var toInclude = data[i], model = includes[i];

      if (_.isUndefined(toInclude)) continue;

      // recursively process each collection
      for (var j in toInclude) {
        toInclude[j] = self._processIncludes(toInclude[j], includes);
      }

      data[i] = new Collection(model, toInclude)
    }

    return data;
  };

  return ObjectModel;
});
