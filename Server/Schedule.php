<?php

	$method = $_SERVER['REQUEST_METHOD'];
		switch($method){
			case 'GET':
      //http://localhost/Schedule/Server/Schedule.php?group=GroupA
        $groupName = $_GET['group'];
        $response = json_encode(getSchedule($groupName));
				echo($response);
				break;

    }

function getSchedule($scheduleName){
  if($xmlFile = @simplexml_load_file($scheduleName.".xml")){
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

?>
