'use strict';

define(function(require) {

  return ['$resource', 'FormModel', 'FormCollection', 'ItemCollection',
    function($resource, FormModel, FormCollection, ItemCollection) {

    var getProjectTestForm = function(projectId, testId, formId) {
      var params = {projectId: projectId, testId: testId, formId: formId},
          resource = $resource.url('forms/:formId/items');

      return resource.get(params).then(function(form) {
        return new FormModel(form.data);
      });
    };

    var searchItem = function(data) {
      var params = {q : data.query, formId: data.formId},
          resource = $resource.url('items?_q=:q&form_id=:formId');

      return resource.get(params, false).then(function(items) {
        return new ItemCollection(items.data);
      });
    };

    var addItemToForm = function(formId, items) {
      var params = {
        formId: formId,
        items: items
      };

      var resource = $resource.url('forms/:formId/items');

      return resource.put(params).then(function(items) {
        return new ItemCollection(items.data);
      });
    };

    var removeFormItem = function(projectId, formId, testId, items) {
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
      getProjectTestForm: getProjectTestForm,
      searchItem: searchItem,
      addItemToForm: addItemToForm,
      removeFormItem: removeFormItem
    };
  }];
});
