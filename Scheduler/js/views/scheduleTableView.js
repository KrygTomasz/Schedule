
var TableView = Backbone.View.extend({

  render: function(){
    var html = '<div class="well">'+this.model.get('timeSpan')+'</div>'
    this.$el.html(html);

    return this;
  }
})
