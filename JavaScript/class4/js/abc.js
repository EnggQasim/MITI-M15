// JavaScript Document
var row ='';

function qasim(){
	name =document.getElementById("name").value;
	fname=document.getElementById("fname").value;
	course=document.getElementById("course").value;
	
	newrow = '<tr><td>'+name+'</td><td>'+fname+'</td> <td>'+course+'</td></tr>';
	
	row += newrow;
	
	document.getElementById('show').innerHTML=row;
	//Remove Text box values
	document.getElementById("name").value="";
	document.getElementById("fname").value="";
	document.getElementById("course").value="";
}


function newQasim(){
	name =document.getElementById("name").value;
	fname=document.getElementById("fname").value;
	course=document.getElementById("course").value;

	//newrow = '<td>'+name+'</td><td>'+fname+'</td> <td>'+course+'</td>';
	
	newrow = 'asfda';
	
	node = document.createElement('tr');
	
	node.appendChild(newrow);
	
	document.getElementById('data').appendChild(node);
	
	
	
}