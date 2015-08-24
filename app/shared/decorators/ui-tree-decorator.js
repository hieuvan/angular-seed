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

          scope.allChildNodes = function() {
            return allChildNodes(this);
          };

          scope.toggleCheckbox = function() {
            console.log('toggling checkbox');
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
        require: ['ngModel', '^uiTreeNode'],
        link: function(scope, element, attr, controllers) {

          element.on('click', function(e) {
            e.stopPropagation();

            var node = angular.element(e.target).scope().$nodeScope;

            if (!node.hasChild()) return;

            var childNodes = node.allChildNodes();

            for (var i in childNodes) {
              childNodes[i].toggleCheckbox();
            }

          });
        }
      };

    }]);
})();

