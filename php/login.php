<?php 
session_start();
$user_name = $_POST['user_name'];
$password = $_POST['password'];

$username = 'vinay';
$pass = 'password';


if ($user_name == $username && $password == $pass) {
	echo "1";
	$_SESSION['user'] = $username;
}
else{
	echo "0";
}

?>