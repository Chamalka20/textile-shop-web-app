
$(window).on('load',function(){
	
var basket = document.getElementById('dataHolder');


$.getJSON("../getPro", function(getData) {
	console.log(getData);
	loadData(getData);
	
	
});



let loadData= (data) =>{
	
	return(basket.innerHTML=data && data.map((x)=>{
		
		return`
		<div class="subContainer" id="items-${x.id}">
		 	
			<div class="data">${x.id}</div>
			<div class="data"><img src="#">${x.name}</div>
			<div class="data">${x.desc}</div>
			<div class="data">${x.price}</div>
			<div class="data">${x.stock}</div>
			<div class="data"><button id="delete">Edit</button><i class="fas fa-trash" ></i></div>
		</div>
		
	`}).join(" "));
	
	
	
};

loadData();

//add array to product ids------------------------------------
//for(var i=0;i<basket.length;i++){
	
	//idlist[i] = basket[i].firstElementChild.innerHTML;
//}
//console.log(idlist);

//deleting user select items--------------------------------

	

	
	
});


 