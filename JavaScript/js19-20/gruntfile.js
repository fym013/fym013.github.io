module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/dist/script.min.js'
      }
    },
    uglify: {
      dist: {
        src: ['js/dist/script.min.js'],
        dest: 'js/dist/script.min.js'
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/dist/style.min.css': 'css/src/sass.scss'
        }
      }
    },
    watch: {
      scripts: {
        files: ['js/src/*.js'],
        tasks: ['concat', 'uglify']
        },
      sass: {
        files: ['css/src/*.scss'],
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['concat', 'uglify','sass']);

};
