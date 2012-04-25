# Ember-Boilerplate

_(Ember Boilerplate & Charcoal are very much a work-in-progress at the moment! Feel free to contribute suggestions or code.)_

## Getting Started

Rather than simply cloning the repo and using that as a template, the Ember Boilerplate template is created by an init task in the build tool it uses, [Charcoal](https://github.com/thomasboyt/Charcoal). This makes it much easier to get up-and-running with a customized app. Charcoal also includes tasks to build various assets for Ember apps.

To create a new app:

```
$ git clone git://github.com/thomasboyt/Charcoal.git
$ sudo npm install -g Charcoal/
$ charcoal init:ember
```

And you'll be ready to go.

## Building with Charcoal

_(todo. for now, you can see the `tasks/` directory in Charcoal's repo to see the tasks that Charcoal adds on top of grunt, and of course you can look at the Gruntfile to see how it's configured - it's mostly self documenting)_

The `ember_template` task: This task concatenates your Ember templates (in `app/ember/templates`) into your page templates (in `app/pages`) wherever you've used the `{{ember_template}}` or `{{ember_named_template}}` Handlebars tags. This makes it easier to separate and reuse templates.

## File structure

This is still in flux, any suggestions are appreciated.

* app/
    * assets/
        * stylesheets/
        * images/
        * javascripts/
    * ember/
        * controllers/
        * lib/ - Loaded before the Ember app.
        * models/
        * templates/ - *Ember templates* go here.
        * views/
        * app.js - Gets concatenated first to the compiled JS, except for `lib/`. Should contain your `Ember.Application.create()` namespace 
    * pages/ - *Page templates* go here.
* vendor/
    * jquery.min.js
    * ember.min.js
* public/

## Todo/Roadmap

In the Wiki [here](https://github.com/thomasboyt/Charcoal/wiki/Todo), because I got annoyed that I had to recommit this readme every time I came up with another idea.

## License
Copyright (c) 2012 Thomas Boyt 
Licensed under the MIT license.
