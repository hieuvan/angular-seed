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
      }
    });

    states.push({
      name: 'root.items',
      url: '/:title',
      abstract: true,
      data: {
        displayName: false
      }
    });

    states.push({
      name: 'error',
      url: '/error',
      params: {error: null},
      views: {
        'content@': {
          controller: 'ErrorController as vm',
          templateUrl: 'components/error/error.html'
        }
      }
    });

    states.push({
      name: 'root.items.detail',
      url: '',
      views: {
        'content@': {
          controller: 'ItemController as vm',
          templateUrl: 'components/items/item.html'
        }
      },
      resolve: {
        form: ['ItemService', '$stateParams', function(ItemService, $stateParams) {
          return ItemService.getTestFormByTitle($stateParams.title);
        }]
      },
      data: {
        displayName: '{{ form.get("name") }}'
      }
    });

    $urlRouterProvider.otherwise(config.defaultUrl);

    angular.forEach(states, function(state) {
       $stateProvider.state(state);
    });
  }];
});

