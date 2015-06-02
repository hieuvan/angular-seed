'use strict';

define(function(require) {
  return ['$stateProvider', function($stateProvider) {
    var states = [];

    states.push({
      name: 'users',
      url: '/users',
      abstract: true,
      templateUrl: 'components/users/users.html',
      data: {
        requireLogin: true,
        displayName: 'Users'
      }
    });

    states.push({
      name: 'users.list',
      url: '',
      templateUrl: 'components/users/partials/users-list.html',
      data: {
        requireLogin: true,
        displayName: 'Manage users'
      }
    });

    states.push({
      name: 'users.detail',
      url: '/:userid',
      resolve: {
        userid: function($stateParams) {
          return $stateParams.userid;
        }
      },
      views : {
        '' : {
          templateUrl: 'components/users/partials/users-detail.html'
        }
      }
    });

    angular.forEach(states, function(state) {
      $stateProvider.state(state);
    });
  }];
});

