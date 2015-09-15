'use strict';
define(function(require) {
  require('shared/helpers/string');
  var _ = require('underscore');

  var Schema = function() {
    this._className = this._className || 'ObjectModel';
    this._properties = this._properties || [];
  },

  prototype = Schema.prototype;

  prototype.properties = function() {
    return this._properties;
  };

  prototype.className = function() {
    return this._className;
  };

  prototype.validateKey = function(key) {
    if (_.isEmpty(this._property(key))) {
      throw new Error(key + ' is not a valid property in ' + this._className);
    }
  };

  /**
   * TODO: add type check when initializing the object
   */
  prototype.validateData = function(data) {
    var optionalProperties = _.where(this._properties, {required:false});
    var requiredProperties = _(_.pluck(this._properties, 'key')).difference(_.pluck(optionalProperties, 'key'));
    var difference = _(requiredProperties).difference(_.keys(data));
    if (!_.isEmpty(difference)) {
      throw new Error('Object passed to ' + this._className + ' constructor must contain: ' + difference);
    }
  };

  prototype.validateType = function(key, value) {
    var attributeType = this.getType(key),
        givenType = value instanceof Array ? 'array' : typeof value,
        valid = _.isEqual(attributeType, givenType);

    if (attributeType === 'number') {
      valid = !isNaN(parseInt(value));
    }

    if (attributeType.startsWith('_')) {
      attributeType = attributeType.slice(1);
      valid = _.isEqual(value.toString(), attributeType);
    }

    if (!valid) {
      throw new Error('[Value] must be of type ' + attributeType + ' for property ' + key);
    }
  };

  prototype.isPrivate = function(key) {
    return this._property(key).private === true;
  };

  prototype.isRequired = function(key) {
    return this._property(key).required !== false;
  };

  prototype.getType = function(key) {
    var property = this._property(key);

    if (_.isUndefined(property)) {
      throw new Error(key + ' is not a valid key in ' + this._className);
    }

    return property.type;
  };

  prototype._property = function(key) {
    return _.findWhere(this._properties, {key: key});
  };

  return Schema;
});
