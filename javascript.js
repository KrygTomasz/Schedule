var apiClient = new ApiClient('http://localhost');
var scheduleConverter = new ScheduleConverter([],5,13);

//apiClient.getGroupSchedule("GroupA",scheduleConverter.convertJSONToArray); <-- example

class scheduleManager {
  constructor(schedule) {
    this.schedule = schedule;
  }

  getScheduleById(scheduleId) {
	  document.getElementById(scheduleId).innerHTML = scheduleId;
  }
}

var showSchedule = function(id) {
	var scheduleId = id + "Schedule";
	var schedule = document.getElementById(scheduleId);

	var sc = new scheduleManager("plan zajec");
	sc.getScheduleById(scheduleId);

	schedule.classList.toggle("hidden");
}
