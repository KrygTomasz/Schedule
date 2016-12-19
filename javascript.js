var apiClient = new ApiClient('http://localhost');
var scheduleConverter = new ScheduleConverter([],5,13);
var SM;
//apiClient.getGroupSchedule("GroupA",scheduleConverter.convertJSONToArray); <-- example

var getSchedule = function(groupNumber) {
	//var scheduleId = id + "Schedule";
	//var schedule = document.getElementById(scheduleId);
	$('#wrapper').removeClass('hidden');
	var sc = new scheduleManager();
  apiClient.getGroupSchedule(groupNumber,sc.showScheduleGrid);
}
