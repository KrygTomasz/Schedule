$(document).ready(function () {

    $('#searchResults').width('215%');


    $("#search").on("focusin",function() {
       $("#searchResults").toggle();
   });

   $("#search").on("focusout",function() {
     setTimeout(function(){
       $("#searchResults").toggle();
     }, 100);

    });

});
