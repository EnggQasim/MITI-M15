<?php
//Encapsulation

class Car{
	function __construct(){
		$this->name= "" ;
		$this->model="" ;
		$this->color="" ;
	}
	
	function setName($name){
		$this->name = $name;
	}
	
	function setModel($model){
		$this->model = $model;
	}
	
	function setColor($color){
		$this->color = $color;
	}
	
	function getName(){
		echo $this->name."<br>";
	}
	
	function getModel(){
		echo $this->model."<br>";
	}
	function getColor(){
		echo $this->color."<br>";
	}
	
	function details(){
		echo "Car Name $this->name. Model $this->model. Color is $this->color. <br>";
	}
		
}

class Math{
		function add($no1=0,$no2=0){
			echo $no1 + $no2;
		}
		
		function add($no1=0, $no2=0, $no3=0){
			echo $no1 + $no2 + $no3;
		}
}


$obj1 = new Math();
$obj1->add(2,5);
$obj1->add(5,6,7);
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
</head>

<body>

<?php
$c1 = new Car();
$c2 = new Car();
$c3 = new Car();

$c1->setName("Toyota");
$c1->setModel("2018");
$c2->setColor("RED");

$c1->details();
$c2->details();
?>


</body>
</html>