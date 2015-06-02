'use strict';

define(function(require) {
  return ['$stateProvider', function($stateProvider) {
    var states = [];

    states.push({
      name: 'projects',
      url: '/projects',
      abstract: true,
      templateUrl: 'components/projects/projects.html',
      data: {
        proxy: 'projects.list',
        requireLogin: true
      }
    });

    states.push({
      name: 'projects.create',
      url: '/create',
      views: {
        '' : {
          templateUrl: 'components/projects/create/project-create.html',
          controller: 'ProjectCreateController as vm'
        }
      },
      data: {
        displayName: 'Create Project'
      }
    });

    states.push({
      name: 'projects.list',
      url: '',
      views: {
        '': {
          templateUrl: 'components/projects/list/projects-list.html',
          controller: 'ProjectsController as vm',
        },
        'head': {
          templateUrl: 'components/projects/list/projects-heading.html'
        }
      },
      data: {
        displayName: 'Projects'
      }
    });

    states.push({
      name: 'projects.detail',
      url: '/{id:int}',
      views : {
        '' : {
          controller: 'ProjectController as vm',
          templateUrl: 'components/projects/detail/project-detail.html',
          resolve: {
            project: ['$stateParams', 'ProjectsService', function($stateParams, ProjectsService) {
              return ProjectsService.getProject($stateParams.id);
            }]
          }
        }
      }
    });

    angular.forEach(states, function(state) {
      $stateProvider.state(state);
    });
  }];
});

