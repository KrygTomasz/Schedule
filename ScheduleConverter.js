function ScheduleConverter(daysTable,startHour,endHour){

  this.daysTable = ["monday","tuesday","wednesday","thursday","friday"];
  SC = this;


  this.convertJSONToArray = function(JSONObj){
    scheduleArray = [];
    row = ["---"];
    lol = JSONObj;
    for(i = startHour ; i <= endHour ; i++ ){
      row.push(i);
    }

    scheduleArray.push(row);

    for(i = 0 ; i < SC.daysTable.length ; i++ ){
      row = [SC.daysTable[i]];
      if(JSONObj[SC.daysTable[i]] != null){
        for(j = startHour ; j <= endHour ; j++ ){
          if(JSONObj[SC.daysTable[i]][j] == null){
            row.push("---");
          }else{
            row.push(JSONObj[SC.daysTable[i]][j]);
          }
        }
      }else{
        for(j = startHour ; j <= endHour ; j++ ){
          row.push("---");
        }
      }

      scheduleArray.push(row);
    }

    console.log(scheduleArray);

  }

}
