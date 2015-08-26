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
    .directive('uiTree', [function() {
      return {
        restrict: 'A',
        link: function($scope) {

          $scope.allNodes = function() {
            var scope = $scope.$nodesScope,
                allNodes = [],
                nodes = scope.childNodes();

            for (var i in nodes) {
              allNodes.push(nodes[i]);

              allNodes = allNodes.concat(nodes[i].allChildNodes());
            }

            return allNodes;
          };

          $scope.getSelectedNodes = function() {
            var selectedNodes = [],
                allNodes = $scope.allNodes();

            for (var i in allNodes) {
              if (allNodes[i].selected) selectedNodes.push(allNodes[i]);
            }

            return selectedNodes;
          };

        }
      };

    }]);
})();

(function() {
  'use strict';

  angular.module('ui.tree.decorated')

    .directive('uiTreeNode', [function() {
      return {
        restrict: 'A',
        link: function(scope, element, attrs) {

          scope.selected = false;

          scope.allChildNodes = function() {
            return allChildNodes(this);
          };

          scope.toggleNodeSelection = function(value) {
            scope.selected = value;

            var element = scope.$element.find('button').isolateScope();

            element.checked = value;
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

              if (node && node.hasChild()) nodes = nodes.concat(allChildNodes(node));
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
    .controller('CheckboxController', ['$scope', '$element', function($scope, $element) {

      $scope.toogleCheckbox = function(value) {
        var node = angular.element($element).scope().$nodeScope;

        node.selected = value;

        if (node && node.hasChild()) {
          var childNodes = node.allChildNodes();

          for (var i in childNodes) {
            childNodes[i].toggleNodeSelection(value);
          }
        }
      };
    }]);
})();

(function() {
  'use strict';

  angular.module('ui.tree.decorated')
    .directive('checkbox', [function() {
      return {
        restrict: 'E',
        priority: 1,
        controller: 'CheckboxController',
        link: function(scope, element, attrs, modelCtrl) {
          var isolateScope = element.isolateScope();

          isolateScope.$watch(function() {
            return isolateScope.checked;
          },function(newValue, oldValue) {
            scope.toogleCheckbox(newValue);
          }, true);
        }
      };

    }]);
})();

