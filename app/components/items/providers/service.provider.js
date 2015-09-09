'use strict';

define(function(require) {
  var restService = require('components/items/services/rest.service'),
      sharepointService = require('components/items/services/sharepoint.service');

  return [function() {

    this.$get = ['$injector', '$resource', function($injector, $resource) {

      var getService = function() {
        switch ($resource.type) {
          case 'sharepoint':
            return sharepointService;
          default:
            return restService;
        };
      };

      return $injector.invoke(getService());
    }];
  }];
});
