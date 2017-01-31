var TaskCollectionView = Backbone.View.extend({

  render: function(){
    this.collection.each(function(task){
      var taskView = new TaskView({model: task});
      console.log(taskView.render());
      this.$el.append(taskView.render());
    },this
    );
    return this;
  },

  addTask: function(task){
    var taskView = new TaskView({model : task});
    this.$el.append(taskView.render());
  }
})
