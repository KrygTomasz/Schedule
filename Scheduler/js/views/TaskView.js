
var TaskView = Backbone.View.extend({

  render: function(){

    

    var style = "margin-left: 50.35%;";
    var title = "Zajęcie drugie";
    var details = "det..";

    var html = '<div class="task well" style=\"'+
    style+'\"><p class="text-center">'+title+
    '</p><p class="text-center small">'+details+'</p></div>';

    this.$el.html(html);
    return this;
  }
})
