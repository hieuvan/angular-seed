'use strict';

define(function(require) {

  require('shared/helpers/string');

  var _ = require('underscore'),
      RadioButtonItem = require('shared/libs/sf-form/radiobuttonitem');

  return ['$modalInstance', 'node', 'ngToast', function($modalInstance, node, ngToast) {
    var vm = this,
        item = node.$modelValue;

    vm.title = item.uid;
    vm.config = {};

    var tabs = {},
        radiobuttonProperty = {
          type: 'string',
          default: 'select',
          enum: ['select', 'deselect']
        };

    tabs.display = {
      form: [{
        type: 'fieldset',
        items: [
          new RadioButtonItem('calculator'),
          new RadioButtonItem('timer')
        ]
      }],
      schema: {
        type: 'object',
        properties: {
          calculator: radiobuttonProperty,
          timer: radiobuttonProperty
        }
      }
    };

    tabs.navigation = {
      form: {},
      schema: {
        type: 'object',
        properties: {

        }
      }
    };

    tabs.language = {
      form: {},
      schema: {
        type: 'object',
        properties: {

        }
      }
    };


    vm.tabs = tabs;

    /**
     * Update item configuration
     *
     * @return {undefined}
     */
    vm.update = function() {
      var configs = selectedConfigs();

      item.setConfig(configs);

      vm.cancel();
      ngToast.success('Configuration is updated.');
    };

    /**
     * close the modal
     *
     * @return {undefined}
     */
    vm.cancel = function() {
      $modalInstance.close();
    };

    /**
     * Get the selected configuration
     *
     * @return {array} Selected config types
     */
    var selectedConfigs = function() {
      return _.filter(_.keys(vm.config), function(type) {
        return vm.config[type] === 'select';
      });
    };
  }];
});
