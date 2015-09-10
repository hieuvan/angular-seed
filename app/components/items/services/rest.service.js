'use strict';

define(function(require) {

  return ['$resource', 'FormModel', 'ItemCollection',
    function($resource, FormModel, ItemCollection) {

    var getTestFormByTitle = function(formId) {
      var params = {formId: formId},
          resource = $resource.url('forms/:formId/items');

      return resource.get(params).then(function(form) {
        return new FormModel(form.data);
      });
    };

    var searchItem = function(data) {
      var params = {q : data.query, formId: data.title},
          resource = $resource.url('items?_q=:q&form_id=:formId');

      return resource.get(params, false).then(function(items) {
        return new ItemCollection(items.data);
      });
    };

    var addItemToForm = function(items, formId) {
      var params = {
        formId: formId,
        items: items
      };

      var resource = $resource.url('forms/:formId/items');

      return resource.put(params).then(function(items) {
        return new ItemCollection(items.data);
      });
    };

    var removeFormItem = function(items, formId) {
      var params = {
        formId: formId,
        items: items
      };

      var resource = $resource.url('forms/:formId/items');

      return resource.delete(params).then(function(items) {
        return items.data;
      });
    };

    return {
      getTestFormByTitle: getTestFormByTitle,
      searchItem: searchItem,
      addItemToForm: addItemToForm,
      removeFormItem: removeFormItem
    };
  }];
});
