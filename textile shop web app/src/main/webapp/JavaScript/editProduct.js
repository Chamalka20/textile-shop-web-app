
var proDetails = [];
var id = localStorage.getItem("id");
var detailsHolder = document.getElementById('container');
var ArrayList =[];
var liitems = [];
var ullist =document.getElementById("someul");

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


//user edit product category---------------------------------------
function search_category(){
	
	 $.get("../getCate", function(arraylist) {   
		 ArrayList = arraylist.split(" ");   
		 loadData(ArrayList);	
		console.log(ArrayList);
	    });
	    
	    
	    
	    
	 categorie.addEventListener('input',function(e){
	
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
			x.addEventListener('click',function(e){
				
				categorie.value = x.innerHTML;
				
			})
		})
	
};


