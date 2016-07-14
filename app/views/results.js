var Backbone = require('backbone');
var ResultView = require('./result');

var View = Backbone.View.extend({
  tagName: 'ul',
  collection: null,
  results: [],
  initialize: function() {
    var me = this;
    this.collection.on('update', this.render, this);
  },
  render: function() {
    var me = this;

    // Remove old entries
    this.results.forEach(function(r) {
      r.remove();
    });
    this.results = [];

    // Add new entries
    this.collection.forEach(function(r) {
      var view = new ResultView({
        model: r
      });
      me.results.push(view);
      me.$el.append(view.render().el);
    });
    //this.$el.html(`${this.collection.length} search results`);

    return this;
  }
});

module.exports = View;
