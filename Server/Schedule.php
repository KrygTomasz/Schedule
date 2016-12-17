<?php

	$method = $_SERVER['REQUEST_METHOD'];
		switch($method){
			case 'GET':
        $response = json_encode(getSchedule("GroupA"));
				echo($response);
				break;

    }

function getSchedule($scheduleName){
  $xmlFile = simplexml_load_file($scheduleName.".xml");

  $scheduleArray = array();

  foreach ($xmlFile as $day) {
    $dayArray = [];
    $dayName = $day->attributes();

    echo "</br>";

    foreach ($day as $lesson) {
      $lessonTime = $lesson->attributes()."";
      $lessonName = $lesson."";
      $dayArray[$lessonTime] = $lessonName;
    }

    $scheduleArray[$dayName.""] = $dayArray;


  }

  return $scheduleArray;
}

?>
