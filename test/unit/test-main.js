'use strict';
/**
 * another one monkey patch to prevent "no timestamp" error
 * https://github.com/karma-runner/karma-requirejs/issues/6#issuecomment-23037725
 */
(function (global) {
  var fileWithoutLeadingSlash;
  // array where all spec files will be included
  global.tests = [];

  for (var file in global.__karma__.files) {
    if (global.__karma__.files.hasOwnProperty(file)) {

      // get rid of leading slash in file path - prevents "no timestamp" error
      fileWithoutLeadingSlash = file.replace(/^\//, '');

      global.__karma__.files[fileWithoutLeadingSlash] = global.__karma__.files[file];
      delete global.__karma__.files[file];

      // we get all the test files automatically and store to window.tests array
      if (/spec\.js$/.test(fileWithoutLeadingSlash)) {
        global.tests.push(fileWithoutLeadingSlash);
      }
    }
  }
})(window);

// get the app config and modify to fit test settings
require(['base/app/rjs.config'], function(config) {
  config.baseUrl = 'base/app';

  config.deps = window.tests;

  config.shim['angular-mocks'] = ['angular'];
  config.paths['angular-mocks'] = '../bower_components/angular-mocks/angular-mocks';

  config.paths.test = '../test/unit';

  config.callback = window.__karma__.start;

  window.require.config(config);
});

