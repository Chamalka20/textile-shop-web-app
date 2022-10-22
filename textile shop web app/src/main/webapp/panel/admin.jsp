<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<link rel="stylesheet" href="../css/admin.css">
</head>
<body>
	<h2>add products</h2>
	<form action="../pro_add" method="post">
	
		Name<input type="text" name="name"><br>
		Description<input type="text" name="desc"><br>
		Price<input type="text" name="price"><br>
		quantity<input type="text" name="quan"><br>
		category<input type="text" name="cate" id="search"onclick="search_category()"><br>
			<ul id="catnames" style="display:none; list-style-type: none; cursor: context-menu;">
				
			</ul>
		
		<input type="submit">
	
	
	</form>
	<h2>create Products categorys</h2>
		
	<form action="../pro_cat" method="post">	
		cat name<input type="text" name="catname"><br>
		desc<input type="text" name="desc"><br>
		<input type="submit">	
		
	</form>		




<script>
var bar = document.getElementById("search")
var ullist =document.getElementById("catnames");
var split_string = []
var liitems = [];

function loadData(data){
	
	ullist.innerHTML ="";		
	 data.sort();
	 
	 $("#catnames").append(data.map(function (el) {
		   	return $('<li class="liitems">').text(el);
		   	
		}));
	 liitems = document.querySelectorAll('.liitems');
	
	 //When one is selected from the list---------------------------------------
	 liitems.forEach((x)=>{
			x.addEventListener('click',function(e){
				
				bar.value = x.innerHTML;
				
			})
		})
	 
	
	
}

function search_category(){
	
	
	//get categorys from database---------------------------------
	$.get("../someservlet", function(arraylist) {   
		 split_string = arraylist.split(" ");   
		 loadData(split_string);	
			
	    });
	
	
}

//filter data from user input------------------
function filterdata(data,searchText){
	return data.filter((x)=>x.toLowerCase().includes(searchText.toLowerCase()));
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