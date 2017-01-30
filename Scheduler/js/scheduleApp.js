

var tableInst = new TableModel({});
var taskInst = new TaskModel({});

var tableView = new TableView({el: "#plan", model : tableInst});
tableView.render();

var taskView = new TaskView({el: "#taskContainter", model : taskInst});
taskView.render();
