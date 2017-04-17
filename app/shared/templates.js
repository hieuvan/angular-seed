define(function(require) {
	return ['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('components/error/error.html',
    "<div id=\"error\">\r" +
    "\n" +
    "  <header><h4>{{vm.siteTitle}}</h4></header>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  <article>\r" +
    "\n" +
    "    <h1>{{vm.code}}</h1>\r" +
    "\n" +
    "    <h4>{{vm.message}}</h4>\r" +
    "\n" +
    "    <p>{{vm.description}}</p>\r" +
    "\n" +
    "  </article>\r" +
    "\n" +
    "\r" +
    "\n" +
    "  <footer>\r" +
    "\n" +
    "    <ul class=\"tabs clearfix\">\r" +
    "\n" +
    "        <li>\r" +
    "\n" +
    "        <a href ui-sref=\"root.home\"><i class=\"fa fa-home\"></i> Back to Home</a>\r" +
    "\n" +
    "        </li>\r" +
    "\n" +
    "      </ul>\r" +
    "\n" +
    "  </footer>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('components/footer/footer.html',
    "<div id=\"wrapper-push\"></div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<footer class=\"footer navbar-fixed-bottom\">\r" +
    "\n" +
    "    Footer goes here\r" +
    "\n" +
    "</footer>\r" +
    "\n"
  );


  $templateCache.put('components/header/breadcrumb.html',
    "<ol class=\"breadcrumb navbar-left\">\r" +
    "\n" +
    "  <li ng-repeat=\"crumb in breadcrumbs\" ng-class=\"{ active: $last }\">\r" +
    "\n" +
    "    <a ui-sref=\"{{ crumb.route }}\" ng-if=\"!$last\">{{ crumb.displayName }}&nbsp;</a>\r" +
    "\n" +
    "    <span ng-show=\"$last\">{{ crumb.displayName }}</span>\r" +
    "\n" +
    "  </li>\r" +
    "\n" +
    "</ol>\r" +
    "\n" +
    "\r" +
    "\n"
  );


  $templateCache.put('components/header/header.html',
    "<header class=\"navbar navbar-static-top navbar-shadow\">\r" +
    "\n" +
    "  <div class=\"container-fluid\">\r" +
    "\n" +
    "    <h4 class=\"navbar-header\">{{vm.siteTitle}}</h4>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "<div class=\"container\">\r" +
    "\n" +
    "  <div class=\"navbar navbar-static-top navbar-shadow\" role=\"navigation\">\r" +
    "\n" +
    "    <div class=\"container-fluid\">\r" +
    "\n" +
    "      <div class=\"navbar-header\">\r" +
    "\n" +
    "        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r" +
    "\n" +
    "          <span class=\"sr-only\">Toggle navigation</span>\r" +
    "\n" +
    "          <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "          <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "          <span class=\"icon-bar\"></span>\r" +
    "\n" +
    "        </button>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "      <div class=\"navbar-collapse collapse\">\r" +
    "\n" +
    "        <ul class=\"nav navbar-nav\">\r" +
    "\n" +
    "          <li ng-show=\"vm.loggedInUser\" class=\"active\"><a href=\"#\"><span class=\"glyphicon glyphicon-home\"></span> Home</a></li>\r" +
    "\n" +
    "          <li ng-show=\"vm.loggedInUser\"><a ui-sref=\"assure-quality\">Assure Quality</a></li>\r" +
    "\n" +
    "          <li ng-show=\"vm.loggedInUser\"><a ui-sref=\"safety\">Safety</a></li>\r" +
    "\n" +
    "          <li ng-show=\"vm.loggedInUser\"><a ui-sref=\"service-delivery\">Service Delivery</a></li>\r" +
    "\n" +
    "          <li><a ui-sref=\"news\">News</a></li>\r" +
    "\n" +
    "          <li><a ui-sref=\"about-us\">About AHS</a></li>\r" +
    "\n" +
    "          <li><a ui-sref=\"contact-us\">Contact</a></li>\r" +
    "\n" +
    "          <li ng-show=\"!vm.loggedInUser\"><a ui-sref=\"login\">Login</a></li>\r" +
    "\n" +
    "          <li ng-show=\"vm.loggedInUser\"><a ng-click=\"vm.logout()\">Log out</a></li>\r" +
    "\n" +
    "        </ul>\r" +
    "\n" +
    "      </div><!--/.nav-collapse -->\r" +
    "\n" +
    "    </div><!--/.container-fluid -->\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "</div><!-- /container -->\r" +
    "\n" +
    "</header>\r" +
    "\n"
  );


  $templateCache.put('components/home/home.html',
    "<div>Selected site</div>\r" +
    "\n" +
    "<a ui-sref=\"root.sites\">Select site</a>\r" +
    "\n"
  );


  $templateCache.put('components/login/login.html',
    "<!-- Top content -->\r" +
    "\n" +
    "<div class=\"top-content\">\r" +
    "\n" +
    "\r" +
    "\n" +
    "    <div class=\"inner-bg\">\r" +
    "\n" +
    "        <div class=\"container\">\r" +
    "\n" +
    "            <div class=\"row\">\r" +
    "\n" +
    "                <div class=\"col-sm-6 col-sm-offset-3 form-box\">\r" +
    "\n" +
    "                    <div class=\"form-top\">\r" +
    "\n" +
    "                        <div class=\"form-top-left\">\r" +
    "\n" +
    "                            <h3>Login to AHS Inspection</h3>\r" +
    "\n" +
    "                            <p>Enter your username and password to log on:</p>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"form-top-right\">\r" +
    "\n" +
    "                            <i class=\"fa fa-lock\"></i>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"form-bottom\">\r" +
    "\n" +
    "                        <form role=\"form\" class=\"login-form\">\r" +
    "\n" +
    "                            <div class=\"form-group\">\r" +
    "\n" +
    "                                <label class=\"sr-only\" for=\"form-username\">Username</label>\r" +
    "\n" +
    "                                <input type=\"text\" ng-model=\"vm.username\" name=\"form-username\" placeholder=\"Username...\" class=\"form-username form-control\" id=\"form-username\">\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"form-group\">\r" +
    "\n" +
    "                                <label class=\"sr-only\" for=\"form-password\">Password</label>\r" +
    "\n" +
    "                                <input type=\"password\" ng-model=\"vm.password\" name=\"form-password\" placeholder=\"Password...\" class=\"form-password form-control\" id=\"form-password\">\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <button type=\"button\" class=\"btn\" ng-click=\"vm.login()\">Sign in!</button>\r" +
    "\n" +
    "                        </form>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('components/site-detail/site-detail.html',
    "<h4 class=\"navbar-header\">{{ vm.hotel.name }}</h4>"
  );


  $templateCache.put('components/site-list/site-list.html',
    "<h4>Select site</h4>\n" +
    "<div class=\"row\">\n" +
    "    <table ng-if=\"vm.showDT\" datatable=\"ng\" dt-options=\"vm.dtOptions\" dt-column-defs=\"vm.dtColumnDefs\" class=\"table table-striped table-bordered\">\n" +
    "        <thead>\n" +
    "        <tr>\n" +
    "            <th>Name</th>\n" +
    "            <th>Address</th>\n" +
    "            <th>Select</th>\n" +
    "        </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "        <tr ng-repeat=\"hotel in vm.hotels\">\n" +
    "            <td>{{ hotel.name }}</td>\n" +
    "            <td>{{ hotel.address.number }} {{ hotel.address.street }},\n" +
    "                {{ hotel.address.suburb }} {{ hotel.address.city }},\n" +
    "                {{ hotel.address.state }} {{ hotel.address.postcode }}</td>\n" +
    "            <td><a ui-sref=\"root.site({siteId: hotel.id})\"> > </a></td>\n" +
    "        </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "</div>"
  );

	}];
});