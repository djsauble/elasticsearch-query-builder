var Backbone = require('backbone');
var Result = require('./result');

var Collection = Backbone.Collection.extend({
  model: Result,
  inputModel: null,
  url: function() {
    var url = 'http://localhost:9200/_search?' +
              'q=' + this.inputModel.get('query') + '&' +
              'size=1000';
    return url;
  },
  parse: function(response, options) {
    return response.hits.hits;
  },
  setInputModel: function(model) {
    this.inputModel = model;
    this.inputModel.on('change', function(m) {
      this.fetch();
    }, this);
  }
});

module.exports = Collection;
