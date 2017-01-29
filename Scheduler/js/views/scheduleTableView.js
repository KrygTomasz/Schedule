
var TableView = Backbone.View.extend({

  render: function(){
    var theads = '<th class="col-sm-2 col-xs-3"></th>';
    theads += '<th class="col-sm-2 col-xs-3">Monday</th>';
    theads += '<th class="col-sm-2 col-xs-3">Tuesday</th>';
    theads += '<th class="col-sm-2 col-xs-3">Wednesday</th>';
    theads += '<th class="col-sm-2 col-xs-3">Thursday</th>';
    theads += '<th class="col-sm-2 col-xs-3">Friday</th>';

    var tbody = '<tr> <td><p class="text-left small ">0:00 -  0:30</p></td><td></td><td></td><td></td><td></td><td></td> </tr>';

    for(i = 0 ; i < 10 ; i++){
      tbody += '<tr> <td><p class="text-left small ">0:00 -  0:30</p></td><td></td><td></td><td></td><td></td><td></td> </tr>';
    }

    var table = '<table class="table table-striped table-bordered table-hover table-responsive"><thead><tr>'+theads+'</tr> </thead>'+'<tbody style="position: relative;">'+tbody+'</tbody>'+'</table>';
    var html = '<div class="container-fluid"><div class="row"><div class="table-limit col-lg-offset-3 col-lg-8 col-md-8 col-sm-10 col-xs-12 well">'
    +table
    +'</div></div></div>';
    this.$el.html(html);
    return this;
  }
})
