// JavaScript Document
function abc(){
	
	var totalMarks=500;
	
	var obtainedMarks=Number(document.getElementById("phy").value) + Number(document.getElementById("chem").value)+ Number(document.getElementById("maths").value)+ Number(document.getElementById("urdu").value)+ Number(document.getElementById("eng").value);
	
	var per = obtainedMarks * 100 / totalMarks;
	
	var grade="";
	
	
	
	
	
	
	document.getElementById("result").innerHTML="Total Marks "+totalMarks+" Obtained Marks is "+obtainedMarks+" your percentage is "+per+"%";
}