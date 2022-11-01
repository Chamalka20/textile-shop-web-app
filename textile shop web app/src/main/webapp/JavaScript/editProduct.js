
var proDetails = [];
var id = localStorage.getItem("id");
var detailsHolder = document.getElementById('container');

//get product details from servlet------------------------------------


$.getJSON("../editPro",{id:id},function(getData){
		
	for(var i=0;i<getData.length;i++){
		proDetails.push(getData[i]);
			
	}
	loadProDetails()
	console.log(proDetails);
});		

function loadProDetails(){
	
	return(detailsHolder.innerHTML= 
		
		`
		 <div class="ImageWrapper"><img class="firstImg" src="../Images/${proDetails[0].image}"><h4>${proDetails[0].name}</<h4></div>
		 <div class="wrapper"><h5>Id:</h5><p>${proDetails[0].id}</p></div>
		 <div class="wrapper"><h5>Sales:</h5><p>${proDetails[0].salles}</p></div>
		 <div class="wrapper"><h5>Quantity: </h5><p>${proDetails[1].quantity}</p></div>`
		
	);
	
};






