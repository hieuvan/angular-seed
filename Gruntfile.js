'use strict';

module.exports = function (grunt) {

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  // Configurable paths
  var config = {
    app: 'app',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    config: config,

    karma: {
      unit : {
        configFile : 'karma.conf.js',
        singleRun: true,
        autoWatch: false
      }
    },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep:sass', 'bowerRequirejs']
      },
      js: {
        files: ['<%= config.app %>/{,*/}*.js'],
        tasks: ['jshint'],
        options: { livereload: true }
      },
      jstest: {
        files: ['test/unit/**/*.js'],
        tasks: ['test:watch', 'jshint']
      },
      html: {
        files: ['components/**/*html'],
        tasks: ['ngtemplates']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      sass: {
        files: ['<%= config.app %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['sass:server', 'autoprefixer:server'],
        options: { livereload: true }
      },
      styles: {
        files: ['<%= config.app %>/styles/{,*/}*.css'],
        tasks: ['newer:copy:styles', 'autoprefixer:server'],
        options: { livereload: true }
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.app %>/images/{,*/}*',
          '<%= config.app %>/index.html'
        ]
      }
    },

    connect: {
      options: {
        port: 8000,
        open: true,
        livereload: 35729,
        host: '0.0.0.0'
      },
      livereload: {
        options: {
          middleware: function(connect) {
            return [
              connect.static('.tmp'),
              connect().use('/bower_components', connect.static('./bower_components')),
              connect.static(config.app)
            ];
          }
        }
      },
      dist: {
        options: {
          base: '<%= config.dist %>',
          livereload: false
        }
      }
    },

    // Empties folders to start fresh
    clean: {
      tmp: {
        files: [{
          dot: true,
          src: ['.tmp']
        }]
      },
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= config.dist %>/*',
            '!<%= config.dist %>/.git*'
          ]
        }]
      }
    },

    // replace script tags from index.html
    processhtml: {
      dist: {
        files: {
          '<%= config.dist %>/index.html': ['<%= config.app %>/index.html']
        }
      }
    },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= config.app %>',
          dest: '<%= config.dist %>',
          src: [
            '*.{ico,png,txt}',
            'images/{,*/}*.webp',
            '{,*/}*.html',
            'styles/fonts/{,*/}*.*'
          ]
        },{
          expand: true,
          dot: true,
          flatten: true,
          cwd: 'bower_components',
          src: 'bootstrap-sass/assets/fonts/bootstrap/*',
          dest: '<%= config.dist %>/styles/fonts/bootstrap'
        },{
          expand: true,
          dot: true,
          flatten: true,
          cwd: 'bower_components',
          src: 'font-awesome/fonts/*',
          dest: '<%= config.dist %>/styles/fonts/font-awesome'
        }]
      },
      fonts: {
        files: [{
          expand: true,
          dot: true,
          flatten: true,
          cwd: 'bower_components',
          src: 'bootstrap-sass/assets/fonts/bootstrap/*',
          dest: '.tmp/styles/fonts/bootstrap'
        },{
          expand: true,
          dot: true,
          flatten: true,
          cwd: 'bower_components',
          src: 'font-awesome/fonts/*',
          dest: '.tmp/styles/fonts/font-awesome'
        }]
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= config.app %>/{,*/}*.js',
        'test/{,*/}*.js',
        '!<%= config.app %>/shared/templates.js'
      ]
    },

    // Compiles Sass to CSS and generates necessary files if requested
    sass: {
      options: {
        loadPath: ['bower_components']
      },
      dist: {
        options: {
          style: 'compressed',
          sourcemap: 'none'
        },
        files: [{
          expand: true,
          cwd: '<%= config.app %>/styles',
          src: ['*.{scss,sass}'],
          dest: '<%=config.dist %>/styles',
          ext: '.css'
        }]
      },
      server: {
        files: [{
          expand: true,
          cwd: '<%= config.app %>/styles',
          src: ['*.{scss,sass}'],
          dest: '.tmp/styles',
          ext: '.css'
        }]
      }
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= config.dist %>/styles/',
          src: '{,*/}*.css',
          dest: '<%= config.dist %>/styles/'
        }]
      },
      server: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    // create angular template cache
    ngtemplates: {
      app: {
        src: '<%= config.app %>/components/**/*.html',
        dest: '<%= config.app %>/shared/templates.js',
        options: {
          url: function(url) {
            return url.replace(config.app + '/', '');
          },
          bootstrap: function(module, script) {
            var wrapper = 'define(function(require) {\n';
            wrapper += '\treturn [\'$templateCache\', function($templateCache) {\n';
            wrapper += script + '\n\t}];\n});';

            return wrapper;
          }
        }
      }
    },

    // automatically inject bower dependencies to rjs config
    bowerRequirejs: {
      target: {
        rjsConfig: '<%= config.app %>/app.config.js',
        options: {
          exclude: ['requirejs', 'bootstrap-sass', 'font-awesome']
        }
      }
    },

    // optimize javascript with rjs optimizer
    requirejs: {
      compile: {
        options: {
          baseUrl: '<%= config.app %>',
          mainConfigFile: '<%= config.app %>/app.config.js',
          name: 'app.main',
          preserveLicenseComments: false,
          //optimize: 'none',
          include: ['../bower_components/requirejs/require.js'],
          out: '<%= config.dist %>/js/main.js'
        }
      }
    },

    // Automatically inject Bower components into the HTML file
    wiredep: {
      app: {
        ignorePath: /^\/|\.\.\//,
        src: ['<%= config.app %>/index.html'],
        exclude: ['bower_components/bootstrap-sass/assets/javascripts/bootstrap.js']
      },
      sass: {
        src: ['<%= config.app %>/styles/{,*/}*.{scss,sass}'],
        ignorePath: /(\.\.\/){1,2}bower_components\//
      }
    },

    // Renames files for browser caching purposes
    rev: {
      dist: {
        files: {
          src: [
            '<%= config.dist %>/scripts/{,*/}*.js',
            '<%= config.dist %>/styles/{,*/}*.css',
            '<%= config.dist %>/images/{,*/}*.*',
            '<%= config.dist %>/styles/fonts/{,*/}*.*',
            '<%= config.dist %>/*.{ico,png}'
          ]
        }
      }
    },

    // Generates a custom Modernizr build that includes only the tests you
    // reference in your app
    modernizr: {
      dist: {
        devFile: 'bower_components/modernizr/modernizr.js',
        outputFile: '<%= config.dist %>/scripts/vendor/modernizr.js',
        files: {
          src: [
            '<%= config.dist %>/{,*/}*.js',
            '<%= config.dist %>/styles/{,*/}*.css'
          ]
        },
        uglify: true
      }
    },

    // Run some tasks in parallel to speed up build process
    concurrent: {
      server: [
        'sass:server',
        'copy:fonts'
      ],
      test: [
      ],
      dist: [
        'sass:dist',
        'copy:dist'
      ]
    }
  });


  grunt.registerTask('serve', 'start the server and preview your app, --allow-remote for remote access', function (target) {
    if (grunt.option('allow-remote')) {
      grunt.config.set('connect.options.hostname', '0.0.0.0');
    }
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:tmp',
      'wiredep:sass',
      'ngtemplates',
      'bowerRequirejs',
      'concurrent:server',
      'autoprefixer:server',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run([target ? ('serve:' + target) : 'serve']);
  });

  grunt.registerTask('test', function (target) {
    if (target !== 'watch') {
      return grunt.task.run([
        'karma:unit'
      ]);
    }

    grunt.config('karma:unit.singleRun', false);
    grunt.config('karma:unit.autoWatch', true);

    grunt.task.run([
      'karma:unit'
    ]);
  });

  grunt.registerTask('build', [
    'clean:dist',
    'wiredep:sass',
    'bowerRequirejs',
    'concurrent:dist',
    'autoprefixer:dist',
    'processhtml:dist',
    'ngtemplates',
    'requirejs',
    //'rev'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};
