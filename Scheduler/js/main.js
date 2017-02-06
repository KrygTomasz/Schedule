var apiClient = new ApiClient();

$(document).ready(function () {

    $('#searchResults').width('215%');

    $("#searchInput").keydown(function() {
      setTimeout(function(){
      getSchedulesResults();
      }, 200);
    });

    $("#search").on("focusin",function() {
      getSchedulesResults();
       $("#searchResults").toggle();
   });

   $("#search").on("focusout",function() {
     setTimeout(function(){
       $("#searchResults").toggle();
     }, 200);

    });

    $( window ).resize(function() {
      renderSchedule();
    });

});

function getSchedulesResults(){
  apiClient.getPublicSchedules(populateSchedulesResults,$("#searchInput")[0].value);
}

function populateSchedulesResults(schedules){
  $("#searchResults").empty();
  $.each(schedules,function(i,schedule){
    $("#searchResults").append('<li class="list-group-item result" onclick="getScheduleFromServer(\''+schedule+'\')">'+schedule+'</a>')
  })
}
