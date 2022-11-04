
var proDetails = [];
var id = localStorage.getItem("id");
var detailsHolder = document.getElementById('container');
var imgHolder = document.getElementById('img');
var ArrayList =[];
var liitems = [];
var ullist =document.getElementById("someul");

var namei= document.getElementById("name");
var desc = document.getElementById("desc");
var price = document.getElementById("price");
var small = document.getElementById("small");
var medium = document.getElementById('medium');
var large = document.getElementById('large');
var xl = document.getElementById('xl');
var categorie = document.getElementById('categorie');


//get product details from servlet------------------------------------
$(document).ready(function(){
	$.getJSON("../editPro",{id:id},function(getData){
			
		for(var i=0;i<getData.length;i++){
			proDetails.push(getData[i]);
				
		}
		loadProDetails(proDetails);
		console.log(proDetails);
	});
	
});	



function loadProDetails(data){
	
	//set values to placeHolders-------------------------------
	namei.value = proDetails[0].name;
	desc.value =proDetails[0].desc;
	price.value = proDetails[0].price;
	small.value = proDetails[0].small;
	medium.value = proDetails[0].medium;
	large.value = proDetails[0].large;
	xl.value  = proDetails[0].xl;
	categorie.value = proDetails[0].categorie;	
	
	return(detailsHolder.innerHTML= 
		
		`
		 <div class="ImageWrapper"><img class="firstImg" src="../Images/${data[0].image}"><h4>${data[0].name}</<h4></div>
		 <div class="wrapper"><h5>Id:</h5><p>${data[0].id}</p></div>
		 <div class="wrapper"><h5>Sales:</h5><p>${data[0].salles}</p></div>
		 <div class="wrapper"><h5>Quantity: </h5><p>${data[0].quantity}</p></div>`
		
	),(imgHolder.innerHTML=`<img src="../Images/${data[0].image}" class="secondImg"><input type="file" id="imageUp">`);
	
		
};


//user edit product category---------------------------------------
function search_category(){
	
	 $.get("../getCate", function(arraylist) {   
		 ArrayList = arraylist.split(" ");   
		 loadData(ArrayList);	
		console.log(ArrayList);
	    });
	    
	    
	    
	    
	 categorie.addEventListener('input',function(){
	
		if(categorie.value==""){
		ullist.style.display = "none";
		}else{
			ullist.style.display = "block";
			const data =filterdata(ArrayList, categorie.value);
			loadData(data);
		};
	})
};

// filter data from user input------------------
function filterdata(data,searchText){
	return data.filter((x)=>x.toLowerCase().includes(searchText.toLowerCase()));
}

function loadData(data){
	 ullist.innerHTML ="";
	 $("#someul").append(data.map(function (el) {
		   	
		 	return $('<li class="liitems">').text(el);
		   	
		}));
		
		liitems = document.querySelectorAll('.liitems');
	
	//When one is selected from the list---------------------------------------
	 liitems.forEach((x)=>{
			x.addEventListener('click',function(){
				
				categorie.value = x.innerHTML;
				
			})
		})

	
	
};
//---------------------------------------------------------
//---------------------------------------------------------

//send data to servlet----------------------------
function updateProduct(){
	var editName= namei.value;
	var editDesc = desc.value;
	var editPrice = price.value;
	var editSmall = small.value;
	var editMedium = medium.value;
	var editLarge = large.value; 
	var editXl = xl.value;
	var editCategorie = categorie.value;
	var image = document.getElementById('imageUp').value;
	
	$.post("../sendEditPro",{id:id,name:editName,desc: editDesc,price:editPrice,image:image,small:editSmall,medium:editMedium,large:editLarge,xl:editXl,categorie:editCategorie }, function() {
		
		alert("uptade");
		
		
	}) 
	
	
	
};









