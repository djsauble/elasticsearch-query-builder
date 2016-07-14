var Backbone = require('backbone');
var Result = require('./result');

var Collection = Backbone.Collection.extend({
  model: Result,
  searchModel: null,
  url: function() {
    var url = 'http://localhost:9200/_search?' +
              'q=' + this.searchModel.get('query') + '&' +
              'size=1000';
    return url;
  },
  parse: function(response, options) {
    return response.hits.hits;
  },
  setSearchModel: function(model) {
    this.searchModel = model;
    this.searchModel.on('change', function(m) {
      this.fetch();
    }, this);
  }
});

module.exports = Collection;
