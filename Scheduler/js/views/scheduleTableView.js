
var TableView = Backbone.View.extend({

  render: function(){
    var theads = '<th class="col-lg-2 col-md-2 col-sm-2 col-xs-2"></th>';
    theads += '<th id="headerMonday" class="col-lg-2 col-md-2 col-sm-2 col-xs-2">Monday</th>';
    theads += '<th id="headerTuesday" class="col-lg-2 col-md-2 col-sm-2 col-xs-2">Tuesday</th>';
    theads += '<th id="headerThursday" class=".hidden-xs col-lg-2 col-md-2 col-sm-2">Thursday</th>';
    theads += '<th id="headerFriday" class=".hidden-xs col-lg-2 col-md-2 col-sm-2">Friday</th>';

    var tbody = '';

    var startH = 2*this.model.get('startHour');
    var span = this.model.get('timeSpan');

    for(i = startH ; i < startH+span ; i++){
      var h = Math.floor(i/2);
      if(i%2==0){
        tbody += '<tr> <td><p style="font-size: 1.1vw;">'+h+':00 - '+h+':30</p></td><td></td><td></td><td></td><td class=".hidden-xs"></td><td class=".hidden-xs"></td> </tr>';
      }
      else{
        tbody += '<tr> <td><p style="font-size: 1.1vw;">'+h+':30 - '+(h+1)+':00</p></td><td></td><td></td><td></td><td class=".hidden-xs"></td><td class=".hidden-xs"></td> </tr>';
      }
    }

    var table = '<table class="table table-striped table-bordered table-hover table-responsive"><thead><tr>'
    +theads
    +'</tr> </thead>'+'<tbody style="position: relative;">'
    +tbody
    +'</tbody>'+'</table>';

    var html = '<div class="container-fluid"><div class="row"><div class="table-limit col-lg-offset-3 col-lg-8 col-md-8 col-sm-10 col-xs-12 well"><div id="taskContainter"></div>'
    +table
    +'</div></div></div>';
    this.$el.html(html);
    return this;
  }
})
