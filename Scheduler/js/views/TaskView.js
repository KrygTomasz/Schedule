
var TaskView = Backbone.View.extend({

  render: function(){
    var rowsH = parseFloat( $("#row14").css("height"),10);
    var rowsW = parseFloat( $("#headerMonday").css("width"),10);
    var timeStart = parseFloat( $("#headerMonday").css("height"),10)+rowsH*this.model.get("timeStart");
    var timeSpan = rowsH*this.model.get("timeSpan");
    var day = parseFloat( $("#row14").css("width"),10) +rowsW*(this.model.get("day"));
    console.log(timeStart);
    var taskClass = "task well ";


    var style = "margin-left: "+day+"px;"
    style += "margin-top: "+timeStart+"px;";
    style += "height: "+timeSpan+"px;";
    style += "width: "+rowsW+"px;";
    var title = this.model.get('title');
    var details = this.model.get('details');

    var html = '<div class="'+taskClass+'" style=\"'+
    style+'\"><p class="text-center">'+title+
    '</p><p class="text-center small" style="font-size: 1.1vw;">'+details+'</p></div>';
    this.$el.html(html);
    return html;
  }
})
