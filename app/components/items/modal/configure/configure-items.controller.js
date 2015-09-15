'use strict';

define(function(require) {

  require('shared/helpers/string');

  var _ = require('underscore'),
      RadioButtonItem = require('shared/libs/sf-form/radiobuttonitem');

  return ['$modalInstance', 'node', 'ngToast', function($modalInstance, node, ngToast) {
    var vm = this, item = node.$modelValue, tabs = {};

    vm.title = item.uid;
    vm.config = {};

    /**
     * Get the radio button property
     *
     * @param type
     * @return {object}
     */
    var radiobuttonProperty = function(type) {
      var config = item.config();

      var configSelected = !_.isUndefined(config) && _.contains(config.flatten(), type);

      var value = configSelected ? 'select' : 'deselect';

      return {
        type: 'string',
        default: value,
        enum: ['select', 'deselect']
      };
    };

    /**
     * Form Items on display tab
     */
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
          calculator: radiobuttonProperty('calculator'),
          timer: radiobuttonProperty('timer')
        }
      }
    };

    /**
     * Form Items on navigation tab
     */
    tabs.navigation = {
      form: {},
      schema: {
        type: 'object',
        properties: {

        }
      }
    };

    /**
     * Form Items on language tab
     */
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
      //console.log(item.flatten());
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
