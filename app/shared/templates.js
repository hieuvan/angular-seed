define(function(require) {
	return ['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('components/footer/footer.html',
    "<div id=\"wrapper-push\"></div>\n" +
    "\n" +
    "<footer class=\"footer navbar-fixed-bottom\">\n" +
    "    Footer goes here\n" +
    "</footer>\n"
  );


  $templateCache.put('components/header/breadcrumb.html',
    "<ol class=\"breadcrumb navbar-left\">\n" +
    "  <li ng-repeat=\"crumb in breadcrumbs\" ng-class=\"{ active: $last }\">\n" +
    "    <a ui-sref=\"{{ crumb.route }}\" ng-if=\"!$last\">{{ crumb.displayName }}&nbsp;</a>\n" +
    "    <span ng-show=\"$last\">{{ crumb.displayName }}</span>\n" +
    "  </li>\n" +
    "</ol>\n" +
    "\n"
  );


  $templateCache.put('components/header/header.html',
    "<div>\n" +
    "  <header class=\"navbar navbar-static-top navbar-shadow\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "      <h4 class=\"navbar-header\">Assessment Builder</h4>\n" +
    "\n" +
    "      <span class=\"text-muted pull-right\"><small>Build {{vm.buildVersion}} | {{vm.buildDate}}</small></span>\n" +
    "    </div>\n" +
    "  </header>\n" +
    "</div>\n"
  );


  $templateCache.put('components/items/item.html',
    "<section id=\"ui-tree\">\n" +
    "  <div ng-hide=\"vm.items.length\" class=\"col-md-12\">\n" +
    "    <alert type=\"warning\">There are no items.</alert>\n" +
    "  </div>\n" +
    "\n" +
    "  <div ng-show=\"vm.items.length\" ng-class=\"vm.debug ? 'col-md-6' : 'col-md-12'\">\n" +
    "\n" +
    "    <div class=\"form-group clearfix\">\n" +
    "      <div class=\"btn-group\">\n" +
    "        <a href class=\"btn btn-default pull-left\" ng-click=\"vm.expandAll()\">Expand all</a>\n" +
    "        <a href class=\"btn btn-default pull-left\" ng-click=\"vm.collapseAll()\">Collapse all</a>\n" +
    "      </div>\n" +
    "\n" +
    "      <a href class=\"btn btn-default\" ng-click=\"vm.options()\">Set options</a>\n" +
    "\n" +
    "      <a href class=\"btn btn-primary\" ng-click=\"vm.addItemModal()\">Add Item</a>\n" +
    "\n" +
    "      <div class=\"pull-right\">\n" +
    "        <a href class=\"btn btn-default\" ng-click=\"vm.preview()\">Preview</a>\n" +
    "        <a href class=\"btn btn-primary\" ng-click=\"vm.save()\">Save</a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"table-header row\">\n" +
    "      <div class=\"col-md-1\">\n" +
    "\n" +
    "      </div>\n" +
    "      <div class=\"col-md-5\">\n" +
    "        Title\n" +
    "      </div>\n" +
    "      <div class=\"col-md-4\">\n" +
    "        Configuration\n" +
    "      </div>\n" +
    "      <div class=\"col-md-1\">\n" +
    "        Version\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <div class=\"angular-ui-tree\" ui-tree id=\"tree-root\" ng-model=\"vm.treeRoot\">\n" +
    "        <ol ui-tree-nodes ng-model=\"vm.items\" class=\"angular-ui-tree-nodes\">\n" +
    "          <li ng-repeat=\"item in vm.items\" class=\"angular-ui-tree-node\" ui-tree-node ng-include=\"vm.item_renderer\"></li>\n" +
    "        </ol>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"col-md-6\" ng-show=\"vm.debug\">\n" +
    "    <div class=\"info\">Full tree data</div>\n" +
    "\n" +
    "    <pre class=\"code\">{{ vm.items | json }}</pre>\n" +
    "  </div>\n" +
    "</section>\n"
  );


  $templateCache.put('components/items/items_renderer.html',
    "<div ui-tree-handle class=\"row tree-node tree-node-content\">\n" +
    "  <div class=\"col-xs-1\">\n" +
    "    <checkbox data-nodrag ng-model=\"checkboxModel\"></checkbox>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"col-xs-5\">\n" +
    "    <span ng-if=\"item.items && item.items.length > 0\"\n" +
    "          data-nodrag ng-click=\"vm.toggle(this)\"\n" +
    "          ng-class=\"{'glyphicon-chevron-right': collapsed, 'glyphicon-chevron-down': !collapsed}\"\n" +
    "          class=\"glyphicon\">\n" +
    "    </span>\n" +
    "\n" +
    "    <span class=\"text\">{{item.uid}}</span>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"col-xs-4\">\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"col-xs-1\">\n" +
    "    <span>1.0.0 ZC</span>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"col-xs-1\">\n" +
    "    <a class=\"pull-right btn btn-danger btn-xs\" data-nodrag ng-click=\"vm.remove(this)\">\n" +
    "      <span class=\"glyphicon glyphicon-remove\"></span>\n" +
    "    </a>\n" +
    "\n" +
    "    <a class=\"pull-right btn btn-primary btn-xs\" data-nodrag ng-click=\"vm.newSubItem(this)\" style=\"margin-right: 8px;\">\n" +
    "      <span class=\"glyphicon glyphicon-plus\"></span>\n" +
    "    </a>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<ol ui-tree-nodes ng-model=\"item.items\" ng-class=\"{hidden: collapsed}\">\n" +
    "  <li ng-repeat=\"item in item.items\" ui-tree-node ng-include=\"vm.item_renderer\"></li>\n" +
    "</ol>\n"
  );


  $templateCache.put('components/items/modal/add-items.html',
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"vm.cancel()\">\n" +
    "    <span aria-hidden=\"true\">&times;</span>\n" +
    "    <span class=\"sr-only\">Close</span>\n" +
    "  </button>\n" +
    "  <h3 class=\"modal-title\">\n" +
    "    Add item to {{vm.item}}\n" +
    "  </h3>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal-body\">\n" +
    "  <div ng-show=\"vm.success\">\n" +
    "    <div class=\"alert alert-success\">\n" +
    "      {{vm.success}}\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <form class=\"form-inline\">\n" +
    "    <div class=\"form-group\">\n" +
    "      <div class=\"input-group\">\n" +
    "        <span class=\"input-group-addon\"><span class=\"fa fa-search\"></span></span>\n" +
    "        <input type=\"search\" placeholder=\"Search items by uid or title\" class=\"default form-control\" autocomplete=\"off\" ng-model=\"vm.itemQuery\">\n" +
    "      </div>\n" +
    "      <button class=\"btn btn-primary\" ng-click=\"vm.searchItem()\">Search</button>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "  <div class=\"table-container col-3\" ng-show=\"vm.itemSearchResults\">\n" +
    "    <div class=\"table-container-header-fixed\">\n" +
    "      <table class=\"table table-condensed table-bordered\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th><input type=\"checkbox\"></th>\n" +
    "            <th>UID</th>\n" +
    "            <th>Title</th>\n" +
    "            <th>Content</th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "    <div class=\"table-container-scroll\">\n" +
    "      <table class=\"table table-condensed table-bordered\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <th><input type=\"checkbox\"></th>\n" +
    "            <th>UID</th>\n" +
    "            <th>Title</th>\n" +
    "            <th>Type</th>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "        <tr ng-repeat=\"item in vm.foundItems.getAll()\">\n" +
    "          <td><input type=\"checkbox\" id=\"{{item.get('id')}}\" ng-model=\"item.selected\"></td>\n" +
    "          <td>{{item.get('uid')}}</td>\n" +
    "          <td>{{item.get('title')}}</td>\n" +
    "          <td>{{item.get('type')}}</td>\n" +
    "        </tr>\n" +
    "        </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"vm.cancel()\">Close</button>\n" +
    "  <button class=\"btn btn-default\" ng-click=\"vm.addItems()\">Add Selected</button>\n" +
    "</div>\n"
  );


  $templateCache.put('components/items/modal/remove-items.html',
    "<div class=\"modal-header\">\n" +
    "  <h4 class=\"modal-title\">Are you sure you want to remove {{vm.name}}{{vm.multipleItems ? ' and all nested items' : ''}}?</h4>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"vm.cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-danger\" ng-click=\"vm.removeItems()\">Remove Items</button>\n" +
    "</div>\n"
  );

	}];
});