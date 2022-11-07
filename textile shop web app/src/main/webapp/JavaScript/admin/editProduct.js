
var proDetails = [];
var id = localStorage.getItem("id");
var detailsHolder = document.getElementById('container');
var imgHolder = document.getElementById('img');
var ArrayList =[];
var liitems = [];
var ullist =document.getElementById("someul");
var onlyImgUp= false;
var newImage ='';

var namei= document.getElementById("name");
var desc = document.getElementById("desc");
var price = document.getElementById("price");
var small = document.getElementById("small");
var medium = document.getElementById('medium');
var large = document.getElementById('large');
var xl = document.getElementById('xl');
var categorie = document.getElementById('categorie');


//get product details from servlet------------------------------------
function getProDetails(){
	
	$(document).ready(function(){
		$.getJSON("../ProDetails",{id:id},function(getData){
				
			for(var i=0;i<getData.length;i++){
				proDetails.push(getData[i]);
					
			}
			loadProDetails(proDetails);
			console.log(proDetails);
		});
		
	});	

}
getProDetails();

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
	newImage = proDetails[0].image;
	
	return(detailsHolder.innerHTML= 
		
		`
		 <div class="ImageWrapper"><img class="firstImg" src="../Images/${data[0].image}"><h4>${data[0].name}</<h4></div>
		 <div class="wrapper"><h6>Id:</h6><p>${data[0].id}</p></div>
		 <div class="wrapper"><h6>Sales:</h6><p>${data[0].salles}</p></div>
		 <div class="wrapper"><h6>Quantity: </h6><p>${data[0].quantity}</p></div>
		 <div class="wrapper"><h6>Add date: </h6><p>${data[0].addDate}</p></div>`
	),(imgHolder.innerHTML=`<img src="../Images/${data[0].image}" class="secondImg" ><div class="button_outer"><div class="btn_upload"><input type="file" id="imageUp" onChange="RefreshImage()"><i class="fas fa-upload" id="upload-icon"></i></div></div>`);
	
		
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
				ullist.style.display = "none";
				
			})
		})

	
	
};
//load the user add new image--------------------------------------------------
function RefreshImage(){
	var image = document.getElementById('imageUp').value;
	console.log(image);
	//remove image path and get image name---------------
	 newImage = image.replace(/C:\\fakepath\\/, '');
	
	onlyImgUp= true;
	updateProduct()
	
}

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
	

	$.post("../sendEditPro",{id:id,name:editName,desc: editDesc,price:editPrice,image:newImage,small:editSmall,medium:editMedium,large:editLarge,xl:editXl,categorie:editCategorie }, function() {
		
		if(onlyImgUp== true){
			
			console.log("image up");
			proDetails=[];
			getProDetails();
			
			onlyImgUp=false;
		}else{
			
			alert("product is update");
			
		}
		
	}) 
	
	
	
};
//------------------------------------------------------------------------------
// add discounts to the product-------------------------------------------------


function addDiscount(){
	
	
	
}








