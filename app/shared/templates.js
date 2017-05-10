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
    "        <form name=\"startInspection\" role=\"form\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"sr-only\" for=\"form-inspection-user\">Inspected by</label>\n" +
    "            <input type=\"text\" required disabled ng-model=\"vm.inspectionUser\" name=\"form-inspection-user\" class=\"form-control\" id=\"form-inspection-user\">\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"sr-only\" for=\"form-room-number\">Room number</label>\n" +
    "            <input type=\"password\" required ng-model=\"vm.roomNumber\" name=\"form-room-number\" placeholder=\"Room number\" class=\"form-control\" id=\"form-room-number\">\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"sr-only\" for=\"form-cleaned-by\">Cleaned by</label>\n" +
    "            <input type=\"password\" ng-model=\"vm.cleanedBy\" name=\"form-cleaned-by\" placeholder=\" Cleaned by\" class=\"form-control\" id=\"form-cleaned-by\">\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"sr-only\" for=\"form-comments\">Comments</label>\n" +
    "            <input type=\"password\" ng-model=\"vm.comments\" name=\"form-comments\" placeholder=\"Enter your comments\" class=\"form-control\" id=\"form-comments\">\n" +
    "        </div>\n" +
    "            </form>\n" +
    "        <button type=\"button\" class=\"btn\" ng-disabled=\"startInspection.$invalid\" ng-click=\"vm.startInspection()\">Start Inspection</button>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('components/documents/documents.html',
    "<h3>{{vm.title}}</h3>\n" +
    "<div ng-show=\"vm.sectionDocuments.length\">\n" +
    "    <table datatable=\"ng\" class=\"table table-striped table-bordered\">\n" +
    "        <thead>\n" +
    "            <tr><th>Document Name</th>\n" +
    "                <th>Document Url</th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"document in vm.sectionDocuments\">\n" +
    "                <td>{{ document.name }}</td>\n" +
    "                <td>{{ document.url }}</td></tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "</div>\n" +
    "<div ng-show=\"!vm.sectionDocuments.length\" class=\"alert alert-warning\" role=\"alert\">No permission</div>\n"
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
    "    <h1 class=\"navbar-header\">{{vm.siteTitle}}</h1>\r" +
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


  $templateCache.put('components/image-gallery/image-gallery.html',
    "<div class=\"container slider\">\n" +
    "    <!-- enumerate all photos -->\n" +
    "    <img ng-repeat=\"photo in vm.photos\" class=\"slide img-responsive\" ng-swipe-right=\"vm.showPrev()\" ng-swipe-left=\"vm.showNext()\" ng-show=\"vm.isActive($index)\" ng-src=\"{{photo.src}}\" />\n" +
    "    <!-- prev / next controls -->\n" +
    "    <a class=\"arrow prev\" ng-click=\"vm.showPrev()\"></a>\n" +
    "    <a class=\"arrow next\" ng-click=\"vm.showNext()\"></a>\n" +
    "    <!-- extra navigation controls -->\n" +
    "    <ul class=\"slider-nav\">\n" +
    "        <li ng-repeat=\"photo in vm.photos\" ng-class=\"{'active':vm.isActive($index)}\">\n" +
    "            <img ng-src=\"{{photo.src}}\" class=\"img-thumbnail\" alt=\"{{photo.desc}}\" title=\"{{photo.desc}}\" ng-click=\"vm.showPhoto($index);\" />\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n"
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
    "<h2>{{ vm.hotel.name }}</h2>\n" +
    "<div>\n" +
    "    <div class=\"btn-group\">\n" +
    "        <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "            Assure Quality<span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "            <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\n" +
    "                <li><a ui-sref=\"root.site.document({section_id: 2, sub_section_id: 6, title: 'Assure Manual', section_name: 'assure-manual'})\">Assure Manual</a></li>\n" +
    "                <li><a ui-sref=\"root.site.assure-inspection-start\">Assure Inspection</a></li>\n" +
    "                <li><a ui-sref=\"root.site.document({section_id: 2, sub_section_id: 8, title: 'Assure Reporting', section_name: 'assure-reporting'})\">Assure Reporting</a></li>\n" +
    "                <li role=\"separator\" class=\"divider\"></li>\n" +
    "                <li><a ui-sref=\"root.site.brand-standards\">Brand Standards</a></li>\n" +
    "                <li><a ui-sref=\"root.site.document({section_id: 2, sub_section_id: 10, title: 'Internal Quality', section_name: 'internal-quality'})\">Internal Quality</a></li>\n" +
    "                <li><a ui-sref=\"root.site.document({section_id: 2, sub_section_id: 11, title: 'Trip Advisor', section_name: 'trip-advisor'})\">Trip Advisor</a></li>\n" +
    "            </ul>\n" +
    "    </div>\n" +
    "    <div class=\"btn-group\">\n" +
    "        <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "            Safety<span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "            <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu2\">\n" +
    "                <li><a ui-sref=\"root.site.document({section_id: 1, sub_section_id: 1, title: 'Policy', section_name: 'policy'})\">Policy</a></li>\n" +
    "                <li><a ui-sref=\"root.site.document({section_id: 1, sub_section_id: 2, title: 'Safety Observations', section_name: 'safety-observations'})\">Safety Observations</a></li>\n" +
    "                <li><a ui-sref=\"root.site.document({section_id: 1, sub_section_id: 3, title: 'View safety documents', section_name: 'safety-documents'})\">View safety documents</a></li>\n" +
    "                <li role=\"separator\" class=\"divider\"></li>\n" +
    "                <li><a ui-sref=\"root.site.document({section_id: 1, sub_section_id: 4, title: 'Safety scorecard', section_name: 'safety-scorecard'})\">Safety scorecard</a></li>\n" +
    "                <li><a ui-sref=\"root.site.document({section_id: 1, sub_section_id: 5, title: 'Compliance audits', section_name: 'compliance-audits'})\">Compliance audits</a></li>\n" +
    "            </ul>\n" +
    "    </div>\n" +
    "    <div class=\"btn-group\">\n" +
    "        <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu3\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n" +
    "            Service Delivery<span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "            <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu3\">\n" +
    "                <li><a ui-sref=\"root.site.document({section_id: 3, sub_section_id: 12, title: 'Contract', section_name: 'contract'})\">Contract</a></li>\n" +
    "                <li><a ui-sref=\"root.site.document({section_id: 3, sub_section_id: 13, title: 'Work scope', section_name: 'work-scope'})\">Work scope</a></li>\n" +
    "                <li><a ui-sref=\"root.site.document({section_id: 3, sub_section_id: 14, title: 'SOPs', section_name: 'sops'})\">SOPs</a></li>\n" +
    "            </ul>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div ui-view></div>\n"
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