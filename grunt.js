var hbs = require("handlebars");
var path = require("path");

module.exports = function(grunt) {

  var file = grunt.file;

  grunt.initConfig({
    concat: {
      vendor: {
        src: ['vendor/jquery.js', 'vendor/ember-0.9.6.min.js', "vendor/ember-data.js"],
        dest: 'public/assets/javascripts/vendor.js'
      },
      ember: {
        src: ['app/ember/**/*.js'],
        dest: 'public/assets/javascripts/app.js'
      }
    },

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

  grunt.registerMultiTask("ember_templates", "Build Ember templates.", function() {
    var ember_files = file.expandFiles(this.data.ember);
    var build_into = this.data.to;
    var dest = this.data.dest;

    var ember_templates = {};
    for (i in ember_files) {
      ember_templates[path.basename(ember_files[i], ".handlebars")] = file.read(ember_files[i]);
    }

    //maybe unneeded?
    hbs.registerHelper('emberTmpl', function(tmpl) {
      return new hbs.SafeString(tmpl);
    });

    var template = hbs.compile(file.read(build_into));
    file.write(this.data.dest, template(ember_templates));
  });
  
  grunt.registerTask('default', 'concat ember_templates server watch');
  
};