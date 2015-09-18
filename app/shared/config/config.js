'use strict';

define(function() {
  var resource = {
    rest: {
      url: 'http://api.local-newbuilder/v1/'
    },
    sharepoint: {
      url: '../WebServices/TestFormsService.svc/'
    }
  };

  var defaultUrl = window.location.hash.substr(1) || '/';

  return {
    defaultUrl: defaultUrl,
    formTitle: defaultUrl.substr(1) || '',
    resourceType: 'rest',
    resource: function() {
      return resource[this.resourceType];
    }
  };

});
