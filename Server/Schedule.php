<?php

	$method = $_SERVER['REQUEST_METHOD'];
	switch($method){
		case 'GET':
			$request = explode('/', $_SERVER['REQUEST_URI'])[4];
			switch($request){
				case 'Schedule':
				//http://localhost/Schedule/Server/Schedule.php/Schedule/?group=GroupA
					$groupName = $_GET['group'];
	        $response = json_encode(getSchedule($groupName));
					echo($response);
					break;
				case 'Groups':
				//http://localhost/Schedule/Server/Schedule.php/Groups/
					$response = json_encode(getGroupsNames());
					echo($response);
			}
			break;
  }

	function getSchedule($scheduleName){
	  if($xmlFile = @simplexml_load_file("Schedules/".$scheduleName.".xml")){
	    $scheduleArray = array();
	    foreach ($xmlFile as $day) {
	      $dayArray = [];
	      $dayName = $day->attributes();

	      foreach ($day as $lesson) {
	        $lessonTime = $lesson->attributes()."";
	        $lessonName = $lesson."";
	        $dayArray[$lessonTime] = $lessonName;
	      }

	      $scheduleArray[$dayName.""] = $dayArray;
	  	}

	  return $scheduleArray;
	  }else{
	    return "File not present!";
	  }
	}

	function getGroupsNames(){
		$groupsArray = [];
		$dir = new DirectoryIterator("Schedules/");
		foreach ($dir as $fileinfo) {
		    if (!$fileinfo->isDot()) {
						$groupsArray[] = str_replace(".XML","",$fileinfo->getFilename());
		    }
		}
		return $groupsArray;

	}


?>
