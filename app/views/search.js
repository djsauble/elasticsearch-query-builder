var $ = require('jquery');
var Backbone = require('backbone');

var View = Backbone.View.extend({
  className: "search_app",
  search_results: 0,
  collection: null,

  initialize: function() {
    var me = this;

    this.collection.on('update', function(results) {
      me.search_results = results.length;
      me.render();
    });
  },

  render: function() {
    this.$el.html(`<h1>${this.search_results} search results found</h1>`);

    return this;
  }
});

module.exports = View
