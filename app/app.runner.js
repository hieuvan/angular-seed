'use strict';

define(function() {
  return ['$rootScope', '$state', '$stateParams',
  function($rootScope, $state, $stateParams) {

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from) {
      $rootScope.previousState = from.name || '/';
      $rootScope.currentState = to.name;
    });

    // @TODO: send to error page
    $rootScope.$on('$stateChangeError',
    function(event, toState, toParams, fromState, fromParams, error){
      console.log('There was a error => ' + error);
    });
  }];
});
