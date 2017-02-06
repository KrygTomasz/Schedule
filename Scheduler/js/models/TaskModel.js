
var Task = Backbone.Model.extend({
  defaults:{
    day: 1,
    hourStart : 7,
    minuteStart : 30,
    timeSpan: 1,
    title: "Zajęcia",
    details: "308",
    hourStr: "08:30",
  },


  initialize : function() {
    if(this.get("timeStart")){
      var strArr = this.get("timeStart").split(":");
      this.set("hourStart", parseInt(strArr[0]));
      this.set("minuteStart", parseInt(strArr[1]));
    }

  }

});
