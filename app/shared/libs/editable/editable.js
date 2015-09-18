;(function(window, undefined) {
  'use strict';

  var module = angular.module('editable', []);

  module.directive('contenteditable', function() {
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {

          elm.bind('blur', function() {
            scope.$apply(function() {
              ctrl.$setViewValue(ctrl.$modelValue);
            });
          });

          var render = function(item) {
            if (typeof item !== 'undefined') {
              elm.html(item.get('title'));
            }
          };

          scope.$watch(attrs.ngModel, render);
          render();

          elm.bind('keydown', function(event) {
            console.log('clicked');
            var esc = event.which === 27,
                el = event.target;

          if (esc) {
            ctrl.$setViewValue(elm.html());
            el.blur();
            event.preventDefault();
          }
        });
      }
    };
  });

  if (typeof define === 'function' && define.amd) {
    define('editable', ['angular'], function(angular) {
      return module;
    });
  }

})(window);
