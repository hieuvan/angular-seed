(function() {
  'use strict';

  angular.module('ui.tree.decorated', ['ui.checkbox', 'ui.tree']);
})();

(function() {
  'use strict';

  angular.module('ui.tree.decorated')
    .controller('TreeNodeSelectorController', [function() {
    }]);

})();

(function() {
  'use strict';

  angular.module('ui.tree.decorated')

    .directive('uiTreeNode', [function() {
      return {
        restrict: 'A',
        link: function(scope, element) {

          scope.allChildNodes = function() {
            return allChildNodes(this);
          };

          scope.allChildNodesCount = function() {
            return allChildNodes(this).length;
          };

          var allChildNodes = function($scope) {
            var nodes = [];

            if (!$scope.hasChild()) return nodes;
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

(function() {
  'use strict';

  angular.module('ui.tree.decorated')
    .directive('uiTreeNodeSelector', [function() {
      return {
        restrict: 'A',
        controller: 'TreeNodeSelectorController',
        link: function(scope, element) {

        }
      };

    }]);
})();

