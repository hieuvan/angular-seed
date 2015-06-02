var tests = [];
for (var file in window.__karma__.files) {
  if (window.__karma__.files.hasOwnProperty(file)) {
    if (/Spec\.js$/.test(file)) {
      tests.push(file);
    }
  }
}

requirejs.config({
  // Karma serves files from '/base'
  baseUrl: '/base/app',

  deps: tests,

  shim: {
    angular: {
      exports: 'angular'
    },
    'angular-route': [
      'angular'
    ],
    'angular-ui-router': [
      'angular'
    ],
    'angular-animate': [
      'angular'
    ],
    'angular-validation': [
      'angular'
    ],
    'angular-ui-bootstrap-bower': [
      'angular'
    ],
    'angular-ui-bootstrap-tpls-bower': [
      'angular',
      'angular-ui-bootstrap-bower'
    ],
    'angular-datatables': [
      'angular',
      'datatables',
      'jquery'
    ],
    'angular-datatables-bootstrap': [
      'angular',
      'datatables',
      'angular-datatables',
      'jquery'
    ],
    'angular-datatables-tabletools': [
      'angular',
      'datatables',
      'datatables-tabletools',
      'angular-datatables',
      'jquery'
    ],
    'datatables-tabletools': [
      'datatables',
      'jquery'
    ],
    ngScrollSpy: [
      'angular'
    ],
    bootstrap: [
      'jquery'
    ],
    'angular-debounce': [
      'angular'
    ],
    'bootstrap-hover-dropdown': [
      'bootstrap',
      'jquery'
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
    'angular-animate': '../bower_components/angular-animate/angular-animate',
    'angular-validation': '../bower_components/angular-validation/dist/angular-validation',
    jquery: '../bower_components/jquery/dist/jquery',
    'requirejs-text': '../bower_components/requirejs-text/text',
    'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',
    'angular-ui-bootstrap-bower': '../bower_components/angular-ui-bootstrap-bower/ui-bootstrap-tpls',
    'angular-ui-bootstrap-tpls-bower': '../bower_components/angular-ui-bootstrap-bower/ui-bootstrap-tpls.min',
    datatables: '../bower_components/datatables/media/js/jquery.dataTables',
    'angular-datatables': '../bower_components/angular-datatables/dist/angular-datatables',
    'angular-datatables-bootstrap': '../bower_components/angular-datatables/dist/plugins/bootstrap/angular-datatables.bootstrap',
    'angular-datatables-tabletools': '../bower_components/angular-datatables/dist/plugins/tabletools/angular-datatables.tabletools',
    underscore: '../bower_components/underscore/underscore',
    'font-awesome': '../bower_components/font-awesome/fonts/*',
    'datatables-tabletools': '../bower_components/datatables-tabletools/js/dataTables.tableTools',
    'angular-file-upload': '../bower_components/angular-file-upload/angular-file-upload',
    'angular-datatables.bootstrap': '../bower_components/angular-datatables/dist/plugins/bootstrap/angular-datatables.bootstrap',
    'angular-datatables.colreorder': '../bower_components/angular-datatables/dist/plugins/colreorder/angular-datatables.colreorder',
    'angular-datatables.columnfilter': '../bower_components/angular-datatables/dist/plugins/columnfilter/angular-datatables.columnfilter',
    'angular-datatables.colvis': '../bower_components/angular-datatables/dist/plugins/colvis/angular-datatables.colvis',
    'angular-datatables.fixedcolumns': '../bower_components/angular-datatables/dist/plugins/fixedcolumns/angular-datatables.fixedcolumns',
    'angular-datatables.fixedheader': '../bower_components/angular-datatables/dist/plugins/fixedheader/angular-datatables.fixedheader',
    'angular-datatables.scroller': '../bower_components/angular-datatables/dist/plugins/scroller/angular-datatables.scroller',
    'angular-datatables.tabletools': '../bower_components/angular-datatables/dist/plugins/tabletools/angular-datatables.tabletools',
    ngScrollSpy: '../bower_components/ngScrollSpy/dist/ngScrollSpy',
    'bootstrap-hover-dropdown': '../bower_components/bootstrap-hover-dropdown/bootstrap-hover-dropdown',
    bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
    'angular-debounce': '../bower_components/angular-debounce/dist/angular-debounce',
    jasmine: '../bower_components/jasmine/lib/jasmine-core/jasmine'
  },
  packages: [

  ],

  // start test run, once Require.js is done
  callback: window.__karma__.start
});