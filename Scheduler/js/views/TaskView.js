
var TaskView = Backbone.View.extend({

  render: function(){
    var taskClass = "task well ";

    var style = "margin-left: 50.25%;"
    //style += "margin-top: 120px;";
    //style += "height: 35px;";
    var title = this.model.get('title');
    var details = this.model.get('details');

    var html = '<div class="'+taskClass+'" style=\"'+
    style+'\"><p class="text-center">'+title+
    '</p><p class="text-center small" style="font-size: 1.1vw;">'+details+'</p></div>';
    this.$el.html(html);
    return this;
  }
})
