
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
    if(typeof this.get("timeStartStr") != "undefined"){
      var str =  this.get("timeStartStr");
      var strArr = str.split(":");
      this.set("hourStart", parseInt(strArr[0]));
      this.set("minuteStart", parseInt(strArr[1]));
    }

    if(typeof this.get("spanStr") != "undefined"){
      var str = this.get("spanStr");
      var strArr = str.split(":");
      var span = parseInt(strArr[0]) + (parseInt(strArr[1])/60);
      this.set("timeSpan", span*2);
    }

  }

});
