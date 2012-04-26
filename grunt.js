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

    min: {
      ember: {
        src: ['public/assets/javascripts/app.js'],
        dest: 'public/assets/javascripts/app.min.js'
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
        },
        options: {
          paths: [__dirname + "/app/assets/stylesheets/"] //required for @import to work
        }
      }
    },
    */

    watch: {
      concat: {
        files: "app/ember/**/*.js",
        tasks: "concat"
      },
      templates: {
        files: "app/**/*.handlebars",
        tasks: "ember_templates"
      },
      assets: {
        files: "app/assets/**",
        tasks: "assets"
      },
      
      // less: {
      //   files: "app/assets/stylesheets/**/*.less",
      //   tasks: "less"
      // }
    },

    ember_templates: {
      app: {
        ember: ["./app/ember/templates/*.handlebars"],
        to: "./app/pages/index.handlebars",
        dest: 'public/index.html'
      }
    },

    server: {
      port: 8020,
      base: './public'
    }
  });
  
  // less
  // grunt.registerTask('default', 'concat ember_templates assets less server watch');
  // grunt.registerTask('dist', 'concat min ember_templates assets less server watch');

  grunt.registerTask('default', 'concat ember_templates assets server watch');
  grunt.registerTask('dist', 'concat min ember_templates assets server watch');

};