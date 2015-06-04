'use strict';

define(function(require) {
  return ['$rootScope', '$state', '$stateParams', 'AuthService',
  function($rootScope, $state, $stateParams, AuthService) {

    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;

    $rootScope.previousState;
    $rootScope.currentState;

    $rootScope.$on('$stateChangeStart', function (e, toState) {
      if (toState.data.requireLogin && !AuthService.isAuthenticated()) {
        e.preventDefault();
        $state.go('login');
      }

      if (toState.name == 'login' && AuthService.isAuthenticated()) {
        e.preventDefault();
        $state.go('root.projects.list');
      }
    });

    $rootScope.$on('$stateChangeSuccess', function(ev, to, toParams, from, fromParams) {
      $rootScope.previousState = from.name || 'root.projects.list';
      $rootScope.currentState = to.name;
    });

    // @TODO: send to error page
    $rootScope.$on('$stateChangeError',
    function(event, toState, toParams, fromState, fromParams, error){
      console.log('There was a error => ' + error);
    });

  }];
});
