'use strict';

define(function() {
  return ['$stateProvider', '$urlRouterProvider', 'constant',
  function($stateProvider, $urlRouterProvider, constant) {
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
      url: '/items',
      abstract: true,
      data: {
        displayName: false
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
          return ItemService.getProjectTestForm($stateParams.projectId, $stateParams.testId, $stateParams.formId);
        }]
      },
      data: {
        displayName: '{{ form.get("name") }}'
      }
    });

    $urlRouterProvider.otherwise(constant.defaultUrl);

    angular.forEach(states, function(state) {
       $stateProvider.state(state);
    });
  }];
});

