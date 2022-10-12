<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>

</head>

<body>


<form action="../dis_add" method="post">
	discount title<input type="text" name="disname"><br>
	value<input type="text" name="disvalue"><br>
	applies to<br>
		<input type="radio" name="disaddtype" value="all"  onclick="searchCategoryClose()">All products<br>
		<input type="radio" name="disaddtype" value="category" id="category" onclick="search_category()">Specific category<br>
		<input type="radio" name="disaddtype" value="product">Specific product<br>
	<input type="text" placeholder="Search category" id="search" style="display: none;" ><br>	
	Minimum purchase amount<input type="text" name="miniamount"><br>
	Start date<input type="date" name="startdate"><br>
	end date<input type="date" name="enddate"><br>
	<input type="submit">	
</form>


<script>

function search_category(){
	var cate = document.getElementById("search");
	if (cate.style.display === "none") {
	    cate.style.display = "block";
	  } else {
	   
		 console.log("not"); 
	  }
}

function searchCategoryClose(){
	var cate = document.getElementById("search");
	if (cate.style.display === "block") {
	    cate.style.display = "none";
	  } else {
	   
		 console.log("not"); 
	  }
}

</script>


</body>
</html>