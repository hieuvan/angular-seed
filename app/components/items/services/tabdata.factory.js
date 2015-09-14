'use strict';

define(function(require) {
  require('shared/helpers/string');

  var RadioButtonItem = require('shared/libs/sf-form/radiobuttonitem');

  return [function(){

    var calculator = new RadioButtonItem('calculator'),
        timer = new RadioButtonItem('timer'),
        radiobuttonProperty = {
          type: 'string',
          enum: ['select', 'deselect']
        };

    var tabs = {};

    tabs.display = {
      model: {},
      form: [{
        type: 'fieldset',
        items: [calculator, timer]
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
      model: {},
      form: {},
      schema: {
        type: 'object',
        properties: {

        }
      }
    };

    tabs.language = {
      model: {},
      form: {},
      schema: {
        type: 'object',
        properties: {

        }
      }
    };

    return tabs;
  }];
});
