<?php 
session_start();
$user_name = $_POST['user_name'];
$password = $_POST['password'];

$username = 'grok_beta_01';
$pass = '@1grok';


if ($user_name == $username && $password == $pass) {
	echo "1";
	$_SESSION['user'] = $username;
}
else{
	echo "0";
}

?>