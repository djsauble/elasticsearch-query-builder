var Backbone = require('backbone');
var InputView = require('./input');
var InputModel = require('../models/input');
var ResultsView = require('./results');
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

    this.searchModel = new InputModel();

    this.collection = new ResultsModel;
    this.collection.setInputModel(this.searchModel);
    this.resultsView = new ResultsView({
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
