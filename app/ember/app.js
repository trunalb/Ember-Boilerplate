window.{%= ember_namespace %} = Ember.Application.create({
  ready: function() {
    this._super();
    // this is a good place for any app initialization code.
    // it's also where i'd recommend placing a StateManager, if you use one,
    // since you want to make sure the templates of the views have loaded before you
    // go to their state
  }
});