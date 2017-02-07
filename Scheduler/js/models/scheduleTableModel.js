var TableModel = Backbone.Model.extend({
  defaults:{
    timeSpan : 18,
    startHour: 5
  },

	hourToPixels: function(hour,mins) {

		var pixels = parseFloat( $("#headerMonday").css("height"),10);
		var startHour = this.get("startHour");
		var hourDistance = (hour - startHour)*2;
		var lastRow = startHour*2 + hourDistance;

		var lastRowPercentage = 0;
		if (mins > 30) {
			lastRow++;
			lastRowPercentage = (mins - 30) / 30;
		} else if (mins > 0) {
			lastRowPercentage = mins / 30;
		}

		for(var i = startHour*2 ; i < lastRow; i++){
			pixels += parseFloat( $("#row"+i+"").css("height"));
		}

		pixels += (parseFloat( $("#row"+lastRow+"").css("height")) * lastRowPercentage);

		return pixels;
	},

	dayToPixels: function(dayNumber) {

		var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

		var pixels = parseFloat( $("#hoursColumn").css("width"));

		for(var i = 0; i < dayNumber; i++) {
			if(i < days.length - 1) {
				var day = days[i]
				pixels += (parseFloat( $("#header"+day+"").css("width")));
			}
		}

		return pixels;

	},
	
	spanToPixels: function(hourStart, minuteStart, timeSpan) {
		
		if(timeSpan == 0) return 0;
		
		var pixels = 0;
		var tempSpan = timeSpan;
		var tempRowNumber = hourStart*2 + Math.floor(minuteStart/30);
		
		var firstBlockPercentage = 0;
		if (minuteStart > 30) {
			firstBlockPercentage = 1 - (minuteStart - 30) / 30;
		} else if (minuteStart > 0) {
			firstBlockPercentage = 1 - minuteStart / 30;
		}
		
		if(firstBlockPercentage != 0) {
			tempSpan = tempSpan - firstBlockPercentage;
			pixels += (parseFloat($("#row"+tempRowNumber+"").css("height")) * firstBlockPercentage);
			tempRowNumber++;
		}
		
		while(tempSpan>1) {
			pixels += (parseFloat($("#row"+tempRowNumber+"").css("height")));
			tempRowNumber += 1;
			tempSpan -= 1;
		}

		pixels = pixels + (parseFloat($("#row"+tempRowNumber+"").css("height")) * tempSpan);
		return pixels;
	}

});
