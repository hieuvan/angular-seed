'use strict';

define(function() {
  return ['$stateProvider', '$urlRouterProvider', 'config',
  function($stateProvider, $urlRouterProvider, config) {
    var states = [];

    states.push({
      name: 'root',
      abstract: true,
      url: '',
      views: {
        'header': {
          templateUrl: 'components/header/header.html',
          controller: 'HeaderController as vm'
        },
        'footer': {
          templateUrl: 'components/footer/footer.html',
          controller: 'FooterController as vm'
        }
      },
      resolve: {
        config: ['config', function(config) {
          return config;
        }]
      }
    });

    states.push({
      name: 'root.login',
      url: '/login',
      views: {
        'content@': {
          templateUrl: 'components/login/login.html',
          controller: 'LoginController as vm'
        }
      }
    });

    states.push({
      name: 'logout',
      url: '/logout',
      controller: 'LogOutController as vm'
    });

    states.push({
      name: 'root.news',
      url: '/news',
      views: {
        'content@': {
          templateUrl: 'components/news/news.html',
          controller: 'NewsController as vm'
        }
      },
      resolve: {
        news: ['NewsService', function(NewsService) {
          return NewsService.getNews().then(function(val) {
            if (val) {
              return val;
            }
          });
        }]
      },
    });

    states.push({
      name: 'root.contact-us',
      url: '/contact-us',
      views: {
        'content@': {
          templateUrl: 'components/contact-us/contact-us.html',
          controller: 'ContactUsController as vm'
        }
      }
    });

    states.push({
      name: 'root.about-us',
      url: '/about-us',
      views: {
        'content@': {
          templateUrl: 'components/about-us/about-us.html',
          controller: 'AboutUsController as vm'
        }
      }
    });

    states.push({
      name: 'root.home',
      url: '/home',
      views: {
        'content@': {
          templateUrl: 'components/home/home.html',
          controller: 'HomeController as vm'
        }
      },
      resolve: {
        hotels: ['SiteService', 'sharedProperties', function(SiteService, sharedProperties) {
          if (!_.isEmpty(sharedProperties.getProperty('hotels'))) {
            return sharedProperties.getProperty('hotels');
          }
          return SiteService.getHotels().then(function(val) {
            return val;
          });
        }]
      },
      data: {authenticate: true}
    });

    states.push({
      name: 'root.sites',
      url: '/sites',
      views: {
        'content@': {
          templateUrl: 'components/site-list/site-list.html',
          controller: 'SiteListController as vm'
        }
      },
      resolve: {
        hotels: ['SiteService', function(SiteService) {
          return SiteService.getHotels().then(function(val) {
            if (val) {
              return val;
            }
          });
        }]
      },
      data: {authenticate: true}
    });

    states.push({
      name: 'root.site',
      url: '/sites/:siteId',
      views: {
        'content@': {
          templateUrl: 'components/site-detail/site-detail.html',
          controller: 'SiteDetailController as vm'
        }
      },
      resolve: {
        hotel: ['SiteService', '$stateParams', 'sharedProperties', function(SiteService, $stateParams, sharedProperties) {
          return SiteService.getHotel($stateParams.siteId).then(function(val) {
            if (val) {
              sharedProperties.setProperty('hotel', val);
              return val;
            }
          });
        }]
      },
      data: {authenticate: true}
    });

    states.push({
      name: 'root.site.completed-inspections',
      url: '/completed-inspections',
      parent:"root.site",
      templateUrl:"components/completed-inspections/completed-inspections.html",
      controller:"CompletedInspectionsController as vm",
      data: {authenticate: true}
    });

    states.push({
      name: 'root.site.safety-documents',
      url: '/safety-documents',
      parent:"root.site",
      templateUrl:"components/safety-documents/safety-documents.html",
      controller:"SafetyDocumentsController as vm",
      data: {authenticate: true}
    });

    states.push({
      name: 'root.site.assure-inspection-start',
      url: '/assure-inspection/start',
      parent:"root.site",
      templateUrl:"components/assure-inspection/assure-inspection-start.html",
      controller:"AssureInspectionController as vm",
      data: {authenticate: true}
    });

    states.push({
      name: 'root.site.assure-inspection-question',
      url: '/assure-inspection-question/:questionId',
      parent:"root.site",
      templateUrl:"components/assure-inspection/assure-inspection-question.html",
      controller:"AssureInspectionController as vm",
      data: {authenticate: true}
    });

    states.push({
      name: 'root.site.assure-inspection-complete',
      url: '/assure-inspection/complete',
      parent:"root.site",
      templateUrl:"components/assure-inspection/assure-inspection-complete.html",
      controller:"AssureInspectionController as vm",
      data: {authenticate: true}
    });

    states.push({
      name: 'root.site.brand-standards',
      url: '/brand-standards',
      parent:"root.site",
      templateUrl:"components/image-gallery/image-gallery.html",
      controller:"ImageGalleryController as vm",
      data: {authenticate: true}
    });

    states.push({
      name: 'root.site.document',
      url: '/:section_name',
      parent:"root.site",
      templateUrl:"components/documents/documents.html",
      controller:"DocumentsController as vm",
      params:{
        section_id:null,
        sub_section_id:null,
        title:null,
        section_name:null
      },
      data: {authenticate: true}
    });

    states.push({
      name: 'error',
      params: {error: null},
      views: {
        'content@': {
          controller: 'ErrorController as vm',
          templateUrl: 'components/error/error.html'
        }
      }
    });

    $urlRouterProvider.when("/sites/:siteId/assure-inspection-question","/sites/:siteId/assure-inspection-question/all");

    $urlRouterProvider.when("/sites/:siteId/assure-inspection-question/","/sites/:siteId/assure-inspection-question/all");

    $urlRouterProvider.otherwise(config.defaultUrl);

    angular.forEach(states, function(state) {
       $stateProvider.state(state);
    });
  }];
});

