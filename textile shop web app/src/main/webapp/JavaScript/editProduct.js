
var proDetails = [];
var id = localStorage.getItem("id");
var detailsHolder = document.getElementById('container');

var namei= document.getElementById("name");
var desc = document.getElementById("desc");
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
	namei.value = data[0].name;
	desc.value = data[0].desc;
	small.value = data[2].small;
	medium.value = data[2].medium;
	large.value = data[2].large;
	xl.value = data[2].xl;
	categorie.value = data[3].categorie;
	
	return(detailsHolder.innerHTML= 
		
		`
		 <div class="ImageWrapper"><img class="firstImg" src="../Images/${data[0].image}"><h4>${data[0].name}</<h4></div>
		 <div class="wrapper"><h5>Id:</h5><p>${data[0].id}</p></div>
		 <div class="wrapper"><h5>Sales:</h5><p>${data[0].salles}</p></div>
		 <div class="wrapper"><h5>Quantity: </h5><p>${data[1].quantity}</p></div>`
		
	);
	
	
	
	
	
};






