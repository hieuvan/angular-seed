'use strict';

define(function() {
  return ['$stateProvider', '$urlRouterProvider', 'constant',
  function($stateProvider, $urlRouterProvider, constant) {
    var states = [];

    states.push({
      name: 'login',
      url: '/login',
      views: {
        'content@': {
          templateUrl: 'components/auth/login.html',
          controller: 'AuthController as vm'
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
    // home
    states.push({
      name: 'root.home',
      url: '/home',
      abstract: true,
      views: {
        'content@' : {
          controller: 'HomeController as vm',
          template: '<div ui-view="projects" />'
        }
      },
      data: {
        displayName: 'Home'
      }
    });

    states.push({
      name: 'root.home.list',
      url: '',
      views: {
        'projects' : {
          templateUrl: 'components/projects/list/projects-list.html'
        }
      },
      data: {
        displayName: 'Home',
        title: 'My Projects'
      }
    });

    // projects
    states.push({
      name: 'root.projects',
      url: '/projects',
      abstract: true,
      data: {
        proxy: 'root.projects.list'
      }
    });

    states.push({
      name: 'root.projects.create',
      url: '/create',
      views: {
        'content@' : {
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
        'content@': {
          templateUrl: 'components/projects/list/projects-list.html',
          controller: 'ProjectsController as vm',
          resolve: {
            projects: ['ProjectsService', function(ProjectsService) {
              return ProjectsService.getProjects();
            }]
          }
        }
      },
      data: {
        displayName: 'Projects',
        title: 'Projects'
      }
    });

    states.push({
      name: 'root.projects.detail',
      url: '/{id:int}',
      views : {
        'content@' : {
          controller: 'ProjectController as vm',
          templateUrl: 'components/projects/detail/project-detail.html'
        }
      },
      resolve: {
        project: ['ProjectsService', '$stateParams', function(ProjectsService, $stateParams) {
          return ProjectsService.getProject($stateParams.id);
        }]
      },
      data: {
        displayName: "{{ project.get('name') }}"
      }
    });

    // Project tests
    states.push({
      name: 'root.projectTests',
      parent: 'root.projects.detail',
      url: '/tests',
      abstract: true,
      data: {
        proxy: 'root.projectTests.list',
        displayName: false
      }
    });

    states.push({
      name: 'root.projectTests.list',
      url: '',
      views: {
        'tab-content-tests@root.projects.detail': {
          controller: 'ProjectTestsController as vm',
          templateUrl: 'components/projects/tests/project-tests.html'
        }
      }
    });

    states.push({
      name: 'root.projectTests.detail',
      url: '/{testId:int}',
      views: {
        'content@': {
          controller: 'ProjectTestController as vm',
          templateUrl: 'components/projects/tests/detail/project-test.html'
        }
      },
      resolve: {
        test: ['ProjectsService', '$stateParams', function(ProjectService, $stateParams) {
          return ProjectService.getProjectTest($stateParams.id, $stateParams.testId);
        }]
      },
      data: {
        displayName: "{{ test.get('name') }}"
      }
    });

    // Project test forms
    states.push({
      name: 'root.projectTestForms',
      parent: 'root.projectTests.detail',
      url: '/forms',
      abstract: true,
      data: {
        proxy: 'root.projectTestForms.list',
        displayName: false
      }
    });

    states.push({
      name: 'root.projectTestForms.list',
      url: '',
      views: {
        'content@': {
          controller: 'ProjectTestController as vm',
          templateUrl: 'components/projects/tests/detail/project-test.html'
        }
      }
    });

    states.push({
      name: 'root.projectTestForms.detail',
      url: '/{formId:int}',
      views: {
        'content@': {
          controller: 'ProjectTestFormController as vm',
          templateUrl: 'components/projects/tests/forms/detail/project-test-form.html'
        }
      },
      resolve: {
        form: ['ProjectsService', '$stateParams', function(ProjectService, $stateParams) {
          return ProjectService.getProjectTestForm($stateParams.id, $stateParams.testId, $stateParams.formId);
        }]
      },
      data: {
        displayName: "{{ form.get('name') }}"
      }
    });

    // Project users
    states.push({
      name: 'root.projectUsers',
      parent: 'root.projects.detail',
      url: '/users',
      abstract: true,
      data: {
        proxy: 'root.projectUsers.list',
        displayName: false
      }
    });

    states.push({
      name: 'root.projectUsers.list',
      url: '',
      views: {
        'tab-content-users@root.projects.detail': {
          controller: 'ProjectUsersController as vm',
          templateUrl: 'components/projects/users/project-users.html'
        }
      }
    });

    states.push({
      name: 'root.projects.details.tests',
      url: '/tests',
      template: 'this is project tests'
    });

    states.push({
      name: 'root.projects.detail.tests.detail',
      url: '/{id:int}/tests/{id:int}',
      views : {
        'body' : {
          //controller: 'ProjectController as vm',
          //templateUrl: 'components/projects/detail/project-detail.html',
          template: 'this is project tests detail'
        }
      }
    });

    // users
    states.push({
      name: 'root.users',
      url: '/users',
      abstract: true,
      data: {
        proxy: 'root.users.list'
      }
    });

    states.push({
      name: 'root.users.create',
      url: '/create',
      views: {
        'content@' : {
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
        'content@': {
          templateUrl: 'components/users/list/users-list.html',
          controller: 'UsersController as vm'
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
        'content@' : {
          controller: 'UserController as vm',
          templateUrl: 'components/users/detail/user-detail.html'
        }
      },
      resolve: {
        user: ['$stateParams', 'UsersService', function($stateParams, UsersService) {
          return UsersService.getUser($stateParams.id);
        }]
      },
      data: {
        displayName: '{{ user.name }}'
      }
    });

    $urlRouterProvider.otherwise(constant.defaultUrl);

    angular.forEach(states, function(state) {
      $stateProvider.state(state);
    });
  }];
});

