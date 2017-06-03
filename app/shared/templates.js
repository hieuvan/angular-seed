define(function(require) {
	return ['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('components/about-us/about-us.html',
    "<div>\r" +
    "\n" +
    "    <h2>About AHS</h2>\r" +
    "\n" +
    "    <h3>Outsourcing with AHS - the best for your business</h3>\r" +
    "\n" +
    "    <p>Since 1993 AHS has been providing managed accommodation services to hotels and serviced apartments throughout Asia Pacific.\r" +
    "\n" +
    "        Our history is testament to our invaluable service offering. With an experienced management team, AHS continues to prove irreplaceable to hotels and serviced apartments.\r" +
    "\n" +
    "        We provide a range of management services including housekeeping, maintenance, human resources, minibar, portering and front office.\r" +
    "\n" +
    "    </p>\r" +
    "\n" +
    "    <p>At the heart of our business is our increasingly popular housekeeping services. It’s simple –\r" +
    "\n" +
    "        <strong>by allowing us to do what we do best, your team is free to do what they do best.</strong>\r" +
    "\n" +
    "        Hotel Management are able to redirect their energies to revenue generating goals, such as increasing occupancy and average rates.\r" +
    "\n" +
    "        Our staff integrate into your operation seamlessly, with AHS’s management working alongside your team to deliver a superior guest experience.\r" +
    "\n" +
    "    </p>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('components/assure-inspection/assure-inspection-complete.html',
    "<h3>Inspection Overview</h3>\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <form name=\"completeInspection\" role=\"form\" class=\"form-horizontal\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"form-room-number\" class=\"col-sm-3\">Room number</label>\n" +
    "                <div class=\"col-xs-12 col-sm-8 col-md-5\">\n" +
    "                    <input type=\"text\" disabled ng-model=\"vm.currentInspectionData.roomNumber\" name=\"form-room-number\" class=\"col-xs-12 col-sm-8 col-md-5 form-control\" id=\"form-room-number\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"form-cleaned-by\" class=\"col-sm-3\">Inspection Score</label>\n" +
    "                <div class=\"col-xs-12 col-sm-8 col-md-5\">\n" +
    "                    <input type=\"text\" disabled ng-model=\"vm.currentInspectionData.totalScore\" name=\"form-inspection-score\" class=\"col-xs-12 col-sm-8 col-md-5 form-control\" id=\"form-inspection-score\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"form-cleaned-by\" class=\"col-sm-3\">Required Score</label>\n" +
    "                <div class=\"col-xs-12 col-sm-8 col-md-5\">\n" +
    "                    <input type=\"text\" disabled ng-model=\"vm.currentInspectionData.requiredScore\" name=\"form-required-score\" class=\"col-xs-12 col-sm-8 col-md-5 form-control\" id=\"form-required-score\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"form-cleaned-by\" class=\"col-sm-3\">Cleaned by</label>\n" +
    "                <div class=\"col-xs-12 col-sm-8 col-md-5\">\n" +
    "                    <input type=\"text\" disabled ng-model=\"vm.currentInspectionData.cleanedBy\" name=\"form-cleaned-by\" placeholder=\" Cleaned by\" class=\"col-xs-12 col-sm-8 col-md-5 form-control\" id=\"form-cleaned-by\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"form-comments\" class=\"col-sm-3\">Comments</label>\n" +
    "                <div class=\"col-xs-12 col-sm-8 col-md-5\">\n" +
    "                    <input type=\"text\" ng-model=\"vm.currentInspectionData.comments\" name=\"form-comments\" placeholder=\"Enter your comments\" class=\"col-xs-12 col-sm-8 col-md-5 form-control\" id=\"form-comments\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"form-comments\" class=\"col-sm-3\">Email to</label>\n" +
    "                <div class=\"col-xs-12 col-sm-8 col-md-5\">\n" +
    "                    <input type=\"text\" ng-model=\"vm.emailTo\" name=\"form-email-to\" placeholder=\"abc@g.com,def@g.com\" class=\"col-xs-12 col-sm-8 col-md-5 form-control\" id=\"form-email-to\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </form>\n" +
    "        <button type=\"button\" class=\"btn\"><a ui-sref=\"root.site.assure-inspection-question({questionId:'all'})\">Back</a></button>\n" +
    "        <button type=\"button\" class=\"btn\" ng-disabled=\"completeInspection.$invalid\" ng-click=\"vm.completeInspection()\">Submit</button>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('components/assure-inspection/assure-inspection-question.html',
    "<h3>Assure inspection</h3>\r" +
    "\n" +
    "<div>\r" +
    "\n" +
    "    <ul class=\"list-group\">\r" +
    "\n" +
    "        <li class=\"list-group-item\"><strong>Score:</strong> {{vm.currentInspectionData.totalScore}} %</li>\r" +
    "\n" +
    "        <li class=\"list-group-item\"><strong>Required:</strong> {{vm.currentInspectionData.requiredScore}} %</li>\r" +
    "\n" +
    "    </ul>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div ng-show=\"vm.questions.length\">\r" +
    "\n" +
    "    <uib-accordion close-others=\"false\">\r" +
    "\n" +
    "        <div uib-accordion-group class=\"panel-default\" ng-repeat=\"group in vm.questionsInCategories\" is-open=\"vm.accordionOpenStatus\">\r" +
    "\n" +
    "            <uib-accordion-heading>\r" +
    "\n" +
    "                {{group.category}} <i class=\"pull-right glyphicon\" ng-class=\"{'glyphicon-chevron-down': vm.accordionOpenStatus, 'glyphicon-chevron-right': !vm.accordionOpenStatus}\"></i>\r" +
    "\n" +
    "            </uib-accordion-heading>\r" +
    "\n" +
    "            <div>\r" +
    "\n" +
    "                <ul class=\"list-group\">\r" +
    "\n" +
    "                    <li class=\"list-group-item\" ng-repeat=\"item in group.items\"><a ui-sref=\"root.site.assure-inspection-question({questionId:item.number})\">{{item.text}}</a><span class=\"pull-right\">{{item.score}}</span></li>\r" +
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
    "<div ng-show=\"vm.currentQuestion\">\r" +
    "\n" +
    "    <div class=\"clearfix\"><a ui-sref=\"root.site.assure-inspection-question({questionId:'all'})\" class=\"btn btn-primary\" role=\"button\">Back to All</a></div>\r" +
    "\n" +
    "    <div class=\"container\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-6 slider-question\">\r" +
    "\n" +
    "                <h3 class=\"question-number\">{{vm.currentQuestion.number}} of {{vm.questions.length}}</h3>\r" +
    "\n" +
    "                <div class=\"container-fluid clearfix question-container\">\r" +
    "\n" +
    "                    <div class=\"form-group\">\r" +
    "\n" +
    "                        <p><strong>{{vm.currentQuestion.category}}</strong></p>\r" +
    "\n" +
    "                        <p>{{vm.currentQuestion.text}}</p>\r" +
    "\n" +
    "                        <div class=\"radio\" ng-repeat=\"answerOption in vm.answerOptions\">\r" +
    "\n" +
    "                            <label>\r" +
    "\n" +
    "                                <input type=\"radio\" name=\"optionsRadios\" value=\"{{answerOption.value}}\" ng-model=\"vm.currentQuestion.answer\">\r" +
    "\n" +
    "                                {{answerOption.label}}\r" +
    "\n" +
    "                            </label>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                    <div class=\"form-group\">\r" +
    "\n" +
    "                        <label for=\"form-question-comment\" class=\"col-sm-3\">Comment</label>\r" +
    "\n" +
    "                        <div class=\"col-xs-12 col-sm-8 col-md-5\">\r" +
    "\n" +
    "                            <input class=\"form-control\" type=\"text\" ng-model=\"vm.currentQuestion.comment\" name=\"form-question-comment\" id=\"form-question-comment\">\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <!-- prev / next controls -->\r" +
    "\n" +
    "                <a ng-show=\"vm.currentQuestion.number>1\" class=\"arrow-question prev\" ng-click=\"vm.saveInspection(vm.previousQuestionNumber)\"></a>\r" +
    "\n" +
    "                <a ng-show=\"vm.currentQuestion.number<vm.questions.length\" class=\"arrow-question next\" ng-click=\"vm.saveInspection(vm.nextQuestionNumber)\"></a>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n" +
    "<div class=\"clearfix\"><a ng-click=\"vm.saveInspection('complete')\" class=\"btn btn-primary\" role=\"button\">Complete Inspection</a></div>\r" +
    "\n"
  );


  $templateCache.put('components/assure-inspection/assure-inspection-start.html',
    "<h3>Assure Inspection</h3>\n" +
    "<div class=\"container\">\n" +
    "    <div class=\"row\">\n" +
    "        <div class=\"col-md-12\">\n" +
    "            <form name=\"startInspection\" role=\"form\" class=\"form-horizontal\">\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label for=\"form-inspection-user\" class=\"col-sm-3\">Inspected by</label>\n" +
    "                    <div class=\"col-xs-12 col-sm-8 col-md-5\">\n" +
    "                        <input class=\"col-xs-12 col-sm-8 col-md-5 form-control\" type=\"text\" required disabled ng-model=\"vm.inspectionUser\" name=\"form-inspection-user\" id=\"form-inspection-user\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label for=\"form-room-number\" class=\"col-sm-3\">Room number</label>\n" +
    "                    <div class=\"col-xs-12 col-sm-8 col-md-5\">\n" +
    "                        <input type=\"text\" required ng-model=\"vm.roomNumber\" name=\"form-room-number\" placeholder=\"Room number\" class=\"col-xs-12 col-sm-8 col-md-5 form-control\" id=\"form-room-number\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "                <div class=\"form-group\">\n" +
    "                    <label for=\"form-cleaned-by\" class=\"col-sm-3\">Cleaned by</label>\n" +
    "                    <div class=\"col-xs-12 col-sm-8 col-md-5\">\n" +
    "                        <input type=\"text\" ng-model=\"vm.cleanedBy\" name=\"form-cleaned-by\" placeholder=\" Cleaned by\" class=\"col-xs-12 col-sm-8 col-md-5 form-control\" id=\"form-cleaned-by\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </form>\n" +
    "            <button type=\"button\" class=\"btn button-site-color\" ng-disabled=\"startInspection.$invalid\" ng-click=\"vm.startInspection()\">Start Inspection</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n"
  );


  $templateCache.put('components/completed-inspections/completed-inspections.html',
    "<h3>Completed Inspections</h3>\r" +
    "\n" +
    "<div class=\"container\">\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-md-12\">\r" +
    "\n" +
    "            <form name=\"viewCompletedInspections\" role=\"form\" class=\"form-horizontal\">\r" +
    "\n" +
    "                <div class=\"form-group\">\r" +
    "\n" +
    "                    <label for=\"form-from-date\" class=\"col-sm-3\">From</label>\r" +
    "\n" +
    "                    <div class=\"col-xs-12 col-sm-8 col-md-5\">\r" +
    "\n" +
    "                        <div class=\"input-group\">\r" +
    "\n" +
    "                            <input type=\"text\" uib-datepicker-popup=\"{{vm.format}}\" datepicker-options=\"vm.dateOptions\" is-open=\"vm.popup1.opened\" close-text=\"Close\" ng-required=\"true\" ng-model=\"vm.dateFrom\" name=\"form-from-date\" class=\"form-control\" id=\"form-from-date\">\r" +
    "\n" +
    "                            <span class=\"input-group-btn\">\r" +
    "\n" +
    "                                <button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.open1()\"><i class=\"glyphicon glyphicon-calendar\"></i></button>\r" +
    "\n" +
    "                            </span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"form-group\">\r" +
    "\n" +
    "                    <label for=\"form-to-date\" class=\"col-sm-3\">To</label>\r" +
    "\n" +
    "                    <div class=\"col-xs-12 col-sm-8 col-md-5\">\r" +
    "\n" +
    "                        <div class=\"input-group\">\r" +
    "\n" +
    "                            <input type=\"text\" uib-datepicker-popup=\"{{vm.format}}\" datepicker-options=\"vm.dateOptions\" is-open=\"vm.popup2.opened\" close-text=\"Close\" ng-required=\"true\" ng-model=\"vm.dateTo\" name=\"form-to-date\" class=\"form-control\" id=\"form-to-date\">\r" +
    "\n" +
    "                            <span class=\"input-group-btn\">\r" +
    "\n" +
    "                                <button type=\"button\" class=\"btn btn-default\" ng-click=\"vm.open2()\"><i class=\"glyphicon glyphicon-calendar\"></i></button>\r" +
    "\n" +
    "                            </span>\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                    </div>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </form>\r" +
    "\n" +
    "            <button type=\"button\" class=\"btn button-site-color\" ng-disabled=\"viewCompletedInspections.$invalid\" ng-click=\"vm.showInspections()\">Submit</button>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "    <div class=\"row\" ng-show=\"vm.completedInspections\">\r" +
    "\n" +
    "        <div class=\"col-md-12\">\r" +
    "\n" +
    "            <table datatable=\"ng\" dt-options=\"vm.dtOptions\" dt-column-defs=\"vm.dtColumnDefs\" class=\"table table-striped table-bordered\">\r" +
    "\n" +
    "                <thead>\r" +
    "\n" +
    "                    <tr>\r" +
    "\n" +
    "                        <th>Hotel</th>\r" +
    "\n" +
    "                        <th>Inspection Date</th>\r" +
    "\n" +
    "                        <th>Score</th>\r" +
    "\n" +
    "                        <th>Inspected By</th>\r" +
    "\n" +
    "                        <th>Room</th>\r" +
    "\n" +
    "                        <th>Link to PDF</th>\r" +
    "\n" +
    "                    </tr>\r" +
    "\n" +
    "                </thead>\r" +
    "\n" +
    "                <tbody>\r" +
    "\n" +
    "                    <tr ng-repeat=\"inspection in vm.completedInspections\">\r" +
    "\n" +
    "                        <td>{{ inspection.hotel_name }}</td>\r" +
    "\n" +
    "                        <td>{{ inspection.date }}</td>\r" +
    "\n" +
    "                        <td>{{ inspection.percentage_obtained }}</td>\r" +
    "\n" +
    "                        <td>{{ inspection.inspected_by }}</td>\r" +
    "\n" +
    "                        <td>{{ inspection.room_number }}</td>\r" +
    "\n" +
    "                        <td><a target=\"_blank\" href=\"{{ inspection.url }}\">View</a></td>\r" +
    "\n" +
    "                    </tr>\r" +
    "\n" +
    "                </tbody>\r" +
    "\n" +
    "            </table>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('components/contact-us/contact-us.html',
    "<div>\r" +
    "\n" +
    "    <h2>Contact Us</h2>\r" +
    "\n" +
    "    <p>It’s our job to make you look good. At AHS Hospitality we offer hotels the complete outsourcing partnership.\r" +
    "\n" +
    "        In addition to our core focus of housekeeping we are also happy to take care of staff, HR and laundry, whilst giving you the benefit of our vast experience in hospitality.\r" +
    "\n" +
    "        You’ll wonder how you ever did without us.\r" +
    "\n" +
    "\r" +
    "\n" +
    "    For more information on AHS Hospitality, please free call 1800 026 036 or email <a href=\"mailto:info@ahshospitality.com.au\">info@ahshospitality.com.au</a>\r" +
    "\n" +
    "    </p>\r" +
    "\n" +
    "    <div id=\"map\" class=\"container-fluid\"></div>\r" +
    "\n" +
    "    <div class=\"row\">\r" +
    "\n" +
    "        <div class=\"col-md-6\" ng-repeat=\"marker in vm.markers\">\r" +
    "\n" +
    "            <div class=\"address panel panel-default\">\r" +
    "\n" +
    "                <div class=\"panel-heading\">\r" +
    "\n" +
    "                    <h3 class=\"panel-title\">{{marker.title}}</h3>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "                <div class=\"panel-body\">\r" +
    "\n" +
    "                    <p><a ng-click=\"vm.openInfoWindow($event, marker)\">{{marker.address}}</a></p>\r" +
    "\n" +
    "                    <p>Phone: {{marker.phone}}</p>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('components/documents/documents.html',
    "<h3>{{vm.title}}</h3>\n" +
    "<div ng-show=\"vm.sectionDocuments.length\">\n" +
    "    <table datatable=\"ng\" class=\"table table-striped table-bordered\">\n" +
    "        <thead>\n" +
    "            <tr><th>Document Name</th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr ng-repeat=\"document in vm.sectionDocuments\">\n" +
    "                <td><a target=\"_blank\" href=\"{{ document.url }}\">{{ document.name }}</a></td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "</div>\n" +
    "<div ng-show=\"!vm.sectionDocuments.length\" class=\"alert alert-warning\" role=\"alert\">\n" +
    "    <h4>Unable to access content</h4>\n" +
    "    <p>You do not have sufficient permissions to access this content. Please contact your system administrator.</p>\n" +
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
    "<footer class=\"footer\">\r" +
    "\n" +
    "    <div id=\"ahs-footer-content\" class=\"container navbar navbar-default\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-md-12\">\r" +
    "\n" +
    "                <ul>\r" +
    "\n" +
    "                    <li><a ui-sref=\"contact-us\">Contact Us</a></li>\r" +
    "\n" +
    "                </ul>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
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
    "<header class=\"navbar navbar-shadow\">\r" +
    "\n" +
    "  <div class=\"container\">\r" +
    "\n" +
    "      <div class=\"row\">\r" +
    "\n" +
    "          <div id=\"ahs-logo\" class=\"pull-left col-xs-6 col-sm-3 col-md-2\">\r" +
    "\n" +
    "              <img class=\"img-responsive\" src=\"//images.jxt.net.au/AHShospitality/images/logo.png\" alt=\"AHS\">\r" +
    "\n" +
    "          </div>\r" +
    "\n" +
    "      </div>\r" +
    "\n" +
    "  </div>\r" +
    "\n" +
    "  <div class=\"navbar navbar-top-ahs\" role=\"navigation\">\r" +
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
    "          <li ng-show=\"vm.loggedInUser\" class=\"active\"><a ui-sref=\"root.home\"><span class=\"glyphicon glyphicon-home\"></span> Home</a></li>\r" +
    "\n" +
    "          <li><a ui-sref=\"root.news\">News</a></li>\r" +
    "\n" +
    "          <li><a ui-sref=\"root.about-us\">About AHS</a></li>\r" +
    "\n" +
    "          <li><a ui-sref=\"root.contact-us\">Contact Us</a></li>\r" +
    "\n" +
    "          <li ng-show=\"!vm.loggedInUser\"><a ui-sref=\"root.login\">Login</a></li>\r" +
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
    "<h2>Select site</h2>\r" +
    "\n" +
    "<div class=\"row\">\r" +
    "\n" +
    "    <div class=\"col-md-12\">\r" +
    "\n" +
    "        <table datatable=\"ng\" dt-options=\"vm.dtOptions\" dt-column-defs=\"vm.dtColumnDefs\" class=\"table table-striped table-bordered\">\r" +
    "\n" +
    "            <thead>\r" +
    "\n" +
    "            <tr>\r" +
    "\n" +
    "                <th>Site</th>\r" +
    "\n" +
    "                <th>Select</th>\r" +
    "\n" +
    "            </tr>\r" +
    "\n" +
    "            </thead>\r" +
    "\n" +
    "            <tbody>\r" +
    "\n" +
    "            <tr ng-repeat=\"hotel in vm.hotels\">\r" +
    "\n" +
    "                <td><p>{{ hotel.name }}</p>\r" +
    "\n" +
    "                    <p class=\"link-color\">{{ hotel.address.number }} {{ hotel.address.street }},\r" +
    "\n" +
    "                        {{ hotel.address.suburb }} {{ hotel.address.city }},\r" +
    "\n" +
    "                        {{ hotel.address.state }} {{ hotel.address.postcode }}\r" +
    "\n" +
    "                    </p>\r" +
    "\n" +
    "                </td>\r" +
    "\n" +
    "                <td><a ui-sref=\"root.site({siteId: hotel.id})\"> > </a></td>\r" +
    "\n" +
    "            </tr>\r" +
    "\n" +
    "            </tbody>\r" +
    "\n" +
    "        </table>\r" +
    "\n" +
    "    </div>\r" +
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
    "    <div class=\"container\">\r" +
    "\n" +
    "        <div class=\"row\">\r" +
    "\n" +
    "            <div class=\"col-sm-6 col-sm-offset-3 form-box\">\r" +
    "\n" +
    "                <div class=\"form-bottom\">\r" +
    "\n" +
    "                    <div ng-show=\"vm.errorLoggedIn\" class=\"alert alert-danger\" role=\"alert\">Incorrect email/password. Please try again</div>\r" +
    "\n" +
    "                    <form name=\"loginForm\" role=\"form\" class=\"login-form\">\r" +
    "\n" +
    "                        <div class=\"form-group\">\r" +
    "\n" +
    "                            <label class=\"sr-only\" for=\"form-username\">Email</label>\r" +
    "\n" +
    "                            <input type=\"text\" required ng-model=\"vm.username\" name=\"form-username\" placeholder=\"Email...\" class=\"form-username form-control\" id=\"form-username\">\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <div class=\"form-group\">\r" +
    "\n" +
    "                            <label class=\"sr-only\" for=\"form-password\">Password</label>\r" +
    "\n" +
    "                            <input type=\"password\" required ng-model=\"vm.password\" name=\"form-password\" placeholder=\"Password...\" class=\"form-password form-control\" id=\"form-password\">\r" +
    "\n" +
    "                        </div>\r" +
    "\n" +
    "                        <button type=\"button\" class=\"btn button-site-color\" ng-disabled=\"loginForm.$invalid\" ng-click=\"vm.login()\">Log in</button>\r" +
    "\n" +
    "                    </form>\r" +
    "\n" +
    "                </div>\r" +
    "\n" +
    "            </div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>\r" +
    "\n"
  );


  $templateCache.put('components/news/news.html',
    "<div>\r" +
    "\n" +
    "    <h2>News</h2>\r" +
    "\n" +
    "    <div class=\"address panel panel-default\" ng-repeat=\"news in vm.news | orderBy : '-sortedDate'\">\r" +
    "\n" +
    "        <div class=\"panel-heading\">\r" +
    "\n" +
    "            <h3 class=\"panel-title\">{{news.title}}</h3>\r" +
    "\n" +
    "            <div class=\"link-color\">{{news.published_date}}</div>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "        <div class=\"panel-body\">\r" +
    "\n" +
    "            <p>{{news.description}}<a target=\"_blank\" href=\"{{news.url}}\">...</a></p>\r" +
    "\n" +
    "        </div>\r" +
    "\n" +
    "    </div>\r" +
    "\n" +
    "</div>"
  );


  $templateCache.put('components/site-detail/site-detail.html',
    "<h2>{{ vm.hotel.name }}</h2>\n" +
    "<div class=\"row\">\n" +
    "    <div class=\"col-md-2 col-sm-3 col-xs-4\">\n" +
    "        <button class=\"btn btn-default btn-block dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "            Assure Quality <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu left-adjust\" aria-labelledby=\"dropdownMenu1\">\n" +
    "            <li><a ui-sref=\"root.site.document({section_id: 2, sub_section_id: 6, title: 'Assure Manual', section_name: 'assure-manual'})\">Assure Manual</a></li>\n" +
    "            <li><a ui-sref=\"root.site.assure-inspection-start\">Assure Inspection</a></li>\n" +
    "            <li><a ui-sref=\"root.site.document({section_id: 2, sub_section_id: 8, title: 'Assure Reporting', section_name: 'assure-reporting'})\">Assure Reporting</a></li>\n" +
    "            <li><a ui-sref=\"root.site.view-completed-inspections\">View Completed Inspections</a></li>\n" +
    "            <li role=\"separator\" class=\"divider\"></li>\n" +
    "            <li><a ui-sref=\"root.site.brand-standards\">Brand Standards</a></li>\n" +
    "            <li><a ui-sref=\"root.site.document({section_id: 2, sub_section_id: 10, title: 'Internal Quality', section_name: 'internal-quality'})\">Internal Quality</a></li>\n" +
    "            <li><a ui-sref=\"root.site.document({section_id: 2, sub_section_id: 11, title: 'Trip Advisor', section_name: 'trip-advisor'})\">Trip Advisor</a></li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-2 col-sm-3 col-xs-4\">\n" +
    "        <button class=\"btn btn-default btn-block dropdown-toggle\" type=\"button\" id=\"dropdownMenu2\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
    "            Safety <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu left-adjust\" aria-labelledby=\"dropdownMenu2\">\n" +
    "            <li><a ui-sref=\"root.site.document({section_id: 1, sub_section_id: 1, title: 'Policy', section_name: 'policy'})\">Policy</a></li>\n" +
    "            <li><a ui-sref=\"root.site.document({section_id: 1, sub_section_id: 2, title: 'Safety Observations', section_name: 'safety-observations'})\">Safety Observations</a></li>\n" +
    "            <li><a ui-sref=\"root.site.document({section_id: 1, sub_section_id: 3, title: 'View safety documents', section_name: 'safety-documents'})\">View safety documents</a></li>\n" +
    "            <li role=\"separator\" class=\"divider\"></li>\n" +
    "            <li><a ui-sref=\"root.site.document({section_id: 1, sub_section_id: 4, title: 'Safety scorecard', section_name: 'safety-scorecard'})\">Safety scorecard</a></li>\n" +
    "            <li><a ui-sref=\"root.site.document({section_id: 1, sub_section_id: 5, title: 'Compliance audits', section_name: 'compliance-audits'})\">Compliance audits</a></li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-2\">\n" +
    "        <button class=\"btn btn-default btn-block dropdown-toggle\" type=\"button\" id=\"dropdownMenu3\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n" +
    "            Service Delivery <span class=\"caret\"></span>\n" +
    "        </button>\n" +
    "        <ul class=\"dropdown-menu left-adjust\" aria-labelledby=\"dropdownMenu3\">\n" +
    "            <li><a ui-sref=\"root.site.document({section_id: 3, sub_section_id: 12, title: 'Contract', section_name: 'contract'})\">Contract</a></li>\n" +
    "            <li><a ui-sref=\"root.site.document({section_id: 3, sub_section_id: 13, title: 'Work scope', section_name: 'work-scope'})\">Work scope</a></li>\n" +
    "            <li><a ui-sref=\"root.site.document({section_id: 3, sub_section_id: 14, title: 'SOPs', section_name: 'sops'})\">SOPs</a></li>\n" +
    "        </ul>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div ui-view><h4 class=\"link-color\">Please select option from the drop down list.</h4></div>\n"
  );


  $templateCache.put('components/site-list/site-list.html',
    "<h4>Select site</h4>\r" +
    "\n" +
    "<div class=\"row\">\r" +
    "\n" +
    "    <table datatable=\"ng\" dt-options=\"vm.dtOptions\" dt-column-defs=\"vm.dtColumnDefs\" class=\"table table-striped table-bordered\">\r" +
    "\n" +
    "        <thead>\r" +
    "\n" +
    "        <tr>\r" +
    "\n" +
    "            <th>Site</th>\r" +
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
    "            <td>{{ hotel.name }}\r" +
    "\n" +
    "                <p>{{ hotel.address.number }} {{ hotel.address.street }},\r" +
    "\n" +
    "                    {{ hotel.address.suburb }} {{ hotel.address.city }},\r" +
    "\n" +
    "                    {{ hotel.address.state }} {{ hotel.address.postcode }}\r" +
    "\n" +
    "                </p>\r" +
    "\n" +
    "            </td>\r" +
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