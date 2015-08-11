'use strict';

module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine', 'requirejs'],

    files: [
      { pattern: 'app/**/*.js', included: false },
      { pattern: 'bower_components/**/*.js', included: false },
      { pattern: 'test/unit/**/*.spec.js', included: false },
      'test/unit/test-main.js',
    ],

    exclude: [
    ],

    preprocessors: {
    },


    reporters: ['spec'],

    port: 9876,

    colors: true,

    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: false,

    plugins : [
      'karma-jasmine',
      'karma-requirejs',
      'karma-spec-reporter',
      'karma-phantomjs-launcher'
      // 'karma-junit-reporter'
    ],

    specReporter: {
      maxLogLines: 5
    }

    // junitReporter : {
    //   outputFile: 'test_out/unit.xml',
    //   suite: 'unit'
    // }
  });
};
