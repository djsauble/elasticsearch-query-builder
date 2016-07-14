var Backbone = require('backbone');

var View = Backbone.View.extend({
  tagName: 'li',
  render: function() {
    var attr = this.model.get('_source');

console.log(attr);
    this.$el.html(`${attr.group}:${attr.name}:${attr.version}`);

    return this;
  }
});

module.exports = View;
