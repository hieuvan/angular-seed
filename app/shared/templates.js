define(function(require) {
	return ['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('components/error/error.html',
    "<div id=\"error\">\n" +
    "  <header><h4>Assessment Builder</h4></header>\n" +
    "\n" +
    "  <article>\n" +
    "    <h1>{{vm.code}}</h1>\n" +
    "    <h4>{{vm.message}}</h4>\n" +
    "    <p>{{vm.description}}</p>\n" +
    "  </article>\n" +
    "\n" +
    "  <footer>\n" +
    "    <ul class=\"tabs clearfix\">\n" +
    "        <li>\n" +
    "        <a href ui-sref=\"root.items.detail({title: vm.defaultTitle})\"><i class=\"fa fa-home\"></i> Back to Home</a>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "  </footer>\n" +
    "</div>\n"
  );


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
    "  <div ng-show=\"vm.items.isEmpty()\" class=\"col-md-12\">\n" +
    "    <alert type=\"warning\">There are no items.</alert>\n" +
    "  </div>\n" +
    "\n" +
    "  <div ng-hide=\"vm.items.isEmpty()\" ng-class=\"vm.$uiTree.debug ? 'col-md-6' : 'col-md-12'\">\n" +
    "\n" +
    "    <div class=\"form-group clearfix\">\n" +
    "      <div class=\"btn-group\">\n" +
    "        <a href class=\"btn btn-default pull-left\" ng-click=\"vm.$uiTree.expandAll()\">Expand all</a>\n" +
    "        <a href class=\"btn btn-default pull-left\" ng-click=\"vm.$uiTree.collapseAll()\">Collapse all</a>\n" +
    "      </div>\n" +
    "\n" +
    "      <a href class=\"btn btn-primary\" ng-click=\"vm.addFolder()\">Add Folder</a>\n" +
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
    "      <div class=\"col-md-6\">\n" +
    "        Title\n" +
    "      </div>\n" +
    "      <div class=\"col-md-2\">\n" +
    "        Configuration\n" +
    "      </div>\n" +
    "      <div class=\"col-md-1\">\n" +
    "        Version\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <div class=\"angular-ui-tree\" ui-tree=\"vm.$uiTree.config\" id=\"tree-root\" ng-model=\"vm.treeRoot\">\n" +
    "        <ol ui-tree-nodes\n" +
    "            ng-init=\"items=vm.items.getAll()\"\n" +
    "            ng-model=\"items\"\n" +
    "            class=\"angular-ui-tree-nodes\">\n" +
    "\n" +
    "              <li ng-repeat=\"item in items\"\n" +
    "                  ui-tree-node\n" +
    "                  class=\"angular-ui-tree-node\"\n" +
    "                  ng-include=\"vm.itemRenderer\">\n" +
    "              </li>\n" +
    "        </ol>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"col-md-6\" ng-if=\"vm.$uiTree.debug\">\n" +
    "    <div class=\"info\">Full tree data</div>\n" +
    "\n" +
    "    <pre class=\"code\">{{ vm.items.flatten() | json }}</pre>\n" +
    "  </div>\n" +
    "</section>\n"
  );


  $templateCache.put('components/items/items_renderer.html',
    "<div\n" +
    "  ui-tree-handle\n" +
    "  ng-class=\"{'group': item.isContainer()}\"\n" +
    "  class=\"row tree-node tree-node-content\">\n" +
    "\n" +
    "    <div class=\"col-xs-1\">\n" +
    "      <checkbox class=\"checkbox\" ng-model=\"vm.checkboxes[item.get('id')]\" data-nodrag></checkbox>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-xs-6\">\n" +
    "      <div data-nodrag class=\"row-label\" ng-click=\"vm.$uiTree.toggle(this)\">\n" +
    "        <span ng-if=\"item.hasChild()\"\n" +
    "              ng-class=\"{'fa-caret-right': collapsed, 'fa-caret-down': !collapsed}\"\n" +
    "              class=\"fa\">\n" +
    "        </span>\n" +
    "\n" +
    "        <span class=\"fa fa-{{item.getIcon()}} second-icon\"></span>\n" +
    "\n" +
    "        <span class=\"text\">{{item.get('uid')}}</span>\n" +
    "        <span class=\"badge\" ng-if=\"item.hasChild()\">{{item.childCount()}}</span>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-xs-2\">\n" +
    "      <span\n" +
    "        ng-repeat=\"config in item.config().getAll()\"\n" +
    "        class=\"item-config fa fa-{{config.getIcon()}}\">\n" +
    "      </span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-xs-1\">\n" +
    "      <span data-nodrag>1.0.0 ZC</span>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-xs-2\">\n" +
    "      <a\n" +
    "        class=\"pull-right btn btn-danger btn-xs\"\n" +
    "        data-nodrag\n" +
    "        ng-click=\"vm.remove(this)\">\n" +
    "          <span class=\"fa fa-trash-o\"></span>\n" +
    "      </a>\n" +
    "\n" +
    "      <a class=\"pull-right btn btn-default btn-xs\"\n" +
    "        data-nodrag\n" +
    "        ng-click=\"vm.configure(this)\">\n" +
    "          <span class=\"fa fa-wrench\"></span>\n" +
    "      </a>\n" +
    "\n" +
    "      <a class=\"pull-right btn btn-primary btn-xs\"\n" +
    "        ng-if=\"item.isContainer()\"\n" +
    "        data-nodrag\n" +
    "        ng-click=\"vm.newSubItem(this)\">\n" +
    "          <span class=\"fa fa-plus\"></span>\n" +
    "      </a>\n" +
    "    </div>\n" +
    "</div>\n" +
    "\n" +
    "<ol\n" +
    "  ui-tree-nodes\n" +
    "  ng-init=\"items=item.get('items').getAll()\"\n" +
    "  ng-model=\"items\"\n" +
    "  ng-class=\"{hidden: collapsed}\">\n" +
    "    <li ng-repeat=\"item in items\" ui-tree-node ng-include=\"vm.itemRenderer\"></li>\n" +
    "</ol>\n"
  );


  $templateCache.put('components/items/modal/add/add-items.html',
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"vm.cancel()\">\n" +
    "    <span aria-hidden=\"true\">&times;</span>\n" +
    "    <span class=\"sr-only\">Close</span>\n" +
    "  </button>\n" +
    "  <h3 class=\"modal-title\">\n" +
    "    Add item to {{vm.title}}\n" +
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
    "        <input type=\"search\" placeholder=\"Search items by uid or title\" class=\"default form-control\" autocomplete=\"off\" ng-model=\"vm.itemQuery\" autofocus>\n" +
    "      </div>\n" +
    "      <button class=\"btn btn-primary\" ng-click=\"vm.searchItem()\">Search</button>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "  <div class=\"table-container col-3\" ng-show=\"vm.foundItems.getAll().length\">\n" +
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
    "  <button class=\"btn btn-primary\" ng-click=\"vm.addItems()\">Add Selected</button>\n" +
    "</div>\n"
  );


  $templateCache.put('components/items/modal/configure/configure-items.html',
    "<div class=\"modal-header\">\n" +
    "  <button type=\"button\" class=\"close\" ng-click=\"vm.cancel()\">\n" +
    "    <span aria-hidden=\"true\">&times;</span>\n" +
    "    <span class=\"sr-only\">Close</span>\n" +
    "  </button>\n" +
    "  <h3 class=\"modal-title\">\n" +
    "    Add configuration to {{vm.title}}\n" +
    "  </h3>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal-body\">\n" +
    "  <tabset>\n" +
    "    <tab ng-repeat=\"(title, data) in vm.tabs\" heading=\"{{title|capitalize}}\">\n" +
    "      <form sf-schema=\"data.schema\" sf-model=\"vm.config\" sf-form=\"data.form\"></form>\n" +
    "    </tab>\n" +
    "  </tabset>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"vm.cancel()\">Close</button>\n" +
    "  <button class=\"btn btn-primary\" ng-click=\"vm.update()\">Update Config</button>\n" +
    "</div>\n"
  );


  $templateCache.put('components/items/modal/remove/remove-items.html',
    "<div class=\"modal-header\">\n" +
    "  <h4 class=\"modal-title\">Are you sure you want to remove {{vm.title}}{{vm.multipleItems ? ' and all nested items' : ''}}?</h4>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"modal-footer\">\n" +
    "  <button class=\"btn btn-default\" ng-click=\"vm.cancel()\">Cancel</button>\n" +
    "  <button class=\"btn btn-danger\" ng-click=\"vm.removeItems()\">Remove Items</button>\n" +
    "</div>\n"
  );

	}];
});