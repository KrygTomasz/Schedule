<?php
require_once $_SERVER['DOCUMENT_ROOT']."\Schedule\Scheduler\SchedulerServer\Api\Utils.php";
require_once $_SERVER['DOCUMENT_ROOT']."\Schedule\Scheduler\SchedulerServer\DB\DbInterface.php";

	session_start();

		//if (!isset($_SESSION['logged_on']))
    if (isset($_SESSION['logged_on']))
		{
			echo('Not logged');
			exit();
		}
		else
		{
      $method = $_SERVER['REQUEST_METHOD'];
					switch($method)
					{
						case 'GET':
							$request = getRequestType($_SERVER['REQUEST_URI']);
							switch($request)
							{
								case "schedules":

									//eg. http://localhost/schedule/Scheduler/SchedulerServer/Api/SchedulerApi.php/schedules
                  if(isset($_GET['scheduleName'])){
                    $response = json_encode(getTasksByScheduleName($_GET['scheduleName']));
                    echo($response);
                  }
									break;
							}

              break;
          }
    }
?>
