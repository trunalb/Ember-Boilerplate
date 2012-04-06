module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      vendor: {
        src: ['vendor/jquery.min.js', 'vendor/ember.min.js'],
        dest: 'public/assets/javascripts/vendor.js'
      },
      ember: {
        src: ['app/ember/app.js', 'app/ember/lib/*.js','app/ember/**/*.js'],
        dest: 'public/assets/javascripts/app.js'
      }
    },

    // Copies over static assets without touching them.
    assets: {
      folder: 'app/assets/',
      src: ['app/assets/**'],
      ignore: ['app/assets/**/*.less', 'app/assets/**/README.md'],
      dest: 'public/assets/'
    },

    /*
    less: {
       index: {
        files: {
          "public/assets/stylesheets/index.css": "app/assets/stylesheets/index.less"
        }
      }
    },
    */

    // silly at the moment, but keeps the server alive. will update with
    // more soon, like rebuild templates and LESS on change and such.
    watch: {
      files: "app/",
      tasks: "default"
    },

    ember_templates: {
      app: {
        ember: ["./app/ember/templates/*.handlebars"],
        to: "./app/templates/index.handlebars",
        dest: 'public/index.html'
      }
    },

    server: {
      port: 8020,
      base: './public'
    }
  });
  
  grunt.registerTask('default', 'concat ember_templates assets server watch');
  grunt.registerTask('build', 'concat ember_templates assets')
  
};