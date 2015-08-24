(function() {
  'use strict';

  angular.module('ui.tree.decorated', ['ui.tree'])
    .directive('uiTreeNode', [function() {
      return {
        restrict: 'A',
        link: function(scope, element) {
          scope.allChildNodes = function() {
            return allChildNodes(this);
          };

          var allChildNodes = function($scope) {
            var nodes = [];

            if (!scope.hasChild()) return nodes;
             var children = $scope.childNodes();

            for (var i in children) {
              var node = children[i];

              nodes.push(node);

              if (node.hasChild()) nodes = nodes.concat(allChildNodes(node));
            }

            return nodes;
          };
        }
      };
    }]);
})();


