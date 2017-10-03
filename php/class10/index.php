<?php
class Man{
	function __construct($name,$course,$age=0,$fee=1200){
		$this->name = $name;
		$this->course =$course;
		$this->age = $age;
		$this->fee = $fee;		
	}
	
	
	function speak($say="Waoo"){
		echo $this->name." is Speaking ".$say."<BR>";
	}
	
	function listen($listning="~"){
		echo $this->name." is Listning ".$listning."<BR>";
	}
	
	function details(){
		echo "<ul><li>Name: $this->name</li> <li>Course: $this->course</li> <li>Age: $this->age</li></ul>";
	}
	
}


//inheritance wirasat
class Female extends Man{
	function speak($words="Nice"){
		echo $words;
	}
}
?>

<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
</head>

<body>
<?php
$arsalan = new Man("Arsalan","ADIT",18,1800);
$hassan = new Man("Hassan","BSCS",19);
$qasim = new Man("Qasim","ADIT",25);

$arsalan->listen("Asslam oalikum");
$hassan->listen("I am pakistani");
$arsalan->speak("I always Love with my country");
$hassan->details();
$arsalan->details();
$qasim->details();


$sana = new Female("Sana","ADIT");
$sana->details();
$sana->speak();
?>
</body>
</html>