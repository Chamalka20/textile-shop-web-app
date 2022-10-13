<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<script src="http://code.jquery.com/jquery-latest.min.js"></script>

</head>

<body>


<form action="../dis_add" method="post">
	discount title<input type="text" name="disname"><br>
	value<input type="text" name="disvalue"><br>
	applies to<br>
		<input type="radio" name="disaddtype" value="all"  onclick="searchCategoryClose()">All products<br>
		<input type="radio" name="disaddtype" value="category" id="category" onclick="search_category()">Specific category<br>
		<input type="radio" name="disaddtype" value="product" onclick="search_product()">Specific product<br>
	<input type="text" placeholder="Search category" id="search" style="display: none;" ><br>	
	Minimum purchase amount<input type="text" name="miniamount"><br>
	Start date<input type="date" name="startdate"><br>
	end date<input type="date" name="enddate"><br>
	
	<input type="submit">	
</form>

<div id="somediv"></div><br>








<script>
var bar = document.getElementById("search");

function search_category(){
	
	if (bar.style.display === "none") {
	    bar.style.display = "block";
	  } else {
	   
		 console.log("not"); 
	  }
	
	if(bar.placeholder==="Search products"){
		bar.placeholder ="Search category";
	}
	
	 $.get("../someservlet", function(responseText) {   // Execute Ajax GET request on URL of "someservlet" and execute the following function with Ajax response text...
	        $("#somediv").text(responseText);           // Locate HTML DOM element with ID "somediv" and set its text content with the response text.
	    });
	
}

function searchCategoryClose(){
	
	if (bar.style.display === "block") {
	    bar.style.display = "none";
	  } else {
	   
		 console.log("not"); 
	  }
	
	
	
}

function search_product(){
	
	bar.placeholder = "Search products";
	
}


</script>


</body>
</html>