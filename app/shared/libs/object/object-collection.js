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
    this._model = objectModel;

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

  prototype.flatten = function() {
    var flattened = [];

    _.each(this.getAll(), function(model) {
      flattened.push(model.get());
    });

    return flattened;
  };

  prototype.pluck = function(properties) {
    var self = this,
        properties = _.isArray(properties) ? properties : [properties];

    return _.map(this._collection, function(model){
      var result = {};

      _.each(properties, function(property) {
        result[property] = model.get(property);
      });

      return result;
    });
  };

  prototype.removeById = function(id) {
    this._collection = _.filter(this._collection, function(model) {
      return model.get('id') != id
    });

    return this;
  };

  /**
   * Reduce the items of the given collection from the collection
   *
   * @param collection Collection to intersect with
   *
   * @return ObjectCollection
   */
  prototype.intersect = function(collection, key) {
    if (_.isUndefined(key)) key = 'id';

    var self = this;

    collection.each(function(model) {
      if (!model.has(key)) {
        throw new Error(model.toString() + ' does not have property ' + key);
      }

      self.removeById(model.get(key));
    });

    return self;
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

  prototype.Andadd = function(key, value) {
    return this.invoke('add', key, value);
  };

  prototype.andRemove = function() {
    return this.invoke('remove', key, value);
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

  prototype.each = function(callback) {
    if (!_.isFunction(callback)) {
      throw new Error(
        'Argument passed to ' + this._className + ' must be a valid callback function.'
      );
    }

    var self = this;

    _.each(self.getAll(), function(model) {
      callback.call(self, model);
    });
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
