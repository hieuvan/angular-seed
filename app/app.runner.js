'use strict';

define(function() {
  return ['$rootScope', '$state', '$stateParams',
  function($rootScope, $state, $stateParams) {

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    $rootScope.$on('$stateChangeSuccess', function() {
      $rootScope.stateLoading = false;
    });

    $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from) {
      $rootScope.previousState = from.name || '/';
      $rootScope.currentState = to.name;
    });

    $rootScope.$on('$stateChangeError',
    function(event, toState, toParams, fromState, fromParams, error){
      return $state.go('error', {error: error});
    });
  }];
});
