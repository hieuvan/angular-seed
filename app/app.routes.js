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

    // Project test forms
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
          controller: 'ProjectTestFormController as vm',
          templateUrl: 'components/items/detail/projects-tests-form.html'
        }
      },
      resolve: {
        form: ['ProjectTestFormService', '$stateParams', function(ProjectTestFormService, $stateParams) {
          return ProjectTestFormService.getProjectTestForm($stateParams.projectId, $stateParams.testId, $stateParams.formId);
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

