module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: false,
        presets: ['es2015']
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'js/src',
          src: ['*.js'],
          dest: 'js/dist',
          ext: '.js',
          extDot: 'first'
        }]
      }
    },
    babel: {
      options: {
        sourceMap: false,
        presets: ['es2015']
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'spec',
          src: ['*.js'],
          dest: 'spec',
          ext: '.js',
          extDot: 'first'
        }]
      }
    },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/dist/*.js'],
        dest: 'js/script.main.js'
      }
    },
    uglify: {
      dist: {
        src: ['js/script.main.js'],
        dest: 'js/script.main.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');


  grunt.registerTask('default', ['babel', 'concat', 'uglify']);

};
