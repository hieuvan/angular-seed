'use strict';

define(function(require) {
  return ['$rootScope', '$state', '$interpolate', function($rootScope, $state, $interpolate) {

    return {
      restrict: 'E',
      scope: {
        default: '&'
      },
      link: function(scope, elem) {

        var $elem = angular.element(elem),
            defaultTitle = scope.default(),
            hasDefaultTitle = typeof defaultTitle !== 'undefined';


        $rootScope.$on('$stateChangeSuccess', function(event, toState) {

          if (typeof toState.data.title !== 'undefined') {

            var expression = $interpolate(toState.data.title),
                title = expression($state.$current.locals.globals);

            if (hasDefaultTitle) {
              title = title + ' - ' + defaultTitle;
            }

            $elem.text(title);
          } else if (hasDefaultTitle) {
            $elem.text(defaultTitle);
          }

        });

      }
    };

  }];
});

