var $ = require('jquery');
var SearchView = require('./views/search');

// Once the DOM is ready, render the application
$(function() {
  var view = new SearchView;
  $("#app_root").html(view.render().el);
});
