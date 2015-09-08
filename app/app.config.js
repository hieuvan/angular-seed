'use strict';

require.config({
  deps: [
    'app.main'
  ],
  shim: {
    angular: {
      exports: 'angular'
    },
    'angular-ui-router': [
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
    'angular-debounce': [
      'angular'
    ],
    'angular-cookies': [
      'angular'
    ],
    'angular-ui-tree': [
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
    'angular-toast': [
      'angular',
      'angular-sanitize',
      'angular-animate'
    ],
    'angular-bootstrap-checkbox': [
      'angular'
    ],
    'angular-ui-tree-decorator': [
      'angular',
      'angular-ui-tree',
      'angular-bootstrap-checkbox'
    ],
    'schema-form': [
      'angular',
      'objectpath',
      'tv4'
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
    'angular-validation': '../bower_components/angular-validation/dist/angular-validation',
    jquery: '../bower_components/jquery/dist/jquery',
    'requirejs-text': '../bower_components/requirejs-text/text',
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
    'angular-sanitize': '../bower_components/angular-sanitize/angular-sanitize',
    'angular-toast': '../bower_components/ngtoast/dist/ngToast',
    ngtoast: '../bower_components/ngtoast/dist/ngToast',
    'angular-bootstrap-checkbox': '../bower_components/angular-bootstrap-checkbox/angular-bootstrap-checkbox',
    'angular-ui-tree-decorator': 'shared/decorators/ui-tree-decorator',
    'schema-form': '../bower_components/angular-schema-form/dist/schema-form',
    'bootstrap-decorator': '../bower_components/angular-schema-form/dist/bootstrap-decorator',
    'objectpath': '../bower_components/objectpath/lib/ObjectPath',
    'tv4': '../bower_components/tv4/tv4'
  },
  packages: [

  ]
});

// to be able to require file from node
if (typeof __karma__ !== 'undefined') {
  define(requirejs.s.contexts._.config);
}

