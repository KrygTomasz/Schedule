var TaskCollectionView = Backbone.View.extend({

  render: function(){
    this.$el.empty();
    this.collection.each(function(task){
      var taskView = new TaskView({model: task});
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
