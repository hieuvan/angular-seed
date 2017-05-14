'use strict';

define(function($Auth) {
  return ['$rootScope', '$state', '$stateParams', '$Auth',
  function($rootScope, $state, $stateParams, $Auth) {

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    $rootScope.hotels = [];

    $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from) {
      $rootScope.previousState = from.name;
      $rootScope.currentState = to.name;
    });

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      var isLogin = toState.name === "login";
      if (isLogin) {
        if (!$Auth.isAuthenticated()) {
          return; // no need to redirect
        } else {
          $state.go('root.home');
          event.preventDefault();
        }
      }

      var shouldLogin = toState.data !== undefined
          && toState.data.authenticate
          && !$Auth.isAuthenticated() ;

      // NOT authenticated - wants any private stuff
      if (shouldLogin) {
        //console.log('her');
        $state.go('login');
        event.preventDefault();
      }
    });

    $rootScope.$on('$stateChangeError',
    function(event, toState, toParams, fromState, fromParams, error){
      return $state.go('error', {error: error});
    });
  }];
});
