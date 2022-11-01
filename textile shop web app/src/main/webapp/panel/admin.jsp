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
	
	<div>
		Name<input type="text" id="name" value=""><br>
		Description<input type="text" id="desc"><br>
		Price<input type="text" id="price"><br><br>
		Product Size:<br>
		
		Small<input type="text" id="small" placeHolder="Enter quantity"><br>
		Medium<input type="text" id="medium"  placeHolder="Enter quantity"><br>
		large<input type="text" id="large"  placeHolder="Enter quantity"><br>
		XL<input type="text" id="xl"  placeHolder="Enter quantity"><br><br>
		category<input type="text"  id="searchCate"onclick="search_category()"><br>
		
			<ul id="catnames" style="display:none; list-style-type: none; cursor: context-menu;">
				
			</ul>
		Image<input type="file" id="imageUp"><br>
		<button onClick="productAdd()" >Add</button>
	</div>
	
	
	<h2>create Products categorys</h2>
		
	<form action="../pro_cat" method="post">	
		cat name<input type="text" name="catname"><br>
		desc<input type="text" name="desc"><br>
		<input type="submit">	
		
	</form>		




<script>
var bar = document.getElementById("searchCate");
var ullist =document.getElementById("catnames");
var split_string = []
var liitems = [];


var name;
var desc; 
var price;
var small;
var medium;
var large;
var xl;;
var cate;
var img;


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
	
	var name = document.getElementById('name').value;
	//get categorys from database---------------------------------
	$.get("../getCate", function(arraylist) {   
		 split_string = arraylist.split(" ");   
		 loadData(split_string);	
			
	    });
	
};

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
	
	
});

//pass new product to the database--------------------------------------
function productAdd(){
	
	//get user input and add to variables-----------------------------
	name = document.getElementById('name').value;
	desc = document.getElementById('desc').value;
	price = document.getElementById('price').value;
	small = document.getElementById('small').value;
	medium = document.getElementById('medium').value;
	large = document.getElementById('large').value;
	xl = document.getElementById('xl').value;
	img = document.getElementById('imageUp').value;
	cate = document.getElementById("searchCate").value;
	console.log(img);
	$.post("../pro_add",{name:name,desc:desc,price:price,imageUp:img,small:small,medium:medium,large:large,xl:xl,cate:cate},function(){
		
		alert("add");
		
	});
	
};


</script>
</body>
</html>   