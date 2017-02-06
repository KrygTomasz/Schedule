function ApiClient(server){

  this.getPublicSchedules = function(method, partialName){
    $.ajax({
  		type: 'GET',
  		url: '/schedule/Scheduler/SchedulerServer/Api/SchedulerApi.php/publicSchedules/?scheduleName='+partialName,
  		success: function(data){
  			response = $.parseJSON(data);
  			method(response);
  			}
  		});
  }

  this.getScheduleByName = function(method, scheduleName){
    $.ajax({
  		type: 'GET',
  		url: '/schedule/Scheduler/SchedulerServer/Api/SchedulerApi.php/schedules/?scheduleName='+scheduleName,
  		success: function(data){
  			response = $.parseJSON(data);
  			method(response);
  			}
  		});
  }

}
