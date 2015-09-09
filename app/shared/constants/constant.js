'use strict';

define(function(require) {
  var resource = {
    rest: {
      url: 'http://api.local-newbuilder/v1/'
    },
    sharepoint: {
      url: '../WebServices/ItemsService.svc/'
    }
  };

  return {
    defaultUrl: '/items',
    resourceType: 'rest',
    resource: function() {
      return resource[this.resourceType];
    }
  };

});
