<?php
session_start();
$error ="sr-only";

//check cookie value
if(isset($_COOKIE['name'])){
	$u=$_COOKIE['name'];
	$p=$_COOKIE['pass'];
}else{
	$u="";
	$p="";
}





//Run if block when click on submit button
if($_SERVER['REQUEST_METHOD']=="POST"){
	
	
	
	if($_REQUEST['user']=="admin" and $_REQUEST['pwd']=="admin"){
		$_SESSION["user"]=$_REQUEST["user"];
		if(isset($_REQUEST["remember"])){
			setcookie("name",$_REQUEST['user'], time()+60*60, "/");
			setcookie("pass",$_REQUEST['pwd'], time()+60*60, "/");
		}
		
		
		header("location: profile.php");
	}else{
		$error="";
	}
}


?>
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Bootstrap Example</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container">
  <h2>Login Panel</h2>
  <form action="" method="post">
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="text" class="form-control" id="email" placeholder="Enter email" name="user" value="<?php echo $u;?>">
    </div>
    <div class="form-group">
      <label for="pwd">Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd" value="<?php echo $p;?>">
    </div>
    <div class="checkbox">
      <label><input type="checkbox" name="remember"> Remember me</label>
    </div>
    <button type="submit" class="btn btn-default">Submit</button>
  </form>
  
    <div class="alert alert-danger alert-dismissable fade in <?php echo $error;?>">
    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
    <strong>Warning!</strong> Invalid User or Password
  </div>
</div>

</body>
</html>
