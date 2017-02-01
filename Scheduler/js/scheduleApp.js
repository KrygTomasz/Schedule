

var tableInst = new TableModel({});
var taskInst1 = new Task({"title":"Task 1", "timeStart" : 0});
var taskInst2 = new Task({"title":"Task 2", "timeStart" : 1});
var taskInst3 = new Task({"title":"Task 3", "timeStart" : 17});
var taskCollection = new TaskCollection();

taskCollection.add(taskInst1);
taskCollection.add(taskInst2);
taskCollection.add(taskInst3);


var tableView = new TableView({el: "#plan", model : tableInst});
tableView.render();

var taskView1 = new TaskView({el: "#taskContainter", model : taskInst1});
//taskView1.render();

var taskView2 = new TaskView({el: "#taskContainter", model : taskInst2});
//taskView2.render();

var taskView3 = new TaskView({el: "#taskContainter", model : taskInst3});
//taskView3.render();

var taskCollectionView = new TaskCollectionView({el: "#taskContainter", collection: taskCollection} );

taskCollectionView.render();
