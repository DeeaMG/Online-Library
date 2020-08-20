<?php
	$mysqli = new mysqli("xxxx","xxxx","xxxx","xxxx");

	// Check connection
	if ($mysqli -> connect_errno) {
		echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
		exit();
	}

	$username = $_POST['username'];
	$mail = $_POST['mail'];
	$pass = $_POST['pass'];
	$pass_repeat = $_POST['pass_repeat'];
	
	
	if (!filter_var($mail, FILTER_VALIDATE_EMAIL) && !preg_match("/^[a-zA-Z0-9]*$/", $username))
	{
		header("Location: ../html/sign_up.php?error=invalidusernamemail");
		exit();
	}
	else if(!filter_var($mail, FILTER_VALIDATE_EMAIL))
	{
		header("Location: ../html/sign_up.php?error=invalidemail&username=".$username);
		exit();
	}
	else if (!preg_match("/^[a-zA-Z0-9]*$/", $username))
	{
		header("Location: ../html/sign_up.php?error=invalidusername&mail=".$mail);
		exit();
	}
	else if(!($pass === $pass_repeat))
	{
		header("Location: ../html/sign_up.php?error=passcheck&username=".$username."&mail=".$mail);
		exit();
	}
	else
	{
		$sql = "SELECT userName, email FROM account WHERE userName=? AND email=?";
		$stmt = $mysqli -> stmt_init();
		if(!($stmt -> prepare($sql)))
		{
			header("Location: ../html/sign_up.php?error=sqlerrsel");		
			exit();
		}
		else
		{
			$stmt -> bind_param("ss", $username, $mail);
			$stmt -> execute();
			$stmt -> store_result();
			$resultCheck = $stmt -> num_rows();
			
			if($resultCheck > 0)
			{
				header("Location: ../html/sign_up.php?error=usermailtaken");		
				exit();
			}
			else
			{
				$sql = "INSERT INTO account (userName, email, password) VALUES (?, ?, ?)";
				$stmt = $mysqli -> stmt_init();
				if(!$stmt -> prepare($sql))
				{
					header("Location: ../html/sign_up.php?error=sqlerrins");		
					exit();
				}
				else
				{
					$stmt -> bind_param("sss", $username, $mail, $pass);
					$stmt -> execute();
					header("Location: ../html/log_in.php?sigup=success");		
					exit();
				}
			}
		}
	}
	
	$stmt -> close();
	$mysqli -> close();
	
?>
