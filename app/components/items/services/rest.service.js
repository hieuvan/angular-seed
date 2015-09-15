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
      var params = {formId: title},
          resource = $resource.url('forms/:formId/items');

      return resource.get(params).then(function(form) {
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

    return {
      getTestFormByTitle: getTestFormByTitle,
      searchItem: searchItem
    };
  }];
});
