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
    .directive('checkbox', [function() {
      return {
        restrict: 'E',
        priority: 1,
        link: function(scope, element, attrs, modelCtrl) {
          var isolateScope = element.isolateScope();

          isolateScope.$watch(function() {
            return isolateScope.checked;
          },function(newValue, oldValue) {
            var node = angular.element(element).scope().$nodeScope;

            node.selected = newValue;

            if (node && node.hasChild()) {
              var childNodes = node.allChildNodes();

              for (var i in childNodes) {
                childNodes[i].toggleNodeSelection(newValue);
              }
            }
          }, true);

          //var isolateScope =

          // element.on('click', function(e) {
          //   e.stopPropagation();

          //   var node = angular.element(e.target).scope().$nodeScope;

          //   node.selected = true;

          //   if (!node || !node.hasChild()) return;

          //   var childNodes = node.allChildNodes();

          //   var node = childNodes[1];

          //   node.selectNode();

          //   for (var i in childNodes) {
          //      childNodes[i].selectNode();
          //   }

          // });
        }
      };

    }]);
})();

