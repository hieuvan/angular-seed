'use strict';

define(function(require) {
  var schema = require('shared/libs/object/object-schema');

  var ObjectModel = function(data) {
    this._schema = this._schema || new schema;

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

  prototype.toString = function() {
    return this._schema.className();
  };

  return ObjectModel;
});
