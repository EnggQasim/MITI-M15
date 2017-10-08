<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
</head>

<body>
<?php
if($_SERVER['REQUEST_METHOD']=="POST"){
	$conn = new MySQLi("localhost","root","","miti");
	if($conn->connect_error)die("Sorry");
	$name = $_REQUEST['txtName'];
	$fname = $_REQUEST['txtFName'];
	$fee = $_REQUEST['txtFee'];
	
	$sql ="insert into students(name, fatherName, fee) values('$name','$fname',$fee);";
	
	$check=$conn->query($sql);
	if($check){
		echo "Successfully add in database";
	}
	
}
?>

<form id="form1" name="form1" method="post">
  <label for="textfield">Name:</label>
  <input type="text" name="txtName" id="textfield">
  <label for="textfield2">Father's Name:</label>
  <input type="text" name="txtFName" id="textfield2">
  <label for="textfield3">Fee:</label>
  <input type="text" name="txtFee" id="textfield3">
  <input type="submit" name="submit" id="submit" value="Submit">
</form>
</body>
</html>