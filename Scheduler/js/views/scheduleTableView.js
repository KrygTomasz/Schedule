
var TableView = Backbone.View.extend({

  render: function(){
    var theads = '<th style="width:10%;" class=""></th>';
    theads += '<th style="width:16.6%;" class="">Monday</th>';
    theads += '<th style="width:16.6%;" class="">Tuesday</th>';
    theads += '<th style="width:16.6%;" class="">Wednesday</th>';
    theads += '<th style="width:16.6%;" class="hidden-xs">Thursday</th>';
    theads += '<th style="width:16.6%;" class="hidden-xs">Friday</th>';

    var tbody = '';

    var startH = 2*this.model.get('startHour');
    var span = this.model.get('timeSpan');

    for(i = startH ; i < startH+span ; i++){
      var h = Math.floor(i/2);
      if(i%2==0){
        tbody += '<tr> <td><p style="font-size: 1.2vw;">'+h+':00 -  '+h+':30</p></td><td></td><td></td><td></td><td class="hidden-xs"></td><td class="hidden-xs"></td> </tr>';
      }
      else{
        tbody += '<tr> <td><p style="font-size: 1.2vw;">'+h+':30 -  '+(h+1)+':00</p></td><td></td><td></td><td></td><td class="hidden-xs"></td><td class="hidden-xs"></td> </tr>';
      }
    }

    var table = '<table class="table table-striped table-bordered table-hover table-responsive"><thead><tr>'
    +theads
    +'</tr> </thead>'+'<tbody style="position: relative;">'
    +tbody
    +'</tbody>'+'</table>';

    var html = '<div class="container-fluid"><div class="row"><div class="table-limit col-lg-offset-3 col-lg-8 col-md-8 col-sm-10 col-xs-12 well">'
    +table
    +'</div></div></div>';
    this.$el.html(html);
    return this;
  }
})
