var Backbone = require('backbone');
var Result = require('./result');

var Collection = Backbone.Collection.extend({
  model: Result,
  query: '*',
  url: function() {
    var url = 'http://localhost:9200/_search?q=' + this.query;
    return url;
  },
  parse: function(response, options) {
    return response.hits.hits;
  }
});

module.exports = Collection;
