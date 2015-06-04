'use strict';

define(function(require) {
  return ['$stateProvider', function($stateProvider) {
    var states = [];

    states.push({
      name: 'root',
      abstract: true,
      url: '',
      views: {
        'header': {
          templateUrl: 'components/header/header.html'
        },
        'footer': {
          templateUrl: 'components/footer/footer.html'
        }
      },
      data: {
        proxy: 'root.home',
        requireLogin: true
      }
    });

    states.push({
      name: 'root.home',
      url: '/',
      views: {
        'content@': {
          template: 'this is home'
        }
      },
      data: {
        displayName: 'Home'
      }
    });

    states.push({
      name: 'root.projects',
      url: '/projects',
      abstract: true,
      views: {
        'content@': {
          templateUrl: 'components/projects/projects.html'
        },
        'head': {
          templateUrl: 'components/projects/list/projects-heading.html'
        }
      },
      data: {
        proxy: 'root.projects.list'
      }
    });

    states.push({
      name: 'root.projects.create',
      url: '/create',
      views: {
        'body' : {
          templateUrl: 'components/projects/create/project-create.html',
          controller: 'ProjectCreateController as vm'
        }
      },
      data: {
        displayName: 'Create Project'
      }
    });

    states.push({
      name: 'root.projects.list',
      url: '',
      views: {
        'body': {
          templateUrl: 'components/projects/list/projects-list.html',
          controller: 'ProjectsController as vm',
        }
      },
      data: {
        displayName: 'Projects'
      }
    });

    states.push({
      name: 'root.projects.detail',
      url: '/{id:int}',
      views : {
        'body' : {
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

    states.push({
      name: 'root.users',
      url: '/users',
      abstract: true,
      views: {
        'content@' : {
          templateUrl: 'components/users/users.html'
        }
      },
      data: {
        displayName: 'Users',
        proxy: 'root.users.list'
      }
    });

    states.push({
      name: 'root.users.list',
      url: '',
      views: {
        'content@': {
          templateUrl: 'components/users/partials/users-list.html',
        }
      },
      data: {
        displayName: 'Manage users'
      }
    });

    states.push({
      name: 'root.users.detail',
      url: '/:userid',
      resolve: {
        userid: function($stateParams) {
          return $stateParams.userid;
        }
      },
      views : {
        'body' : {
          templateUrl: 'components/users/partials/users-detail.html'
        }
      }
    });

    //$urlRouterProvider.otherwise(constant.defaultUrl);

    angular.forEach(states, function(state) {
      $stateProvider.state(state);
    });
  }];
});

