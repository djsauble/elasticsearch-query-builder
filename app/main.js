var $ = require('jquery');
var View = require('./views/search');
var Results = require('./models/results');

// Once the DOM is ready, render the application
$(function() {
  var results = new Results;
  var view = new View({
    collection: results
  });
  $("#app_root").html(view.render().el);

  results.fetch();
});
