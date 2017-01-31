var TaskCollectionView = Backbone.View.extend({

  render: function(){
    this.collection.each(function(model){
      console.log(model.toJSON());
    });
  }
})
