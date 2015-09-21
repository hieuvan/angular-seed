'use strict';

define(function() {

  return ['$resource', 'FormModel', 'ItemModel', 'ConfigFactory', 'ItemCollection',
    function($resource, FormModel, ItemModel, ConfigFactory, ItemCollection) {

    /**
     * Get Test from by form title
     *
     * @param {string} title
     * @return {promise}
     */
    var getTestFormByTitle = function(title) {
      var params = {title: title},
          resource = $resource.url('GetTestFormByTitle');

      return resource.post(params).then(function(form) {
        return new FormModel(form.data, { items : ItemModel, config: ConfigFactory });
      });
    };

    /**
     * Fuzzy search item
     *
     * @param {object} data
     * @return {promise}
     */
    var searchItem = function(data) {
      var params = {q : data.query, formId: data.title},
          resource = $resource.url('items?_q=:q&form_id=:formId');

      return resource.get(params, false).then(function(items) {
        return new ItemCollection(items.data);
      });
    };

    /**
     * save the form data
     *
     * @param data
     * @return {object} $http
     */
    var save = function(title, data) {
      var params = { data: data },
          resource = $resource.url('SaveTestForm');

      return resource.put(params);
    };

    return {
      getTestFormByTitle: getTestFormByTitle,
      searchItem: searchItem,
      save: save
    };
  }];
});
