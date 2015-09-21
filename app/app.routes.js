'use strict';

define(function() {
  return ['$stateProvider', '$urlRouterProvider', 'config',
  function($stateProvider, $urlRouterProvider, config) {
    var states = [];

    states.push({
      name: 'root',
      abstract: true,
      url: '',
      views: {
        'header': {
          templateUrl: 'components/header/header.html',
          controller: 'HeaderController as vm'
        },
        'footer': {
          templateUrl: 'components/footer/footer.html',
          controller: 'FooterController as vm'
        }
      },
      resolve: {
        config: ['config', function(config) {
          return config;
        }]
      }
    });

    states.push({
      name: 'root.home',
      url: '/',
      data: {
        displayName: '{{ config.siteTitle }}'
      }
    });

    states.push({
      name: 'error',
      params: {error: null},
      views: {
        'content@': {
          controller: 'ErrorController as vm',
          templateUrl: 'components/error/error.html'
        }
      }
    });

    $urlRouterProvider.otherwise(config.defaultUrl);

    angular.forEach(states, function(state) {
       $stateProvider.state(state);
    });
  }];
});

