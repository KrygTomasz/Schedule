class scheduleManager {
  constructor() {
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
      $table = SM.createHtmlListFromHourAndActivity(hourTable,scheduleArray[i]);
  		$(scheduleElementsId[i-1]).html($table);
    }
  }

  createHtmlListFromHourAndActivity(hourTable,activitiesTable) {
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
