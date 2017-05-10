define(function(require) {
	return ['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('components/assure-inspection/assure-inspection-question.html',
    "<h3>Assure inspection</h3>\r" +
    "\n" +
    "<div ng-show=\"vm.questions.length\">\r" +
    "\n" +
    "    <uib-accordion close-others=\"false\">\r" +
    "\n" +
    "        <div uib-accordion-group class=\"panel-default\" ng-repeat=\"group in vm.questionsInCategories\" is-open=\"vm.status.isCustomHeaderOpen\">\r" +
    "\n" +
    "        <uib-accordion-heading>\r" +
    "\n" +
    "            {{group.category}} <i class=\"pull-right glyphicon\" ng-class=\"{'glyphicon-chevron-down': vm.status.isCustomHeaderOpen, 'glyphicon-chevron-right': !vm.status.isCustomHeaderOpen}\"></i>\r" +
    "\n" +
    "        </uib-accordion-heading>\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <ul class=\"list-group\">\r" +
    "\n" +
    "                    <li class=\"list-group-item\" ng-repeat=\"item in group.items\"><a ui-sref=\"root.site.assure-inspection-question({questionId:item.number})\">{{item.text}}</a></li>\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </uib-accordion>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div ng-show=\"vm.currentQuestion\" style=\"height: 305px\">\r" +
    "\n" +
    "    <div class=\"container slider\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <p>{{vm.currentQuestion.category}}</p>\r" +
    "\n" +
    "            <p>{{vm.currentQuestion.number}} of {{vm.questions.length}}</p>\r" +
    "\n" +
    "            <p>{{vm.currentQuestion.text}}</p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <!-- prev / next controls -->\r" +
    "\n" +
    "        <a ng-show=\"vm.currentQuestion.number>1\" class=\"arrow prev\" ui-sref=\"root.site.assure-inspection-question({questionId:vm.previousQuestionNumber})\"></a>\r" +
    "\n" +
    "        <a ng-show=\"vm.currentQuestion.number<vm.questions.length\" class=\"arrow next\" ui-sref=\"root.site.assure-inspection-question({questionId:vm.nextQuestionNumber})\"></a>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('components/assure-inspection/assure-inspection-start.html',
    "<h3>Assure Inspection</h3>\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"sr-only\" for=\"form-inspection-user\">Inspected by</label>\n" +
    "            <input type=\"text\" required ng-model=\"vm.inspectionUser\" name=\"form-inspection-user\" class=\"form-control\" id=\"form-inspection-user\">\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"sr-only\" for=\"form-room-number\">Room number</label>\n" +
    "            <input type=\"password\" required ng-model=\"vm.roomNumber\" name=\"form-room-number\" placeholder=\"Room number\" class=\"form-control\" id=\"form-room-number\">\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"sr-only\" for=\"form-cleaned-by\">Cleaned by</label>\n" +
    "            <input type=\"password\" required ng-model=\"vm.cleanedBy\" name=\"form-cleaned-by\" placeholder=\" Cleaned by\" class=\"form-control\" id=\"form-cleaned-by\">\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"sr-only\" for=\"form-comments\">Comments</label>\n" +
    "            <input type=\"password\" ng-model=\"vm.comments\" name=\"form-comments\" placeholder=\"Enter your comments\" class=\"form-control\" id=\"form-comments\">\n" +
    "        </div>\n" +
    "        <button type=\"button\" class=\"btn\" ng-disabled=\"startInspection.$invalid\">Start Inspection</button>\n" +
    "    </div>\n" +
    "</div>\n"
  );


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
    "  <div class=\"navbar navbar-static-top navbar-shadow navbar-top-ahs\" role=\"navigation\">\r" +
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
    "                            <p>Enter your email and password to log on:</p>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"form-top-right\">\r" +
    "\n" +
    "                            <i class=\"fa fa-key\"></i>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"form-bottom\">\r" +
    "\n" +
    "                        <div ng-show=\"vm.errorLoggedIn\" class=\"alert alert-danger\" role=\"alert\">Incorrect email/password. Please try again</div>\r" +
    "\n" +
    "                        <form name=\"loginForm\" role=\"form\" class=\"login-form\">\r" +
    "\n" +
    "                            <div class=\"form-group\">\r" +
    "\n" +
    "                                <label class=\"sr-only\" for=\"form-username\">Email</label>\r" +
    "\n" +
    "                                <input type=\"text\" required ng-model=\"vm.username\" name=\"form-username\" placeholder=\"Email...\" class=\"form-username form-control\" id=\"form-username\">\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <div class=\"form-group\">\r" +
    "\n" +
    "                                <label class=\"sr-only\" for=\"form-password\">Password</label>\r" +
    "\n" +
    "                                <input type=\"password\" required ng-model=\"vm.password\" name=\"form-password\" placeholder=\"Password...\" class=\"form-password form-control\" id=\"form-password\">\r" +
    "\n" +
    "                            </div>\r" +
    "\n" +
    "                            <button type=\"button\" class=\"btn\" ng-disabled=\"loginForm.$invalid\" ng-click=\"vm.login()\">Sign in!</button>\r" +
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
    "</div>\r" +
    "\n"
  );


  $templateCache.put('components/site-detail/site-detail.html',
    "<h4 class=\"navbar-header\">{{ vm.hotel.name }}</h4>"
  );


  $templateCache.put('components/site-list/site-list.html',
    "<h4>Select site</h4>\r" +
    "\n" +
    "<div class=\"row\">\r" +
    "\n" +
    "    <table ng-if=\"vm.showDT\" datatable=\"ng\" dt-options=\"vm.dtOptions\" dt-column-defs=\"vm.dtColumnDefs\" class=\"table table-striped table-bordered\">\r" +
    "\n" +
    "        <thead>\r" +
    "\n" +
    "        <tr>\r" +
    "\n" +
    "            <th>Name</th>\r" +
    "\n" +
    "            <th>Address</th>\r" +
    "\n" +
    "            <th>Select</th>\r" +
    "\n" +
    "        </tr>\r" +
    "\n" +
    "        </thead>\r" +
    "\n" +
    "        <tbody>\r" +
    "\n" +
    "        <tr ng-repeat=\"hotel in vm.hotels\">\r" +
    "\n" +
    "            <td>{{ hotel.name }}</td>\r" +
    "\n" +
    "            <td>{{ hotel.address.number }} {{ hotel.address.street }},\r" +
    "\n" +
    "                {{ hotel.address.suburb }} {{ hotel.address.city }},\r" +
    "\n" +
    "                {{ hotel.address.state }} {{ hotel.address.postcode }}</td>\r" +
    "\n" +
    "            <td><a ui-sref=\"root.site({siteId: hotel.id})\"> > </a></td>\r" +
    "\n" +
    "        </tr>\r" +
    "\n" +
    "        </tbody>\r" +
    "\n" +
    "    </table>\r" +
    "\n" +
    "</div>"
  );

	}];
});