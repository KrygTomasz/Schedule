var apiClient = new ApiClient('http://localhost');
var scheduleConverter = new ScheduleConverter([],5,13);
var SM;

$.ajax({
  url: '/Schedule/Server/Schedules',
	success: function(data){
		populateDropDownListWithGroups(data);
	}
});

var populateDropDownListWithGroups = function(schedules) {
	var $listItems = createGroupList();
		$(schedules).find("a:contains(.XML)").each(function(){
				// will loop through
				var $scheduleFile = $(this).attr("href");
				var $fileName = $scheduleFile.substr(0, $scheduleFile.lastIndexOf('.'));
				var $listItem = createListItem($fileName);
				$listItems.append($listItem);
									alert($fileName);
		 });
		 $('#dropDownMenu').html($listItems);
}

var createGroupList = function() {
	var $groupList = $("<ul />", {
				id: 'groupList',
				class: 'input-group'
		});
	return $groupList;
};

var createListItem = function(data) {
	var $item = $("<li />", {
				id: data,
				onclick: 'getSchedule(this.id)'
		});
	$item.append(data);
	return $item;
};

var getSchedule = function(groupNumber) {
	//var scheduleId = id + "Schedule";
	//var schedule = document.getElementById(scheduleId);
	$('#wrapper').removeClass('hidden');
	var sc = new scheduleManager();
  apiClient.getGroupSchedule(groupNumber,sc.showScheduleGrid);
}
