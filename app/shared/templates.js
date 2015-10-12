define(function(require) {
	return ['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('components/error/error.html',
    "<div id=\"error\">\n" +
    "  <header><h4>{{vm.siteTitle}}</h4></header>\n" +
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
    "        <a href ui-sref=\"root.home\"><i class=\"fa fa-home\"></i> Back to Home</a>\n" +
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
    "<header class=\"navbar navbar-static-top navbar-shadow\">\n" +
    "  <div class=\"container-fluid\">\n" +
    "    <h4 class=\"navbar-header\">{{config.siteTitle}}</h4>\n" +
    "  </div>\n" +
    "</header>\n"
  );

	}];
});