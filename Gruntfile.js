/*
 * grunt-json-dox
 * https://github.com/harscoet/grunt-json-dox
 *
 * Copyright (c) 2014 Donovan Harscoët
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    clean: {
      tests: ['tmp']
    },

    dox: {
      default_options: {
        options: {},
        files: {
          'tmp/default_options.json': ['test/fixtures/*.js']
        }
      },
      custom_options: {
        options: {
          wrap: ['{', '}']
        },
        files: [{
          src: ['test/fixtures/*.js'],
          dest: 'tmp/custom_options.json'
        }]
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', ['clean', 'dox', 'nodeunit']);

  grunt.registerTask('default', ['jshint', 'test']);

};