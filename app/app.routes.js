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
      url: '/home',
      views: {
        'content@': {
          templateUrl: 'components/home/home.html',
          controller: 'HomeController as vm'
        }
      },
      data: {authenticate: true}
    });
    states.push({
      name: 'root.sites',
      url: '/sites',
      views: {
        'content@': {
          templateUrl: 'components/site-list/site-list.html',
          controller: 'SiteListController as vm'
        }
      },
      data: {authenticate: true}
    });

    states.push({
      name: 'root.site',
      url: '/sites/:siteId',
      views: {
        'content@': {
          templateUrl: 'components/site-detail/site-detail.html',
          controller: 'SiteDetailController as vm'
        }
      },
      data: {authenticate: true}
    });


    states.push({
      name: 'login',
      url: '/login',
      views: {
        'content@': {
          templateUrl: 'components/login/login.html',
          controller: 'LoginController as vm'
        }
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

