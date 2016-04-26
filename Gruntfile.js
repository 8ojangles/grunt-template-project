module.exports = function (grunt) {

    'use strict';

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
                '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
                '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
                '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
                ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',

        // Task configuration.
        includes: {
            files: {
                src: ['source/html_templates/pages/*.html'], // Source files
                dest: 'dist', // Destination directory
                flatten: true,
                cwd: '.',

                options: {
                    includeRegexp: /^(\s*)\&\&include\&\&\s+"(\S+)"\s*$/,
                    includePath: 'source/html_templates',
                    filenameSuffix: '.html',
                    silent: true,
                    debug: false
                    // banner: '<!-- I am a banner <% includes.files.dest %> -->'
                }
            }
        },

        sass: {
            options: {
                includePaths: ['source/scss/foundation/scss']
            },
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'dist/css/main.css': 'source/scss/main.scss'
                }
            }
        },

        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({browsers: ['last 3 versions']})
                ]
            },
            dist: {
                src: 'dist/css/*.css'
            }
        },

        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                src: ['lib/<%= pkg.name %>.js'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },

        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'dist/<%= pkg.name %>.min.js'
            }
        },

        jshint: {
            options: {
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {}
            },

            gruntfile: {
                src: 'Gruntfile.js'
            },

            lib_test: {
                src: ['lib/**/*.js', 'test/**/*.js']
            }

        },

        qunit: {
            files: ['test/**/*.html']
        },

        watch: {

          // old set up
          // gruntfile: {
          //   files: '<%= jshint.gruntfile.src %>',
          //   tasks: ['jshint:gruntfile']
          // },
          // lib_test: {
          //   files: '<%= jshint.lib_test.src %>',
          //   tasks: ['jshint:lib_test', 'qunit']
          // }
          // END old set up

            sass: {
                files: ['source/scss/**/*.scss'],

                tasks: ['sass', 'postcss'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },

            html: {
                files: ['dist/*.html', 'source/html_templates/**/*.html'],
                tasks: ['includes'],
                options: {
                    spawn: false,
                    livereload: true
                }
            }

        },

        connect: {
            server: {
                options: {
                    port: 9000,
                    base: 'dist',
                    hostname: '0.0.0.0',
                    protocol: 'http',
                    // livereload: true,
                    open: true
                }
            }
        }
    });

    // These plugins provide necessary tasks.
    // grunt.loadNpmTasks('grunt-contrib-concat');
    // grunt.loadNpmTasks('grunt-contrib-uglify');
    // grunt.loadNpmTasks('grunt-contrib-qunit');
    // grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-includes');

    // Default task.
    // grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
    grunt.registerTask('default', ['connect', 'includes', 'sass', 'postcss', 'watch']);

};
