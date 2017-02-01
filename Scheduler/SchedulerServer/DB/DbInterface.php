<?php


require_once $_SERVER['DOCUMENT_ROOT']."\Schedule\Scheduler\SchedulerServer\DB\connection.php";

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

  echo(json_encode(getTasksByScheduleId(1)));

?>
