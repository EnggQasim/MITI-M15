<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
</head>

<body>
<h1>Data types in PHP</h1>
<?php
// String
$name = "Muhammad Qasim";
echo var_dump($name)."<br>";

// intiger
$age = 22;
echo var_dump($age)."<br>";

// float
$fee = 12.75;
echo var_dump($fee)."<br>";

//boolean
$fan = true;
echo var_dump($fan)."<br>";

// Array
$names = array("Hassan","Danish","Salman","Bilal");
echo var_dump($names)."<br>";

//Object
class car{
	public function start(){
		echo "Car start <br>";
	}
	
	public function off(){
		echo "Car off";
	}
}

$c1 = new car;
echo var_dump($c1)."<br>";
$c1->start()."<br>";


// null
$name = null;
echo var_dump($name);
?>
</body>
</html>