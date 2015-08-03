define(function(require) {
	return ['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('components/auth/login.html',
    "<div class=\"container\">\n" +
    "  <div id=\"loginbox\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\n" +
    "    <div class=\"title\">\n" +
    "      <h1><i class=\"fa fa-lock\"></i>Assessment Builder</h1>\n" +
    "    </div>\n" +
    "\n" +
    "    <alert ng-show=\"vm.loggedOut\" type=\"success\" close=\"vm.close()\">You have been successfully logged out!</alert>\n" +
    "\n" +
    "    <alert ng-show=\"vm.loginError\" type=\"danger\">{{vm.error}}</alert>\n" +
    "\n" +
    "    <div class=\"panel panel-default\">\n" +
    "\n" +
    "      <div class=\"panel-heading\">\n" +
    "        <div class=\"panel-title\">Sign In</div>\n" +
    "        <div class=\"forgot-password\"><a href=\"#\">Forgot password?</a></div>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"panel-body\" >\n" +
    "\n" +
    "        <form class=\"form-horizontal\" role=\"form\">\n" +
    "\n" +
    "          <div class=\"input-group\">\n" +
    "            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n" +
    "            <input ng-model=\"vm.username\" type=\"text\" class=\"form-control\" placeholder=\"ACER username\">\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"input-group\">\n" +
    "            <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n" +
    "            <input ng-model=\"vm.password\" type=\"password\" class=\"form-control\" placeholder=\"password\">\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"input-group\">\n" +
    "            <div class=\"checkbox\">\n" +
    "              <label>\n" +
    "              <input ng-model=\"vm.rememberme\" type=\"checkbox\" value=\"1\"> Remember me\n" +
    "              </label>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "\n" +
    "          <div class=\"form-group\">\n" +
    "            <div class=\"col-sm-12 controls\">\n" +
    "              <button ng-click=\"vm.login()\" class=\"btn btn-primary\" role=\"button\">Login</button>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "        </form>\n" +
    "\n" +
    "      </div> <!-- end .panel-body -->\n" +
    "    </div> <!-- end .panel-info -->\n" +
    "  </div> <!-- end #loginbox -->\n" +
    "</div> <!-- end .container -->\n" +
    "\n"
  );


  $templateCache.put('components/auth/logout.html',
    "<div class=\"container\">\n" +
    "  <div id=\"loginbox\" class=\"mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2\">\n" +
    "    <div class=\"alert alert-danger fade in\" role=\"alert\">\n" +
    "      <h4>Are you sure you want to logout?</h4>\n" +
    "      <p>\n" +
    "        <button ng-click=\"vm.logout()\" type=\"button\" class=\"btn btn-danger\">Logout</button>\n" +
    "        <button ng-click=\"$window.history.back()\" type=\"button\" class=\"btn btn-default\">Cancel</button>\n" +
    "      </p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n"
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
    "      <ul class=\"nav navbar-nav navbar-left\">\n" +
    "        <li><a href ui-sref=\"root.home.list\">Home</a></li>\n" +
    "        <li><a href ui-sref=\"root.projects.list\">Projects</a></li>\n" +
    "        <li><a href ui-sref=\"root.users.list\">Users</a></li>\n" +
    "        <!--li><a href ui-sref=\"roles\">Roles</a></li-->\n" +
    "      </ul>\n" +
    "\n" +
    "      <span class=\"text-muted pull-right\"><small>Build {{vm.buildVersion}} | {{vm.buildDate}}</small></span>\n" +
    "    </div>\n" +
    "  </header>\n" +
    "\n" +
    "  <nav class=\"navbar navbar-default\" role=\"navigation\">\n" +
    "    <div class=\"container-fluid\">\n" +
    "      <ui-breadcrumbs\n" +
    "        displayname-property=\"data.displayName\"\n" +
    "        abstract-proxy-property=\"data.proxy\"\n" +
    "        template-url=\"components/header/breadcrumb.html\"\n" +
    "      ></ui-breadcrumbs>\n" +
    "\n" +
    "      <ul class=\"nav navbar-nav navbar-right\">\n" +
    "        <li dropdown class=\"dropdown\">\n" +
    "          <a href dropdown-toggle class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "            <span class=\"glyphicon glyphicon-user\"></span> {{vm.authUserFullName}} <span class=\"caret\"></span>\n" +
    "          </a>\n" +
    "          <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "            <li ng-repeat=\"menu in vm.menuItems\"><a href ui-sref=\"{{menu.state}}\">{{menu.name}}</a></li>\n" +
    "          </ul>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </nav>\n" +
    "</div>\n"
  );


  $templateCache.put('components/projects/create/project-create.html',
    "<form novalidate>\n" +
    "  <alert ng-show=\"vm.createProjectError\" type=\"danger\">{{vm.error}}</alert>\n" +
    "  <div class=\"form-group\">\n" +
    "    <label for=\"project-name\">Project Name</label>\n" +
    "    <input\n" +
    "      type=\"text\"\n" +
    "      class=\"form-control\"\n" +
    "      id=\"project-name\"\n" +
    "      placeholder=\"Enter Project Name\"\n" +
    "      ng-model=\"vm.projectName\">\n" +
    "  </div>\n" +
    "  <div class=\"form-group\">\n" +
    "    <label for=\"itrack-reference\">Itrack Reference</label>\n" +
    "    <input\n" +
    "      type=\"text\"\n" +
    "      class=\"form-control\"\n" +
    "      id=\"itrack-reference\"\n" +
    "      placeholder=\"Enter iTrack Reference\"\n" +
    "      ng-model=\"vm.itrackReference\">\n" +
    "  </div>\n" +
    "\n" +
    "  <button type=\"submit\" class=\"btn btn-primary\" ng-click=\"vm.createProject()\">Create Project</button>\n" +
    "  <button type=\"submit\" class=\"btn btn-primary\" ui-sref=\"root.projects.list\">Cancel</button>\n" +
    "</form>\n"
  );


  $templateCache.put('components/projects/detail/project-detail.html',
    "<div class=\"col-md-12\">\n" +
    "  <h2 class=\"pull-left\">{{vm.project.get('name')}}</h2>\n" +
    "</div>\n" +
    "\n" +
    "<tabset class=\"col-md-6\">\n" +
    "  <tab ng-repeat=\"tab in vm.tabs\"\n" +
    "       heading=\"{{tab.heading}}\"\n" +
    "       select=\"$state.go(tab.route)\">\n" +
    "\n" +
    "       <div ui-view=\"tab-content-{{tab.heading | lowercase}}\"></div>\n" +
    "  </tab>\n" +
    "</tabset>\n" +
    "\n"
  );


  $templateCache.put('components/projects/list/projects-list.html',
    "<div class=\"col-md-12\">\n" +
    "  <h2 class=\"pull-left\">{{$state.current.data.title}}</h2>\n" +
    "\n" +
    "  <a\n" +
    "  class=\"btn btn-primary pull-right\"\n" +
    "  ui-sref=\"root.projects.create\">Create Project</a>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"col-md-12\">\n" +
    "  <ul id=\"project-list\" class=\"list-unstyled\">\n" +
    "    <li class=\"project panel panel-default clearfix\" ng-repeat=\"project in vm.projects\">\n" +
    "      <div class=\"project-thumb pull-left scaled-square \">\n" +
    "        <div class=\"scaled-square-content\"> {{project.get('id')}} </div>\n" +
    "      </div>\n" +
    "      <h2 class=\"project-title pull-left\">\n" +
    "        <a href ui-sref=\"root.projects.detail({ id: project.get('id') })\">{{project.get('name')}}</a>\n" +
    "      </h2>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "</div>\n" +
    "\n"
  );


  $templateCache.put('components/projects/tests/detail/project-test.html',
    "<div class=\"col-md-12\">\n" +
    "  <h2 class=\"pull-left\">{{vm.test.get('name')}}</h2>\n" +
    "</div>\n" +
    "<div class=\"col-md-12\">\n" +
    "  <div ng-hide=\"vm.forms.length\" class=\"form-group\">There are no forms.</div>\n" +
    "  <form>\n" +
    "    <alert ng-show=\"vm.addFormError\" type=\"danger\">{{vm.error}}</alert>\n" +
    "    <alert ng-show=\"vm.addFormSuccess\" type=\"success\">Form added successfully</alert>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"form-name\">Form Name</label>\n" +
    "      <input type=\"text\" class=\"form-control\" id=\"form-name\" placeholder=\"Enter Form Name\" ng-model=\"vm.formName\">\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <button type=\"submit\" class=\"btn btn-primary\" ng-click=\"vm.addFormToTest()\">Add Form</button>\n" +
    "    </div>\n" +
    "  </form>\n" +
    "  <div ng-show=\"vm.forms.length\">\n" +
    "    <h3>Forms</h3>\n" +
    "    <div class=\"input-group\">\n" +
    "      <span class=\"input-group-addon\"><span class=\"fa fa-search\"></span></span>\n" +
    "      <input type=\"search\" placeholder=\"Search\" class=\"default form-control\" autocomplete=\"off\" ng-model=\"vm.formQuery\">\n" +
    "      <span class=\"input-group-addon\"><span class=\"fa fa-times reset-input\" data-ng-click=\"vm.formQuery = ''\"></span></span>\n" +
    "    </div>\n" +
    "    <div class=\"table-container\">\n" +
    "      <div class=\"table-container-header-fixed\">\n" +
    "        <table class=\"table table-condensed table-bordered\">\n" +
    "          <thead>\n" +
    "            <tr>\n" +
    "              <td>Name</td>\n" +
    "            </tr>\n" +
    "          </thead>\n" +
    "        </table>\n" +
    "      </div>\n" +
    "      <div class=\"table-container-scroll\">\n" +
    "        <table class=\"table table-condensed table-bordered\">\n" +
    "        <tbody>\n" +
    "          <thead>\n" +
    "            <tr>\n" +
    "              <td>Name</td>\n" +
    "            </tr>\n" +
    "          </thead>\n" +
    "          <tr ng-repeat=\"form in vm.forms | search:vm.formQuery:'name'\">\n" +
    "            <td><a href ui-sref=\"root.projectTestForms.detail({formId: form.get('id')})\">{{form.get('name')}}</a></td>\n" +
    "          </tr>\n" +
    "        </tbody>\n" +
    "        </table>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n"
  );


  $templateCache.put('components/projects/tests/forms/detail/modal/add-item.html',
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
    "        <tr ng-repeat=\"item in vm.foundItems\">\n" +
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


  $templateCache.put('components/projects/tests/forms/detail/project-test-form.html',
    "<div class=\"col-md-12\">\n" +
    "  <h2 class=\"pull-left\">{{vm.form.get('name')}}</h2>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"col-md-12\">\n" +
    "  <div ng-hide=\"vm.items.length\">There are no item.</div>\n" +
    "\n" +
    "  <div class=\"form-group\">\n" +
    "    <button type=\"button\" class=\"btn btn-primary\" ng-click=\"vm.addItemModal()\">Add Item</button>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div ng-show=\"vm.items.length\" class=\"col-md-12\">\n" +
    "  <div class=\"col-md-6\">\n" +
    "    <h3>Items</h3>\n" +
    "\n" +
    "    <div class=\"form-group clearfix\">\n" +
    "      <div class=\"btn-group\">\n" +
    "        <a href=\"\" class=\"btn btn-default pull-left\" ng-click=\"vm.expandAll()\">Expand all</a>\n" +
    "        <a href=\"\" class=\"btn btn-default pull-left\" ng-click=\"vm.collapseAll()\">Collapse all</a>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <script type=\"text/ng-template\" id=\"items_renderer.html\">\n" +
    "      <div ui-tree-handle>\n" +
    "        <a class=\"btn btn-success btn-xs\" data-nodrag ng-click=\"vm.toggle(this)\"><span class=\"glyphicon\" ng-class=\"{'glyphicon-chevron-right': collapsed, 'glyphicon-chevron-down': !collapsed}\"></span></a>\n" +
    "        {{item.uid}}\n" +
    "        <a class=\"pull-right btn btn-danger btn-xs\" data-nodrag ng-click=\"vm.remove(this)\"><span class=\"glyphicon glyphicon-remove\"></span></a>\n" +
    "        <a class=\"pull-right btn btn-primary btn-xs\" data-nodrag ng-click=\"vm.newSubItem(this)\" style=\"margin-right: 8px;\"><span class=\"glyphicon glyphicon-plus\"></span></a>\n" +
    "      </div>\n" +
    "      <ol ui-tree-nodes ng-model=\"item.items\" ng-class=\"{hidden: collapsed}\">\n" +
    "        <li ng-repeat=\"item in item.items\" ui-tree-node ng-include=\"'items_renderer.html'\">\n" +
    "        </li>\n" +
    "      </ol>\n" +
    "    </script>\n" +
    "\n" +
    "    <div class=\"form-group\">\n" +
    "      <div ui-tree id=\"tree-root\" ng-model=\"vm.treeRoot\" data-drag-enabled=\"true\" data-drop-enabled=\"true\">\n" +
    "        <ol ui-tree-nodes=\"\" ng-model=\"vm.items\">\n" +
    "          <li ng-repeat=\"item in vm.items\" ui-tree-node ng-include=\"'items_renderer.html'\"></li>\n" +
    "        </ol>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "  <div class=\"col-md-6\">\n" +
    "    <div class=\"info\">\n" +
    "      Full tree data\n" +
    "    </div>\n" +
    "\n" +
    "    <pre class=\"code\">{{ vm.items | json }}</pre>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('components/projects/tests/project-tests.html',
    "<div class=\"col-md-12\">\n" +
    "  <h2 class=\"pull-left\">{{vm.project.name}}</h2>\n" +
    "</div>\n" +
    "<div ng-hide=\"vm.tests.length\" class=\"form-group\">There are no tests.</div>\n" +
    "<form>\n" +
    "  <alert ng-show=\"vm.addTestError\" type=\"danger\">{{vm.error}}</alert>\n" +
    "  <alert ng-show=\"vm.addTestSuccess\" type=\"success\">Test added successfully</alert>\n" +
    "  <div class=\"form-group\">\n" +
    "    <label for=\"test-name\">Test Name</label>\n" +
    "    <input type=\"text\" class=\"form-control\" id=\"test-name\" placeholder=\"Enter Test Name\" ng-model=\"vm.testName\">\n" +
    "  </div>\n" +
    "  <div class=\"form-group\">\n" +
    "    <button type=\"submit\" class=\"btn btn-primary\" ng-click=\"vm.addTestToProject()\">Add Test</button>\n" +
    "  </div>\n" +
    "</form>\n" +
    "<div ng-show=\"vm.tests.length\">\n" +
    "  <div class=\"form-group\">\n" +
    "    <div class=\"input-group\">\n" +
    "      <span class=\"input-group-addon\"><span class=\"fa fa-search\"></span></span>\n" +
    "      <input type=\"search\" placeholder=\"Search\" class=\"default form-control\" autocomplete=\"off\" ng-model=\"vm.testQuery\">\n" +
    "      <span class=\"input-group-addon\"><span class=\"fa fa-times reset-input\" data-ng-click=\"vm.testQuery = ''\"></span></span>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"table-container\">\n" +
    "    <div class=\"table-container-header-fixed\">\n" +
    "      <table class=\"table table-condensed table-bordered\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <td>Name</td>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "    <div class=\"table-container-scroll\">\n" +
    "      <table class=\"table table-condensed table-bordered\">\n" +
    "      <tbody>\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <td>Name</td>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tr ng-repeat=\"test in vm.tests | search:vm.testQuery:'name'\">\n" +
    "          <td><a href ui-sref=\"root.projectTests.detail({testId: test.get('id')})\">{{test.get('name')}}</a></td>\n" +
    "        </tr>\n" +
    "      </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n"
  );


  $templateCache.put('components/projects/users/project-users.html',
    "<div ng-hide=\"vm.users.length\" class=\"form-group\">There are no users.</div>\n" +
    "<div ng-show=\"vm.users.length\">\n" +
    "  <h4>Users Assigned To Project</h4>\n" +
    "    <div class=\"input-group\">\n" +
    "    <span class=\"input-group-addon\"><span class=\"fa fa-search\"></span></span>\n" +
    "    <input type=\"search\" placeholder=\"Search\" class=\"default form-control\" autocomplete=\"off\" ng-model=\"vm.userQuery\">\n" +
    "    <span class=\"input-group-addon\"><span class=\"fa fa-times reset-input\" data-ng-click=\"vm.query = ''\"></span></span>\n" +
    "  </div>\n" +
    "  <div class=\"table-container\">\n" +
    "    <div class=\"table-container-header-fixed\">\n" +
    "      <table class=\"table table-condensed table-bordered\">\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <td>Name</td>\n" +
    "            <td>Email</td>\n" +
    "            <td>Roles</td>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "    <div class=\"table-container-scroll\">\n" +
    "      <table class=\"table table-condensed table-bordered\">\n" +
    "      <tbody>\n" +
    "        <thead>\n" +
    "          <tr>\n" +
    "            <td>Name</td>\n" +
    "            <td>Email</td>\n" +
    "            <td>Roles</td>\n" +
    "          </tr>\n" +
    "        </thead>\n" +
    "        <tr ng-repeat=\"user in vm.users | search:vm.userQuery:'email,given_name,family_name'\">\n" +
    "          <td>{{user.get('given_name')}} {{user.get('family_name')}}</td>\n" +
    "          <td>{{user.get('email')}}</td>\n" +
    "          <td></td>\n" +
    "        </tr>\n" +
    "      </tbody>\n" +
    "      </table>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "\n" +
    "<form novalidate>\n" +
    "  <alert ng-show=\"vm.assignUserError\" type=\"danger\">{{vm.error}}</alert>\n" +
    "  <alert ng-show=\"vm.assignUserSuccess\" type=\"success\">User assigned to the project successfully</alert>\n" +
    "  <div class=\"form-group\">\n" +
    "    <label>First part of ACER staff's email address (before the @).</label>\n" +
    "    <div class=\"input-group\">\n" +
    "      <input type=\"text\" class=\"form-control\" placeholder=\"Enter ACER Email\" ng-model=\"vm.email\">\n" +
    "      <div class=\"input-group-addon\">@acer.edu.au</div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <button type=\"submit\" class=\"btn btn-primary\" ng-click=\"vm.addUserToProject()\">Add To Project</button>\n" +
    "</form>\n" +
    "\n" +
    "\n" +
    "\n"
  );


  $templateCache.put('components/users/create/user-create.html',
    "<div class=\"col-md-12\">\n" +
    "  <h2 class=\"pull-left\">{{$state.current.data.displayName}}</h2>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"col-md-12\">\n" +
    "  <form novalidate>\n" +
    "    <alert ng-show=\"vm.createUserError\" type=\"danger\">{{vm.error}}</alert>\n" +
    "    <div class=\"form-group\">\n" +
    "      <label for=\"email\">Email</label>\n" +
    "      <div class=\"input-group\">\n" +
    "        <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Enter ACER Email\" ng-model=\"vm.email\">\n" +
    "        <div class=\"input-group-addon\">@acer.edu.au</div>\n" +
    "      </div>\n" +
    "\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "      <p class=\"help-block\">First part of ACER staff's email address (before the @). An invitation email will be sent to this email address.</p>\n" +
    "    </div>\n" +
    "    <button type=\"submit\" class=\"btn btn-primary\" ng-click=\"vm.createUser()\">Create User</button>\n" +
    "    <button type=\"submit\" class=\"btn btn-primary\" ui-sref=\"root.users.list\">Cancel</button>\n" +
    "  </form>\n" +
    "</div>\n"
  );


  $templateCache.put('components/users/detail/user-detail.html',
    "<div class=\"col-md-12\">\n" +
    "  <h2 class=\"pull-left\">{{vm.user.get('name')}}</h2>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"col-md-12\">\n" +
    "  <div class=\"row\">\n" +
    "    <div class=\"col-md-6\">\n" +
    "      <div class=\"form-group\">\n" +
    "        <label for=\"family-name\">Family Name</label>\n" +
    "        <input type=\"text\" class=\"form-control\" id=\"family-name\" ng-model=\"vm.familyName\">\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label for=\"given-name\">Given Name</label>\n" +
    "        <input type=\"text\" class=\"form-control\" id=\"given-name\" ng-model=\"vm.givenName\">\n" +
    "      </div>\n" +
    "      <div class=\"form-group\">\n" +
    "        <label for=\"email\">Email</label>\n" +
    "        <input type=\"text\" class=\"form-control\" id=\"email\" ng-model=\"vm.email\">\n" +
    "      </div>\n" +
    "    </div>\n" +
    "\n" +
    "    <div class=\"col-md-6\">\n" +
    "      <div ng-hide=\"vm.projects.length\">You have no project assigned.</div>\n" +
    "      <ul id=\"project-list\" class=\"list-unstyled\">\n" +
    "        <li class=\"project panel panel-default clearfix\" ng-repeat=\"project in vm.projects\">\n" +
    "          <div class=\"project-thumb pull-left scaled-square \">\n" +
    "            <div class=\"scaled-square-content\"> {{project.get('id')}} </div>\n" +
    "          </div>\n" +
    "          <h2 class=\"project-title pull-left\">\n" +
    "            <a href ui-sref=\"root.projects.detail({ id: project.get('id') })\">{{project.get('name')}}</a>\n" +
    "          </h2>\n" +
    "        </li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "<div>\n"
  );


  $templateCache.put('components/users/list/users-list.html',
    "<div class=\"col-md-12\">\n" +
    "  <h2 class=\"pull-left\">{{$state.current.data.displayName}}</h2>\n" +
    "\n" +
    "  <a class=\"btn btn-primary pull-right\" ng-show=\"$state.includes('root.users.list')\" ui-sref=\"root.users.create\">Create User</a>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"col-md-12\">\n" +
    "  <ul id=\"user-list\" class=\"list-unstyled\">\n" +
    "    <li class=\"user panel panel-default clearfix\" ng-repeat=\"user in vm.users\">\n" +
    "      <h2 class=\"user-title pull-left\">\n" +
    "        <a href ui-sref=\"root.users.detail({ id: user.get('id') })\">{{user.get('name')}}</a>\n" +
    "      </h2>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n"
  );

	}];
});