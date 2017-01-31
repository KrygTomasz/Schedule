

var tableInst = new TableModel({});
var taskInst1 = new TaskModel({});
var taskInst2 = new TaskModel({"title":"Lol"});
var taskInst3 = new TaskModel({});


var tableView = new TableView({el: "#plan", model : tableInst});
tableView.render();

var taskView1 = new TaskView({el: "#taskContainter", model : taskInst1});
//taskView1.render();

var taskView2 = new TaskView({el: "#taskContainter", model : taskInst2});
taskView2.render();

var taskView3 = new TaskView({el: "#taskContainter", model : taskInst3});
taskView3.render();
