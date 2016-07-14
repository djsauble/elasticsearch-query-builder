var Backbone = require('backbone');
var InputView = require('./searchbox');
var SearchResultsView = require('./searchresults');
var SearchModel = require('../models/search');
var ResultsModel = require('../models/results');

var View = Backbone.View.extend({
  className: "search_app",
  search_results: 0,
  collection: null,
  inputView: null,
  resultsView: null,
  searchModel: null,

  initialize: function() {
    var me = this;

    this.searchModel = new SearchModel();

    this.collection = new ResultsModel;
    this.collection.setSearchModel(this.searchModel);
    this.resultsView = new SearchResultsView({
      collection: this.collection
    });

    this.inputView = new InputView({
      model: this.searchModel
    });
  },

  render: function() {

    // Add content to the DOM
    this.$el.append('<h1>Search Nexus</h1>');
    this.$el.append(this.inputView.el);
    this.$el.append(this.resultsView.render().el);

    // Fetch data
    this.collection.fetch();

    return this;
  }
});

module.exports = View
