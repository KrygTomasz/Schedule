<?php


require_once $_SERVER['DOCUMENT_ROOT']."\Schedule\Scheduler\SchedulerServer\DB\connection.php";

function getScheduleByName($scheduleName){
  global $host, $db_user, $db_password, $db_name;
  $db_connect = @new mysqli($host, $db_user, $db_password, $db_name);
  $queryStr = sprintf("SELECT * FROM `schedules` WHERE name = \"%s\"",$scheduleName);
  $result = @$db_connect->query($queryStr);
  $row = $result->fetch_assoc();
  mysqli_close($db_connect);
  return $row;
}

function getPublicSchedulesNames(){
  global $host, $db_user, $db_password, $db_name;
  $db_connect = @new mysqli($host, $db_user, $db_password, $db_name);
  $queryStr = sprintf("SELECT * FROM `schedules` WHERE private = 0");
  $result = @$db_connect->query($queryStr);
  $row = $result->fetch_assoc();
  $namesArr = array();
  while($row != NULL){
    array_push($namesArr,$row["name"]);
    $row = $result->fetch_assoc();
  }
  mysqli_close($db_connect);
  return $namesArr;
}

function getTasksByScheduleId($scheduleId){
		global $host, $db_user, $db_password, $db_name;
		$db_connect = @new mysqli($host, $db_user, $db_password, $db_name);
		$queryStr = sprintf("SELECT * FROM `tasks` WHERE schedule_id = %s",$scheduleId);
    $tasksArr = array();
    $result = @$db_connect->query($queryStr);
    $row = $result->fetch_assoc();
    while($row != NULL){
      array_push($tasksArr,$row);
      $row = $result->fetch_assoc();
    }
		mysqli_close($db_connect);
		return $tasksArr;
	}


  //echo(json_encode(getScheduleByName("Schedule 1")));

function getTasksByScheduleName($scheduleName){
  $schedule = getScheduleByName($scheduleName);
  if($schedule !=NULL && isset($schedule["schedule_id"])){
    $response = getTasksByScheduleId($schedule["schedule_id"]);
  }
  else {
    $response = "No such schedule";
  }
  return $response;
}

//echo(json_encode(getTasksByScheduleName("Schedule")));

?>
