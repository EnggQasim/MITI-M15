// JavaScript Document
function abc(){
	
	var totalMarks=500;
	
	var obtainedMarks=Number(document.getElementById("phy").value) + Number(document.getElementById("chem").value)+ Number(document.getElementById("maths").value)+ Number(document.getElementById("urdu").value)+ Number(document.getElementById("eng").value);
	
	var per = obtainedMarks * 100 / totalMarks;
	
	var grade="";
	
	
	if(per >=0 && per < 40){
	grade="Fail";	
} else if( per >= 40  && per < 50){
	grade="D";
}else if(per >=50 && per < 60){
	grade="C";
}else if(per >=60  && per < 70){
	grade="B";
}else if(per >=70 && per < 80){
	grade="A";
}else if(per >=80 && per <= 100){
	grade="A+";
}

	
	
	
	document.getElementById("result").innerHTML="Total Marks "+totalMarks+" Obtained Marks is "+obtainedMarks+" your percentage is "+per+"% YOUR GRADE IS <span>"+grade+"</span>";
}