module.exports = function(grunt) {

  grunt.initConfig({

    /*

    Main build tasks

    */

    // Compiles your JS into two files. Order matters. So if you have a file that 
    // depends on something loaded previously, make sure it's loaded first, either by
    // putting it in app/ember/lib or by listing its specific load order.
    //
    // i.e. if "app/ember/controllers/people-controller.js" depends on something in
    // "app/ember/models/person.js", your src array should say something like:
    // src: ["app/ember/app.js", "app/ember/lib/*.js", "app/ember/models/person.js",
    //       "app/ember/controllers/people-controller.js", "app/ember/**/*.js"]
    //
    // In general, needing to specify build order isn't common with the way Ember 
    // is structured, but it does happen.
    concat: {
      vendor: {
        src: ['vendor/jquery.min.js', 'vendor/ember.min.js'],
        dest: 'public/assets/javascripts/vendor.js'
      },
      ember: {
        src: [
          'app/ember/lib/*.js',
          'app/ember/app.js', 
          'app/ember/**/*.js'
        ],
        dest: 'public/assets/javascripts/app.js'
      }
    },

    // Copies over static assets without touching them. Ignore any files you
    // don't want to serve.
    assets: {
      folder: 'app/assets/',
      ignore: ['app/assets/**/*.less', 'app/assets/**/README.md'],
      dest: 'public/assets/'
    },

    // Uncomment for Less build support.
    /*
    less: {
       index: {
        files: {
          "public/assets/stylesheets/main.css": "app/assets/stylesheets/main.less"
        },
        options: {
          paths: [__dirname + "/app/assets/stylesheets/"] //required for @import to work
        }
      }
    },
    */

    // Compiles your ember templates into your page templates wherever you use an
    // {{ember_template}} or {{ember_named_template}} tag.
    ember_templates: {
      app: {
        ember: ["./app/ember/templates/*.handlebars"],
        to: "./app/pages/index.handlebars",
        dest: 'public/index.html'
      }
    },

    /*

    Dist tasks

    */

    // Minifies your JavaScript.
    min: {
      ember: {
        src: ['public/assets/javascripts/app.js'],
        dest: 'public/assets/javascripts/app.min.js'
      }
    },

    // Minifies your CSS (including previously built LESS).
    mincss: {
      "public/assets/stylesheets/main.min.css": [
        "public/assets/stylesheets/main.css"
      ]
    },

    /*

    Server tasks

    */

    // Watches for changes in your files while the server is running.
    // Remember to change the paths here if you change the paths on your concat,
    // templates, or assets tasks.
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
    },

    server: {
      port: 8020,
      base: './public'
    }


  });

  /*

  Alias tasks

  */

  // build - Builds out a static site.
  // dist - Builds & minifies a static site.
  // charcoal_server (default) - Builds out a static site (without minifying) and serves 
  //    it, as well as watching for updates.

  if (grunt.config("less")) {
    grunt.registerTask('build', 'concat ember_templates assets less');
    grunt.config.escape("watch.less", {
      files: "app/assets/stylesheets/**/*.less",
      tasks: "less"
    });
  }
  else {
    grunt.registerTask('build', 'concat ember_templates assets');
  }

  grunt.registerTask('dist', 'build min mincss');
  grunt.registerTask('charcoal_server', 'build server watch');

  grunt.registerTask('default', 'charcoal_server');

};