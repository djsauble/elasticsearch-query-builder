var Backbone = require('backbone');

var View = Backbone.View.extend({
  tagName: 'p',
  collection: null,
  initialize: function() {
    var me = this;
    this.collection.on('update', this.render, this);
  },
  render: function() {
    this.$el.html(`${this.collection.length} search results found!`);

    return this;
  }
});

module.exports = View;
