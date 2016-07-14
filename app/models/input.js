var Backbone = require('backbone');

const DEFAULT_QUERY = "*";

var Model = Backbone.Model.extend({
  defaults: {
    "query": DEFAULT_QUERY
  },
  search: function(query) {
    // Default query
    if (query == "") {
      this.set({query: DEFAULT_QUERY});
    }
    else {
      this.set({query: query});
    }
  }
});

module.exports = Model;
