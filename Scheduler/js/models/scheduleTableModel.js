var TableModel = Backbone.Model.extend({
  defaults:{
    timeSpan : 18,
    startHour: 5
  },

  hourToRows: function(hour,mins){

    return "To jest "+this.get("timeSpan")+":"+this.get("startHour")+"rowow."
  }

});
