function ApiClient(server){
  this.server = server;

  this.getGroupSchedule = function(groupName,method){
    $.ajax({
  		type: 'GET',
  		url: '/Schedule/Server/Schedule.php?group='+groupName,
  		success: function(data){
  				method($.parseJSON(data));
  		}
  	});
  }

}
