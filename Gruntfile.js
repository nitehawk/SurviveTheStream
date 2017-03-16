module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    babel: {
      options: {
        sourceMap: true,
      },
      dist: {
        files: {
          'dist/sts.js': 'src/sts.js'
        }
      }
    },
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          require: 'babel-register'
        },
        src: ['test/**/*.js']
      }
    },
    release: {
      options: {
        tagName: 'v<%= version %>',
        commitMessage: 'Prepared to release <%= version %>.'
      }
    },
    jshint: {
      options: {
        "curly": true,
        "eqeqeq": true,
        "eqnull": true,
        "nocomma": true,
        "esversion": 6
      },
      uses_defaults: ['src/**/*.js', 'test/**/*.js', 'Gruntfile.js']
    },
    watch: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      tasks: ['jshint','test']
    }
  });

  // load all grunt tasks
  require('matchdep').filterDev(['grunt-*', '!grunt-cli']).forEach(grunt.loadNpmTasks);

  grunt.registerTask('test', ['mochaTest']);
  grunt.registerTask('test:watch', ['watch']);
  grunt.registerTask('default', ['test']);
};
