
var TaskView = Backbone.View.extend({

  render: function(){
    var rowsH = parseFloat( $("#row10").css("height"),10)+0.5;
    var timeStart = 37.6+rowsH*this.model.get("timeStart");
    var timeSpan = rowsH*this.model.get("timeSpan");
    console.log(timeStart);
    var taskClass = "task well ";


    var style = "margin-left: 50.25%;"
    style += "margin-top: "+timeStart+"px;";
    style += "height: "+timeSpan+"px;";
    var title = this.model.get('title');
    var details = this.model.get('details');

    var html = '<div class="'+taskClass+'" style=\"'+
    style+'\"><p class="text-center">'+title+
    '</p><p class="text-center small" style="font-size: 1.1vw;">'+details+'</p></div>';
    this.$el.html(html);
    return html;
  }
})
