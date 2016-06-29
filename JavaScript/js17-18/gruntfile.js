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
    cssmin: { //описываем работу плагина минификации и конкатенации css.
      with_banner: {
        options: {
        banner: '/* My minified CSS */'  //комментарий который будет в output файле.
        },
        files: {
        'css/dist/style.min.css' : ['css/src/*.css']   // первая строка - output файл. массив из строк, какие файлы конкатенировать и минифицировать.
        }
      }
    },
    watch: { //описываем работу плагина слежки за файлами.
      scripts: {
        files: ['js/src/*.js'],  //следить за всеми js файлами в папке src
        tasks: ['concat', 'uglify']  //при их изменении запускать следующие задачи
        },
      css: {
        files: ['css/src*.css'], //следить за всеми css файлами в папке src
        tasks: ['cssmin'] //при их изменении запускать следующую задачу
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');


  grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'watch']);

};
