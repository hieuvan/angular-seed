'use strict';

define(function(require) {
  var resource = {
    rest: {
      url: 'http://api.local-newbuilder/v1/'
    },
    sharepoint: {
      url: '../WebServices/TestFormsService.svc/'
    }
  };

  return {
    defaultUrl: '/',
    resourceType: 'rest',
    resource: function() {
      return resource[this.resourceType];
    }
  };

});
