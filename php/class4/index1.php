<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Untitled Document</title>
</head>

<body>
<h1>String function</h1>
<?php
$name = "Muhammad Qasim";
echo $name."<br>";
// strlen() function count total characters
echo strlen($name). "<br>";
// str_word_count() function count total words
echo str_word_count($name). "<br>";

//str_replace() function replace old text with new  text
echo str_replace("Qasim","Aslam",$name)."<br>";

//strpos() function find postion of finding text
echo strpos($name,"Qasim")."<br>";


//strrev() function print in reverse order
echo strrev($name)."<br>";

echo "<h1>Pakistan zinda bad</h1>";

echo chr(65)."<br>"; 
$str = "Hello world!";
echo chunk_split($str,1," ");


?>
</body>
</html>