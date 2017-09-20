<?php
$error = "out";

if($_SERVER['REQUEST_METHOD']=="POST"){

	$name = $_REQUEST['user'];
	$pass = $_REQUEST['pwd'];
	if($name == "admin" and $pass == "admin"){
		echo"<h1>Pakistan</h1>";
		header('location: profile.php');
	}else{
		$error = "in";
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
  <h2>Student Managment System1</h2>
  <form class="form-horizontal" method="post">
    <div class="form-group">
      <label class="control-label col-sm-2" for="user">Email:</label>
      <div class="col-sm-10">
        <input type="text" class="form-control" id="user" placeholder="Enter email" name="user">
      </div>
    </div>
    <div class="form-group">
      <label class="control-label col-sm-2" for="pwd">Password:</label>
      <div class="col-sm-10">          
        <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd">
      </div>
    </div>
    <div class="form-group">        
      <div class="col-sm-offset-2 col-sm-10">
        <div class="checkbox">
          <label><input type="checkbox" name="remember"> Remember me</label>
        </div>
      </div>
    </div>
    <div class="form-group">        
      <div class="col-sm-offset-2 col-sm-10">
        <button type="submit" class="btn btn-default">Submit</button>
      </div>
    </div>
    
    <div class="alert alert-danger alert-dismissable fade <?php echo $error;?>">
    <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
    <strong>Warning</strong>Not Valid User Name or Password
  </div>
    
    
  </form>
</div>

</body>
</html>
