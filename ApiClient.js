function ApiClient(server){
  this.server = server;

  this.getGroupSchedule = function(groupName,method){
    $.ajax({
  		type: 'GET',
  		url: '/Schedule/Server/Schedule.php/Schedule/?group='+groupName,
  		success: function(data){
  				method($.parseJSON(data));
  		}
  	});
  }

  this.getGroupsNames = function(method){
    $.ajax({
  		type: 'GET',
  		url: '/Schedule/Server/Schedule.php/Groups/',
  		success: function(data){
  				method($.parseJSON(data));
  		}
  	});
  }

}
