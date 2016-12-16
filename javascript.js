var init = function(initData) {
    $(document).ready(function () {
        //add columns to the the temp row object
		var schedule = [
			[initData,	"Monday",	"Tuesday",	"Wednesday",	"Thursday",	"Friday"],
			["8-9",		"Mata",		"",			"Mata",			"Przyrka",	""],
			["9-10",	"Mata",		"wuf",		"Mata",			"Przyrka",	""],
			["10-11",	"Polak",	"Angol",	"Mata",			"WDŻ",		"Hista"],
			["11-12",	"Rela",		"Niemiec",	"Mata",			"GZW",		"Chemia"],
			["12-13",	"Mata",		"Polak",	"Mata",			"",			"Biola"],
			["13-14",	"",			"Mata",		"Mata",			"",			"Fiza"],
			["14-15",	"",			"",			"Mata",			"",			"Zajebany"],
			["15-16",	"",			"",			"Mata",			"",			"Piątek"],
			["16-17",	"",			"",			"Mata",			"",			""],
		];
		
		var rows = schedule.length;
		var columns = schedule[0].length;
		
		for (var i = 0; i < rows; i++) {
			$row = createRow();
			for (var j = 0; j < columns; j++) {
				$row.append(createCell(schedule[i][j]));
			}
			$("#schedule").append($row);
		}
    });
}

$(document).ready(function() {
	$('.nav li').click(function(e) {
		var $this = $(this);
		$clickedDay = $this.text();
		$('.nav li.active').removeClass('active');
		if (!$this.hasClass('active')) {
			$this.addClass('active');
		}
		e.preventDefault();
	});
})

var createCell = function(data) {
	var $square = $("<div />", {
        class: 'col-xs-2'
    });
	$square.append(data);
	return $square;
}

var createRow = function() {
	var $row = $("<div />", {
        class: 'row'
    });
	return $row;
}

















function loadXMLDoc(dname)
{
	if (window.XMLHttpRequest)
	{
		xhttp=new XMLHttpRequest();
	}
	else
	{
		xhttp=new ActiveXObject("Microsoft.XMLDOM");
	}

	xhttp.open("GET",dname,false);
	xhttp.send();
	return xhttp.responseXML;
}

var inittt = function() {
	xmlDocc=loadXMLDoc("C:/Users/Tomasz Kryg/Desktop/Plan/ss.xml");
	//var xml = "<?xml version='1.0' ?><doc><person><name>sachin</name><age>21</age></person><person><name>Akash</name><age>18</age></person></doc>";
	//Parse the givn XML
	var xmlDoc = $.parseXML( xmlDocc ); 
		
	var $xml = $(xmlDoc);

	// Find Person Tag
	var $person = $xml.find("person");

	$person.each(function(){
		
		var name = $(this).find('name').text(),
			age = $(this).find('age').text();
		
		$("#schedule").append('<li>' +name+ ' - ' +age+ '</li>');
    });

	//document.write(xmlDoc.getElementsByTagName("title")[0].childNodes[0].nodeValue + "   <br>");
	//document.write(xmlDoc.getElementsByTagName("authors")[0].childNodes[0].nodeValue + "<br>");
}
