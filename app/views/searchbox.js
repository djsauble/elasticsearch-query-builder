var Backbone = require('backbone');

var View = Backbone.View.extend({
  tagName: 'input',
  className: 'search_box',
  attributes: {
    'placeholder': 'Enter a query'
  },
  events: {
    'keyup': 'doSearch'
  },
  doSearch: function(e) {
    this.model.search(this.$el.val());
  }
});

module.exports = View;
