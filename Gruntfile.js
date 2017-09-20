module.exports = function (grunt) {
   'use strict';

   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      autoprefixer: grunt.file.readJSON('./grunt_config/autoprefixer.json'),
      coffee: grunt.file.readJSON('./grunt_config/coffee.json'),
      csscomb: grunt.file.readJSON('./grunt_config/csscomb.json'),
      cssmin: grunt.file.readJSON('./grunt_config/cssmin.json'),
      exec: grunt.file.readJSON('./grunt_config/exec.json'),
      htmlmin: grunt.file.readJSON('./grunt_config/htmlmin.json'),
      less: grunt.file.readJSON('./grunt_config/less.json'),
      uglify: grunt.file.readJSON('./grunt_config/uglify.json'),
      watch: grunt.file.readJSON('./grunt_config/watch.json')
   });

   grunt.loadNpmTasks('grunt-autoprefixer');
   grunt.loadNpmTasks('grunt-contrib-coffee');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-contrib-htmlmin');
   grunt.loadNpmTasks('grunt-contrib-less');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-watch');
   grunt.loadNpmTasks('grunt-csscomb');
   grunt.loadNpmTasks('grunt-exec');

   grunt.registerTask('default', ['exec', 'autoprefixer', 'csscomb:less', 'less', 'cssmin', 'coffee', 'uglify', 'htmlmin']);

   grunt.registerTask('build-less', ['autoprefixer', 'csscomb', 'less', 'cssmin']);
   grunt.registerTask('build-css', ['autoprefixer', 'cssmin']);
}
