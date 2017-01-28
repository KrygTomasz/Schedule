// Namespace przyklad - w celu uniknęcia kolizji zmiennych

var TableModel = Backbone.Model.extend({
  defaults:{
    timeSpan : 18,
    timeInterval: 30,
    timeStartHour: 5
  },

});
