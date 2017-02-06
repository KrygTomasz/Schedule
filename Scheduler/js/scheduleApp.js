var apiClient = new ApiClient('http://localhost');

var tableInst = new TableModel({"startHour":7});


var taskInst1 = new Task({"title":"Task 1", "timeStart":"7:00", "day": 0});
var taskInst2 = new Task({"title":"Task 2", "hourStart" : 8, "timeSpan":1.75});
var taskInst3 = new Task({"title":"Task 3", "hourStart" : 9 , "day":0});
var taskInst4 = new Task({"title":"Task 4", "hourStart" : 11, "timeSpan":2.5, "day":2});
var taskInst5 = new Task({"title":"Task 5", "hourStart" : 14 , "day":3});
var taskInst6 = new Task({"title":"Task 6", "hourStart" : 12 , "day":4, "timeStart":"09:30"});
var taskInst7 = new Task({"title":"Task 7", "hourStart" : 13  , "timeSpan":2.5, "day":2});
var taskInst8 = new Task({"title":"Task 8", "hourStart" : 8  , "timeSpan":0.5, "day":2});
var taskInst9 = new Task({"title":"Task 9", "hourStart" : 6  , "timeSpan":0.5, "day":2});
var taskInst10 = new Task({"title":"Task 10", "hourStart" : 10, "timeSpan":1.75});
var taskInst11 = new Task({"title":"Task 11", "hourStart" : 7, "timeSpan":1.5});
var taskCollection = new TaskCollection();

taskCollection.add(taskInst1);
taskCollection.add(taskInst2);
taskCollection.add(taskInst3);
taskCollection.add(taskInst4);
taskCollection.add(taskInst5);
taskCollection.add(taskInst6);
taskCollection.add(taskInst7);
taskCollection.add(taskInst8);
taskCollection.add(taskInst9);
taskCollection.add(taskInst10);
taskCollection.add(taskInst11);


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


//console.log(tableInst.hourToPixels(8,30));
