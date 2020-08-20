<?php
	$mysqli = new mysqli("xxxx","xxxx","xxxx","xxxx");

	// Check connection
	if ($mysqli -> connect_errno) {
		echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
		exit();
	}
	
	$mailUser = $_POST['userName'];
	$pass = $_POST['password'];

	if (empty($mailUser) || empty($pass)) 
	{
		header("Location: ../html/log_in.php?error=emptyfields");		
		exit();
	}
	else
	{	
		$sql = "SELECT * FROM account WHERE (userName = '" . $mailUser . "' OR email = '" . $mailUser . "') AND password = '" . $pass . "'";
		$stmt = $mysqli -> stmt_init();
		
		if(!$stmt -> prepare($sql))
		{
			header("Location: ../html/log_in.php?error=sqlerror");		
			exit();
		}
		else
		{
			$stmt -> bind_param("ss", $mailUser, $mailUser);
			$stmt -> execute();
			$result = $stmt -> get_result();
			
			if ($row = $result -> fetch_assoc())
			{
				$passCheck = $pass === $row['password'];
				if ($passCheck == false)
				{
					header("Location: ../html/log_in.php?error=wrongpassword");		
					exit();
				}
				else
				{
					session_start();
					$_SESSION['userId'] = $row['id'];
					$_SESSION['username'] = $row['userName'];
					
					header("Location: ../html/index.php?login=success");		
					exit();
				}
			}
			else
			{
				header("Location: ../html/log_in.php?error=nouser");		
				exit();
			}
		}
	}
	
?>