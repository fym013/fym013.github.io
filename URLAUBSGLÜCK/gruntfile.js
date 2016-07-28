module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['js/src/*.js'],
        dest: 'js/dist/script.main.js'
      }
    },
    uglify: {
      dist: {
        src: ['js/dist/script.main.js'],
        dest: 'js/dist/script.main.js'
      }
    },
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/dist/style.main.css': 'css/src/sass.scss'
        }
      }
    },
    watch: {
      scripts: {
        files: ['js/src/script.js'],
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
