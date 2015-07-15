// Karma configuration
// Generated on Tue May 19 2015 10:26:51 GMT+1000 (EST)

module.exports = function(config) {
  config.set({

    basePath: './',

    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],

    // list of files / patterns to load in the browser
    files: [
      { pattern: 'bower_components/**/*.js', included: false },
      { pattern: 'test/**/*.spec.js', included: false },
      { pattern: 'components/**/*.js', included: false },
      { pattern: 'shared/**/*.js', included: false },
      { pattern: './*.js', included: false },

      'app.config.js',
      'test/test-main.js',
    ],

    exclude: [
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    colors: true,

    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    plugins : [
      'karma-jasmine',
      'karma-requirejs',
      'karma-phantomjs-launcher'
      // 'karma-junit-reporter'
    ]

    // junitReporter : {
    //   outputFile: 'test_out/unit.xml',
    //   suite: 'unit'
    // }
  });
};
