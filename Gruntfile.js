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
        sass: {
            options: {
                includePaths: ['scss/foundation/scss']
            },
            dist: {
                options: {
                    outputStyle: 'compressed'
                },
                files: {
                    'css/main.css': 'scss/main.scss'
                }
            }
        },

        autoprefixer: {
            // prefix all the files
            multiple_files: {
                expand: true,
                flatten: true,
                src: '*.css',
                dest: 'css/'
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
                files: ['scss/**/*.scss'],

                tasks: ['sass', 'autoprefixer'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },

            html: {
                files: ['*.html'],
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
                    base: '.',
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
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-sass');

    // Default task.
    // grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
    grunt.registerTask('default', ['connect', 'sass', 'autoprefixer', 'watch']);

};
