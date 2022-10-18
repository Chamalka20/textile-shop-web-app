<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<link rel="stylesheet" href="../css/discount.css">
</head>

<body>

<form action="../dis_add" method="post">
	discount title<input type="text" name="disname"><br>
	value<input type="text" name="disvalue"><br>
	applies to<br>
		<input type="radio" name="disaddtype" value="all"  onclick="searchCategoryClose()">All products<br>
		<input type="radio" name="disaddtype" value="category" id="category" onclick="search_category()">Specific category<br>
		<input type="radio" name="disaddtype" value="product" onclick="search_product()">Specific product<br>
	<input type="text" placeholder="Search category" id="search" style="display: none;" >
	<ul id="someul" style="display:none; list-style-type: none; cursor: context-menu;">
			
	</ul>
	Minimum purchase amount<input type="text" name="miniamount"><br>
	Start date<input type="date" name="startdate"><br>
	end date<input type="date" name="enddate"><br>
	
	<input type="submit">	
</form>
<ul>
	<li class="gt">fr</li>
	<li class="gt">yy</li>
	<li class="gt">ht</li>
</ul>




<script>
var bar = document.getElementById("search");
var ullist =document.getElementById("someul");
var split_string =[];
var liitems = [];
var test = document.querySelectorAll(".gt");
var catadd = "false";

//list items showing load data----------------------------
function loadData(data){
	
	ullist.innerHTML ="";		
	 data.sort();
	 
	 $("#someul").append(data.map(function (el) {
		   	return $('<li class="liitems">').text(el);
		   	
		}));
	 liitems = document.querySelectorAll('.liitems');
	
	 //When one is selectedfrom the list---------------------------------------
	 liitems.forEach((x)=>{
			x.addEventListener('click',function(e){
				bar.value = x.innerHTML;
			})
		})
	 
	 
	
}


function search_category(){
	
	
	if (bar.style.display === "none") {
	    bar.style.display = "block";
	  } else {
	   
		 console.log("not"); 
	  }
	
	if(bar.placeholder==="Search products"){
		bar.placeholder ="Search category";
	}
	
	 $.get("../someservlet", function(arraylist) {   
		 split_string = arraylist.split(" ");   
		 loadData(split_string);	
			
	    });
	
}

// filter data from user input------------------
function filterdata(data,searchText){
	return data.filter((x)=>x.toLowerCase().includes(searchText.toLowerCase()));
}

function searchCategoryClose(){
	
	if (bar.style.display === "block") {
	    bar.style.display = "none";
	    ullist.style.display = "none"
	  } else {
	   
		 console.log("not"); 
	  }
	
	
}

function search_product(){
	
	if (bar.style.display === "none") {
	    bar.style.display = "block";
	  } else {
	   
		 console.log("not"); 
	  }
	
	bar.placeholder = "Search products";
	
}
//input search  categories--------------------------------------
bar.addEventListener('input',function(e){
	
	if(bar.value==""){
		ullist.style.display = "none";
	}else{
		ullist.style.display = "block";
		const data =filterdata(split_string,bar.value);
		loadData(data);
	}
	
	
})



</script>


</body>
</html>