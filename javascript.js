var apiClient = new ApiClient('http://localhost');
var scheduleConverter = new ScheduleConverter([],5,13);
var SM;
//apiClient.getGroupSchedule("GroupA",scheduleConverter.convertJSONToArray); <-- example

var showSchedule = function(id) {

	var scheduleId = id + "Schedule";
	var schedule = document.getElementById(scheduleId);

	var sc = new scheduleManager("plan zajec");
  apiClient.getGroupSchedule("GroupA",sc.showScheduleGrid);
}
