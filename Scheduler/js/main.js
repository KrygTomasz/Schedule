$(document).ready(function () {
    $("#search").on("focusin",function() {
       $("#searchResults").toggle();
   });

   $("#search").on("focusout",function() {
     setTimeout(function(){
       $("#searchResults").toggle();
     }, 100);

    });

});
