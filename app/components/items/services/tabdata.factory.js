'use strict';

define(function() {
  return [function(){

    var tabs = {};

    tabs.display = {
      model: {},
      form: {},
      schema: {
        type: "object",
        properties: {
          name: { type: "string", minLength: 2, title: "Name", description: "Name or alias" },
          title: {
            type: "string",
            enum: ['dr','jr','sir','mrs','mr','NaN','dj']
          }
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
