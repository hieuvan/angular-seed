'use strict';

require.config({
  deps: [
    'app.main'
  ],
  shim: {
    angular: {
      deps: [
        'jquery'
      ],
      exports: 'angular'
    },
    'app-environment': [
      'angular'
    ],
    'angular-ui-router': [
      'angular'
    ],
    'angular-bootstrap': [
      'angular'
    ],
    'angular-debounce': [
      'angular'
    ],
    'angular-cookies': [
      'angular'
    ],
    'angular-httpi': [
      'angular'
    ],
    'angular-local-storage': [
      'angular'
    ],
    'angular-animate': [
      'angular'
    ],
    'angular-touch': [
      'angular'
    ],
    'angular-sanitize': [
      'angular'
    ],
    ngtoast: [
      'angular',
      'angular-sanitize',
      'angular-animate'
    ],
    'angular-loading-bar': [
      'angular',
      'angular-animate'
    ],
    'angular-datatables': [
      'angular',
      'datatables',
      'jquery'
    ],
    'angular-datatables.bootstrap': [
      'angular',
      'datatables',
      'angular-datatables',
      'jquery'
    ],
    'angular-datatables.tabletools': [
      'angular',
      'datatables',
      'angular-datatables',
      'jquery'
    ],
    bootstrap: [
      'jquery'
    ],
    'ng-file-upload': [
      'angular'
    ],
    'ng-image-gallery': [
      'angular',
      'angular-animate',
      'hammer'
    ]
  },
  map: {

  },
  priority: [
    'angular',
    'jquery',
    'underscore'
  ],
  paths: {
    angular: '../bower_components/angular/angular',
    'app-environment': 'app.env',
    text: '../bower_components/requirejs-text/text',
    jquery: '../bower_components/jquery/dist/jquery',
    bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
    'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',
    'angular-debounce': '../bower_components/angular-debounce/dist/angular-debounce',
    jasmine: '../bower_components/jasmine/lib/jasmine-core/jasmine',
    underscore: '../bower_components/underscore/underscore',
    'angular-cookies': '../bower_components/angular-cookies/angular-cookies',
    'angular-animate': '../bower_components/angular-animate/angular-animate',
    'angular-httpi': '../bower_components/angular-httpi/lib/httpi',
    'angular-http': '../bower_components/angular-http/angular-http',
    'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize',
    'bootstrap-decorator': '../bower_components/angular-schema-form/dist/bootstrap-decorator',
    objectpath: '../bower_components/objectpath/lib/ObjectPath',
    tv4: '../bower_components/tv4/tv4',
    'angular-loading-bar': '../bower_components/angular-loading-bar/build/loading-bar',
    'requirejs-text': '../bower_components/requirejs-text/text',
    'schema-form': '../bower_components/angular-schema-form/dist/schema-form',
    ngtoast: '../bower_components/ngtoast/dist/ngToast',
    'angular-page-title': '../bower_components/angular-page-title/angular-page-title',
    'angular-cookie': '../bower_components/angular-cookie/angular-cookie',
    'angular-local-storage': '../bower_components/angular-local-storage/dist/angular-local-storage',
    datatables: '../bower_components/datatables.net/js/jquery.dataTables',
    'angular-datatables': '../bower_components/angular-datatables/dist/angular-datatables',
    'angular-datatables.bootstrap': '../bower_components/angular-datatables/dist/plugins/bootstrap/angular-datatables.bootstrap',
    'angular-datatables.colreorder': '../bower_components/angular-datatables/dist/plugins/colreorder/angular-datatables.colreorder',
    'angular-datatables.columnfilter': '../bower_components/angular-datatables/dist/plugins/columnfilter/angular-datatables.columnfilter',
    'angular-datatables.light-columnfilter': '../bower_components/angular-datatables/dist/plugins/light-columnfilter/angular-datatables.light-columnfilter',
    'angular-datatables.colvis': '../bower_components/angular-datatables/dist/plugins/colvis/angular-datatables.colvis',
    'angular-datatables.fixedcolumns': '../bower_components/angular-datatables/dist/plugins/fixedcolumns/angular-datatables.fixedcolumns',
    'angular-datatables.fixedheader': '../bower_components/angular-datatables/dist/plugins/fixedheader/angular-datatables.fixedheader',
    'angular-datatables.scroller': '../bower_components/angular-datatables/dist/plugins/scroller/angular-datatables.scroller',
    'angular-datatables.tabletools': '../bower_components/angular-datatables/dist/plugins/tabletools/angular-datatables.tabletools',
    'angular-datatables.buttons': '../bower_components/angular-datatables/dist/plugins/buttons/angular-datatables.buttons',
    'angular-datatables.select': '../bower_components/angular-datatables/dist/plugins/select/angular-datatables.select',
    'angular-touch': '../bower_components/angular-touch/angular-touch',
    'angular-bootstrap': '../bower_components/angular-bootstrap/ui-bootstrap-tpls',
    'crypto-js': '../bower_components/crypto-js/crypto-js',
    'ng-file-upload': '../bower_components/ng-file-upload/ng-file-upload',
    'angular-super-gallery': '../bower_components/angular-super-gallery/index',
    'angular-fullscreen': '../bower_components/angular-fullscreen/src/angular-fullscreen',
    'ng-image-gallery': '../bower_components/ng-image-gallery/dist/ng-image-gallery',
    'hammer': '../bower_components/hammerjs/hammer'
  },
  packages: [

  ]
});

// to be able to require file from node
if (typeof __karma__ !== 'undefined') {
  define(requirejs.s.contexts._.config);
}

