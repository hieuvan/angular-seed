'use strict';

require.config({
  deps: [
    'app.main'
  ],
  shim: {
    angular: {
      exports: 'angular'
    },
    'app-environment': [
      'angular'
    ],
    'angular-ui-router': [
      'angular'
    ],
    'angular-ui-bootstrap-bower': [
      'angular'
    ],
    'angular-ui-bootstrap-tpls-bower': [
      'angular',
      'angular-ui-bootstrap-bower'
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
    'angular-animate': [
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
    ]
  },
  map: {

  },
  priority: [
    'angular',
    'underscore'
  ],
  paths: {
    angular: '../bower_components/angular/angular',
    'app-environment': 'app.env',
    text: '../bower_components/requirejs-text/text',
    'angular-ui-router': '../bower_components/angular-ui-router/release/angular-ui-router',
    'angular-ui-bootstrap-bower': '../bower_components/angular-ui-bootstrap-bower/ui-bootstrap-tpls',
    'angular-ui-bootstrap-tpls-bower': '../bower_components/angular-ui-bootstrap-bower/ui-bootstrap-tpls.min',
    'angular-debounce': '../bower_components/angular-debounce/dist/angular-debounce',
    jasmine: '../bower_components/jasmine/lib/jasmine-core/jasmine',
    underscore: '../bower_components/underscore/underscore',
    'angular-cookies': '../bower_components/angular-cookies/angular-cookies',
    'angular-animate': '../bower_components/angular-animate/angular-animate',
    'angular-ui-tree': '../bower_components/angular-ui-tree/dist/angular-ui-tree',
    'angular-httpi': '../bower_components/angular-httpi/lib/httpi',
    'angular-http': '../bower_components/angular-http/angular-http.min',
    'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize',
    'bootstrap-decorator': '../bower_components/angular-schema-form/dist/bootstrap-decorator',
    objectpath: '../bower_components/objectpath/lib/ObjectPath',
    tv4: '../bower_components/tv4/tv4',
    'angular-loading-bar': '../bower_components/angular-loading-bar/build/loading-bar',
    'requirejs-text': '../bower_components/requirejs-text/text',
    'schema-form': '../bower_components/angular-schema-form/dist/schema-form',
    ngtoast: '../bower_components/ngtoast/dist/ngToast'
  },
  packages: [

  ]
});

// to be able to require file from node
if (typeof __karma__ !== 'undefined') {
  define(requirejs.s.contexts._.config);
}

