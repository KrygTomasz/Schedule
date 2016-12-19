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

    SM = this;

      var apiClient = new ApiClient('http://localhost');
      var scheduleConverter = new ScheduleConverter([],5,13);
      apiClient.getGroupSchedule("GroupA",scheduleConverter.convertJSONToArray);

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

  showScheduleGrid(ScheduleJSON){
    var scheduleArray = scheduleConverter.convertJSONToArray(ScheduleJSON);

    var scheduleElementsId = [
      "#mondaySchedule",
      "#tuesdaySchedule",
      "#wednesdaySchedule",
      "#thursdaySchedule",
      "#fridaySchedule",
      "#saturdaySchedule"
    ];

		var rows = scheduleArray.length;
		var columns = scheduleArray[0].length;
    var hourTable = scheduleArray[0];
    var $table;
    for (var i = 1; i < rows; i++) {
      $table = SM.createHtmlListFromTwoTables(hourTable,scheduleArray[i]);
  		$(scheduleElementsId[i-1]).html($table);
    }
  }

  createHtmlListFromTwoTables(hourTable,activitiesTable) {
    var $htmlList = SM.createList();
    var $activity,$hour,$text;
    var $cell;
    for (var j = 1; j < hourTable.length; j++) {
      $hour = hourTable[j];
      $activity = activitiesTable[j];
      $text = $hour + " - " + $activity;
      $cell = SM.createCell($text);
      $htmlList.append($cell);
    }
    return $htmlList;
  }
}
