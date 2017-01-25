var instancja = new przyklad.przykladowyModel({
  nazwa : "Nazwa nadpisana",
  wartosc : 10.322,
  zmienna2 : "nie domyślna wartość"
});

console.log(instancja.toJSON());

instancja.set("wartosc", 11.321);
instancja.set("nazwa", "Zmieniona nazwa");
