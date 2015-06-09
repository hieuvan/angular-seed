'use strict';

define(function(require) {
  return ['$stateProvider', '$urlRouterProvider', 'constant',
  function($stateProvider, $urlRouterProvider, constant) {
    var states = [];

    states.push({
      name: 'login',
      url: '/login',
      views: {
        'content@': {
          templateUrl: 'components/auth/login.html',
          controller: 'AuthController as vm',
        }
      },
      params: { loggedout: false },
      data: {
        requireLogin: false,
        displayName: 'Login'
      }
    });

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
      data: {
        requireLogin: true
      }
    });

    states.push({
      name: 'root.logout',
      url: '/logout',
      views: {
        'content@': {
          templateUrl: 'components/auth/logout.html',
          controller: 'AuthController as vm'
        }
      },
      data: {
        displayName: 'Logout'
      }
    });
    // projects
    states.push({
      name: 'root.projects',
      url: '/projects',
      abstract: true,
      views: {
        'content@': {
          templateUrl: 'components/projects/projects.html'
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
          controller: 'ProjectsController as vm'
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
    // users
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
        proxy: 'root.users.list'
      }
    });

    states.push({
      name: 'root.users.create',
      url: '/create',
      views: {
        'body' : {
          templateUrl: 'components/users/create/user-create.html',
          controller: 'UserCreateController as vm'
        }
      },
      data: {
        displayName: 'Create User'
      }
    });

    states.push({
      name: 'root.users.list',
      url: '',
      views: {
        'body': {
          templateUrl: 'components/users/list/users-list.html',
          controller: 'UsersController as vm'
        },
        'head': {
          templateUrl: 'components/users/list/users-heading.html'
        }
      },
      data: {
        displayName: 'Users'
      }
    });

    states.push({
      name: 'root.users.detail',
      url: '/{id:int}',
      views : {
        'body' : {
          controller: 'UserController as vm',
          templateUrl: 'components/users/detail/user-detail.html',
          resolve: {
            project: ['$stateParams', 'UsersService', function($stateParams, UsersService) {
              return UsersService.getUser($stateParams.id);
            }]
          }
        }
      }
    });

    $urlRouterProvider.otherwise(constant.defaultUrl);

    angular.forEach(states, function(state) {
      $stateProvider.state(state);
    });
  }];
});

