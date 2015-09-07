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
    "<section id=\"ui-tree\">\r" +
    "\n" +
    "  <div ng-hide=\"vm.items.length\" class=\"col-md-12\">\r" +
    "\n" +
    "    <alert type=\"warning\">There are no items.</alert>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  <div ng-show=\"vm.items.length\" ng-class=\"vm.$uiTree.debug ? 'col-md-6' : 'col-md-12'\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"form-group clearfix\">\r" +
    "\n" +
    "      <div class=\"btn-group\">\r" +
    "\n" +
    "        <a href class=\"btn btn-default pull-left\" ng-click=\"vm.$uiTree.expandAll()\">Expand all</a>\r" +
    "\n" +
    "        <a href class=\"btn btn-default pull-left\" ng-click=\"vm.$uiTree.collapseAll()\">Collapse all</a>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "      <a href class=\"btn btn-primary\" ng-click=\"vm.addFolder()\">Add Folder</a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "      <div class=\"pull-right\">\r" +
    "\n" +
    "        <a href class=\"btn btn-default\" ng-click=\"vm.preview()\">Preview</a>\r" +
    "\n" +
    "        <a href class=\"btn btn-primary\" ng-click=\"vm.save()\">Save</a>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"table-header row\">\r" +
    "\n" +
    "      <div class=\"col-md-1\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <div class=\"col-md-5\">\r" +
    "\n" +
    "        Title\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <div class=\"col-md-4\">\r" +
    "\n" +
    "        Configuration\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <div class=\"col-md-1\">\r" +
    "\n" +
    "        Version\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <div class=\"angular-ui-tree\" ui-tree=\"vm.$uiTree.config\" id=\"tree-root\" ng-model=\"vm.treeRoot\">\r" +
    "\n" +
    "        <ol ui-tree-nodes ng-model=\"vm.items\" data-node-type=\"cluster\" class=\"angular-ui-tree-nodes\">\r" +
    "\n" +
    "          <li ng-repeat=\"item in vm.items\" class=\"angular-ui-tree-node\" ui-tree-node ng-include=\"vm.item_renderer\"></li>\r" +
    "\n" +
    "        </ol>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  <div class=\"col-md-6\" ng-show=\"vm.$uiTree.debug\">\r" +
    "\n" +
    "    <div class=\"info\">Full tree data</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <pre class=\"code\">{{ vm.items | json }}</pre>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</section>\r" +
    "\n"
  );


  $templateCache.put('components/items/items_renderer.html',
    "<div\r" +
    "\n" +
    "  ui-tree-handle\r" +
    "\n" +
    "  ng-class=\"{'group': vm.$item.isContainer(item.type)}\"\r" +
    "\n" +
    "  class=\"row tree-node tree-node-content\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"col-xs-1\">\r" +
    "\n" +
    "      <checkbox ng-model=\"vm.checkboxes[item.id]\" data-nodrag></checkbox>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"col-xs-4\">\r" +
    "\n" +
    "      <div data-nodrag class=\"row-label\" ng-click=\"vm.$uiTree.toggle(this)\">\r" +
    "\n" +
    "        <span ng-if=\"item.items.length\"\r" +
    "\n" +
    "              ng-class=\"{'fa-caret-right': collapsed, 'fa-caret-down': !collapsed}\"\r" +
    "\n" +
    "              class=\"fa\">\r" +
    "\n" +
    "        </span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <span class=\"fa fa-{{vm.$item.icon(item.type)}} second-icon\"></span>\r" +
    "\n" +
    "\r" +
    "\n" +
    "        <span class=\"text\">{{item.uid}}</span>\r" +
    "\n" +
    "        <span class=\"badge\" ng-if=\"item.items.length\">{{vm.$uiTree.itemCount(this)}}</span>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"col-xs-4\">\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"col-xs-1\">\r" +
    "\n" +
    "      <span>1.0.0 ZC</span>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"col-xs-2\">\r" +
    "\n" +
    "      <a\r" +
    "\n" +
    "        class=\"pull-right btn btn-danger btn-xs\"\r" +
    "\n" +
    "        data-nodrag\r" +
    "\n" +
    "        ng-click=\"vm.remove(this)\">\r" +
    "\n" +
    "          <span class=\"fa fa-trash-o\"></span>\r" +
    "\n" +
    "      </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "      <a class=\"pull-right btn btn-default btn-xs\"\r" +
    "\n" +
    "        data-nodrag\r" +
    "\n" +
    "        ng-click=\"vm.configure(this)\"\r" +
    "\n" +
    "        style=\"margin-right: 8px;\">\r" +
    "\n" +
    "          <span class=\"fa fa-wrench\"></span>\r" +
    "\n" +
    "      </a>\r" +
    "\n" +
    "\r" +
    "\n" +
    "      <a class=\"pull-right btn btn-primary btn-xs\"\r" +
    "\n" +
    "        ng-if=\"vm.$item.isContainer(item.type)\"\r" +
    "\n" +
    "        data-nodrag\r" +
    "\n" +
    "        ng-click=\"vm.newSubItem(this)\"\r" +
    "\n" +
    "        style=\"margin-right: 8px;\">\r" +
    "\n" +
    "          <span class=\"fa fa-plus\"></span>\r" +
    "\n" +
    "      </a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<ol\r" +
    "\n" +
    "  ui-tree-nodes\r" +
    "\n" +
    "  ng-model=\"item.items\"\r" +
    "\n" +
    "  data-node-type=\"{{item.type}}\"\r" +
    "\n" +
    "  ng-class=\"{hidden: collapsed}\">\r" +
    "\n" +
    "    <li ng-repeat=\"item in item.items\" ui-tree-node ng-include=\"vm.item_renderer\"></li>\r" +
    "\n" +
    "</ol>\r" +
    "\n"
  );


  $templateCache.put('components/items/modal/add-items.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"vm.cancel()\">\r" +
    "\n" +
    "    <span aria-hidden=\"true\">&times;</span>\r" +
    "\n" +
    "    <span class=\"sr-only\">Close</span>\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Add item to {{vm.title}}\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "  <div ng-show=\"vm.success\">\r" +
    "\n" +
    "    <div class=\"alert alert-success\">\r" +
    "\n" +
    "      {{vm.success}}\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <form class=\"form-inline\">\r" +
    "\n" +
    "    <div class=\"form-group\">\r" +
    "\n" +
    "      <div class=\"input-group\">\r" +
    "\n" +
    "        <span class=\"input-group-addon\"><span class=\"fa fa-search\"></span></span>\r" +
    "\n" +
    "        <input type=\"search\" placeholder=\"Search items by uid or title\" class=\"default form-control\" autocomplete=\"off\" ng-model=\"vm.itemQuery\">\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <button class=\"btn btn-primary\" ng-click=\"vm.searchItem()\">Search</button>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </form>\r" +
    "\n" +
    "  <div class=\"table-container col-3\" ng-show=\"vm.itemSearchResults\">\r" +
    "\n" +
    "    <div class=\"table-container-header-fixed\">\r" +
    "\n" +
    "      <table class=\"table table-condensed table-bordered\">\r" +
    "\n" +
    "        <thead>\r" +
    "\n" +
    "          <tr>\r" +
    "\n" +
    "            <th><input type=\"checkbox\"></th>\r" +
    "\n" +
    "            <th>UID</th>\r" +
    "\n" +
    "            <th>Title</th>\r" +
    "\n" +
    "            <th>Content</th>\r" +
    "\n" +
    "          </tr>\r" +
    "\n" +
    "        </thead>\r" +
    "\n" +
    "      </table>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"table-container-scroll\">\r" +
    "\n" +
    "      <table class=\"table table-condensed table-bordered\">\r" +
    "\n" +
    "        <thead>\r" +
    "\n" +
    "          <tr>\r" +
    "\n" +
    "            <th><input type=\"checkbox\"></th>\r" +
    "\n" +
    "            <th>UID</th>\r" +
    "\n" +
    "            <th>Title</th>\r" +
    "\n" +
    "            <th>Type</th>\r" +
    "\n" +
    "          </tr>\r" +
    "\n" +
    "        </thead>\r" +
    "\n" +
    "        <tbody>\r" +
    "\n" +
    "        <tr ng-repeat=\"item in vm.foundItems.getAll()\">\r" +
    "\n" +
    "          <td><input type=\"checkbox\" id=\"{{item.get('id')}}\" ng-model=\"item.selected\"></td>\r" +
    "\n" +
    "          <td>{{item.get('uid')}}</td>\r" +
    "\n" +
    "          <td>{{item.get('title')}}</td>\r" +
    "\n" +
    "          <td>{{item.get('type')}}</td>\r" +
    "\n" +
    "        </tr>\r" +
    "\n" +
    "        </tbody>\r" +
    "\n" +
    "      </table>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "  <button class=\"btn btn-default\" ng-click=\"vm.cancel()\">Close</button>\r" +
    "\n" +
    "  <button class=\"btn btn-primary\" ng-click=\"vm.addItems()\">Add Selected</button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('components/items/modal/configure-items.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"vm.cancel()\">\r" +
    "\n" +
    "    <span aria-hidden=\"true\">&times;</span>\r" +
    "\n" +
    "    <span class=\"sr-only\">Close</span>\r" +
    "\n" +
    "  </button>\r" +
    "\n" +
    "  <h3 class=\"modal-title\">\r" +
    "\n" +
    "    Add configuration to {{vm.title}}\r" +
    "\n" +
    "  </h3>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"modal-body\">\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "  <button class=\"btn btn-default\" ng-click=\"vm.cancel()\">Close</button>\r" +
    "\n" +
    "  <button class=\"btn btn-primary\" ng-click=\"vm.updateConfiguration()\">Update Config</button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('components/items/modal/remove-items.html',
    "<div class=\"modal-header\">\r" +
    "\n" +
    "  <h4 class=\"modal-title\">Are you sure you want to remove {{vm.title}}{{vm.multipleItems ? ' and all nested items' : ''}}?</h4>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"modal-footer\">\r" +
    "\n" +
    "  <button class=\"btn btn-default\" ng-click=\"vm.cancel()\">Cancel</button>\r" +
    "\n" +
    "  <button class=\"btn btn-danger\" ng-click=\"vm.removeItems()\">Remove Items</button>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );

	}];
});