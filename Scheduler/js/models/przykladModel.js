// Namespace przyklad - w celu uniknęcia kolizji zmiennych
var przyklad = przyklad || {};

przyklad.przykladowyModel = Backbone.Model.extend({

  defaults:{
    nazwa : "Nazwa domyslna",
    zmienna1 : "Domyślnie ustawiona zmienna1",
    zmienna2 : "Domyślnie ustawiona zmienna2"
  },

  initialize: function(){
    console.log("Instancja modelu została powołana : "+ this.get("nazwa"));

    this.on("change:nazwa",function(){
      console.log("Nastąpiła zmiana zmiennej \"nazwa\"");
    });
  }
});
