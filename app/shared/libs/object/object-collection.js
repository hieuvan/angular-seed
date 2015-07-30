'use strict';

define(function(require) {

  var ObjectCollection = function(objectModel, data) {
    data = data || [];
    var self = this;

    // TODO: check if objectModel is actually instance of ObjectModel
    //       atm we just check if it is function, which isnt roboust
    if (!_.isFunction(objectModel)) {
      throw new Error('First parameter passed to Object collection must be instance of ObjectModel.');
    }

    this._className = this._className || 'ObjectCollection';

    self._collection = _.chain(data).map(function(eachData) {
      var model = new objectModel(eachData);

      if (_.isFunction(self.iterator)) {
        model = self.iterator(model);
      }

      return model;
    }).compact().value();

    self._result = [];
  },

  prototype = ObjectCollection.prototype;

  prototype.add = function(models) {
    var self = this;
    models = _.isArray(models) ? models : [models];

    _.each(models, function(model) {
      self._collection.push(model);
    });
  };

  prototype.getAll = function() {
    return this._collection;
  };

  prototype.pluck = function(property) {
    return _.map(this._collection, function(model){
      return model.get(property);
    });
  };

  prototype.removeById = function(id) {
    this._collection = _.filter(this._collection, function(model) {return model.get('id') != id});
  };

  /**
   * @TODO: implement this function
   *
   * collection.sortby('property').getAll();
   */
  prototype.sortby = function(property) {
    // this._collection = logic that returns sorted collection
    return this;
  };

  prototype.result = function() {
    return this._result;
  };

  prototype.findByIds = function(ids) {
    ids = ids || [];

    this._result = _.chain(this._collection)
      .filter(function(model) {
        return _.contains(ids, model.get('id'));
      })
      .compact()
      .value();

    return this;
  };

  prototype.andUpdate = function(key, value) {
    return this.invoke('update', key, value);
  };

  prototype.AndSet = function(key, value) {
    return this.invoke('set', key, value);
  };

  prototype.invoke = function(fn) {
    if (!validFunction(this._result[0], fn)) {
      throw new Error(fn + ' is not a valid function available in ' + this._result[0].toString() +'.');
    }

    var result = _.invoke(this._result, fn, arguments[1], arguments[2]);

    return this;
  };

  prototype.findById = function(id) {
    return _.find(this._collection, function(candidate) {
      return candidate.get('id') === id;
    });
  };

  prototype.toString = function() {
    return this._className;
  };

  var validateData = function(data) {

  };

  var validFunction = function(candidate, fn) {
    var valid;

    switch(fn) {
      case 'set':
      case 'update':
        valid = true;
        break;
      case 'get':
        throw new Error('You cannot call update function on get method.');
      default:
        valid = _.isFunction(candidate[fn])
    };

    return valid;
  };

  return ObjectCollection;
});
