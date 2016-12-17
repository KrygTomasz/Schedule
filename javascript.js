class scheduleManager {
  constructor(schedule) {
    this.schedule = [
			["hour/day",	"Monday",	"Tuesday",	"Wednesday",	"Thursday",	"Friday", "Saturday"],
			["8:00-9:00",		"Mata",		"",			"Mata",			"Przyrka",	"", ""],
			["9:00-10:00",	"Mata",		"wuf",		"Mata",			"Przyrka",	"", ""],
			["10:00-11:00",	"Polak",	"Angol",	"Mata",			"WDŻ",		"Hista", ""],
			["11:00-12:00",	"Rela",		"Niemiec",	"Mata",			"GZW",		"Chemia", ""],
			["12:00-13:00",	"Mata",		"Polak",	"Mata",			"",			"Biola", ""],
			["13:00-14:00",	"",			"Mata",		"Mata",			"",			"Fiza", ""],
			["14:00-15:00",	"",			"",			"Mata",			"",			"Zajebany", ""],
			["15:00-16:00",	"",			"",			"Mata",			"",			"Piątek", ""],
			["16:00-17:00",	"",			"",			"Mata",			"",			"", ""],
		];
  }

  createCell(data) {
  	var $square = $("<a />", {
          class: 'list-group-item'
      });
  	$square.append(data);
  	return $square;
  }

  createList() {
  	var $row = $("<div />", {
          class: 'list-group'
      });
  	return $row;
  }

  getScheduleById(scheduleId) {
    var scheduleNames = {}
    scheduleNames["mondaySchedule"] = 1;
    scheduleNames["tuesdaySchedule"] = 2;
    scheduleNames["wednesdaySchedule"] = 3;
    scheduleNames["thursdaySchedule"] = 4;
    scheduleNames["fridaySchedule"] = 5;
    scheduleNames["saturdaySchedule"] = 6;

		var rows = this.schedule.length;
		var columns = this.schedule[0].length;
    var $cell;
    var $table = this.createList();
		for (var i = 1; i < rows; i++) {
      var $text = this.schedule[i][0] + "   " + this.schedule[i][scheduleNames[scheduleId]];
      $cell = this.createCell($text);
      $table.append($cell);
    }
		$("#"+scheduleId).html($table);
  }
}

var showSchedule = function(id) {
	var scheduleId = id + "Schedule";
	var schedule = document.getElementById(scheduleId);

	var sc = new scheduleManager("plan zajec");
	sc.getScheduleById(scheduleId);

	schedule.classList.toggle("hidden");
}
