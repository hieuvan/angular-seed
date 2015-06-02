'use strict';

define(function(require) {
  return ['$rootScope', '$timeout', function($rootScope, $timeout) {
    var link = function() {
      $rootScope.title = "Assessment Builder";

      $rootScope.$on('$stateChangeSuccess', function(event, toState) {
        $timeout(function() {
          $rootScope.title = (toState.data && toState.data.displayName)
          ? toState.data.displayName
          : 'Page Title';
        });
      });
    };

    return {
      link: link
    }
  }];
});

