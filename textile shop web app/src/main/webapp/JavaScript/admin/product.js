	

//---------------show admin details------------------------
const adminName = localStorage.getItem("adminName");

function showAccount(){
	
	document.getElementById("acc-name").innerHTML = adminName;
	
}

showAccount();


//--------logOut------------------------

function logOut(){
	const auth = new Auth();
	auth.logOut();
}



//----------get products data--------------------------------------
var basket = document.getElementById('dataHolder');
var imgHolder = document.getElementById('img');
var proList = [];

function getDatalist(){
	
		$.getJSON("../../getPro", function(getData) {
			
			for(var i=0;i<getData.length;i++){
					proList.push(getData[i]);
					
			}
					
			loadData();
						
			});

};		
getDatalist();
console.log(proList);





let loadData= () =>{

	if(proList.length != 0){
		
		return(basket.innerHTML= proList.map((x)=>{
			
			return`
			<div class="subContainer" id="items-${x.id}">
			 	
				<div class="id">${x.id}</div>
				<div class="name"><img class="proImage" src="../../Images/product/${x.image}">${x.name}</div>
				<div class="price">Rs ${x.price}.00</div>
				<div class="action"><button class="btn1" onClick="editProduct(${x.id})">Edit</button><i class="fas fa-trash" id="delete" onClick="deleteItem(${x.id})"></i></div>
			</div>
			
		`}).join(" ")),(imgHolder.innerHTML=`<div id="not-up">Upload Image</div><img src="../Images/product/${newImage}" class="secondImg" id="showImage" style="display:none;"><div class="button_outer"><div class="btn_upload"><input type="file" id="imageUp" onChange="RefreshImage()"><i class="fas fa-upload" id="upload-icon"></i></div></div>`);
		
		
	}else{
		
		return(basket.innerHTML=`<div class="no-records"><p>No records found</p></div>`);
		
	};
		
	
	
	
};

//deleting user select items--------------------------------
function deleteItem(id){
	$(document).ready(function(){
		
		$.post("../../deleteProduct",{id:id},function(){
			
			alert("one iten is delete\n id="+id);
			proList=[];
			getDatalist(); 
			
			});						
		
	});
	
}

//edit user select items--------------------------------
function editProduct(id){
	
	localStorage.setItem("id",id);
    window.location='editProduct.jsp';
	
	
}

//----------------------------------------------------------
//----------add new product---------------------------------

var bar = document.getElementById("searchCate");
var ullist =document.getElementById("someul");
var split_string = []
var liitems = [];
var newImage = ''
var ImgUp = false;

var name;
var desc; 
var price;
var small;
var medium;
var large;
var xl;;
var cate;
var img;
var today;

//get the current date------------------------------------------
today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

//---------------------------------------------------------------
function loadCat(data){
	
	ullist.innerHTML ="";		
	 data.sort();
	 
	 $("#someul").append(data.map(function (el) {
		   	return $('<li class="liitems">').text(el);
		   	
		}));
	 liitems = document.querySelectorAll('.liitems');
	
	 //When one is selected from the list---------------------------------------
	 liitems.forEach((x)=>{
			x.addEventListener('click',function(){
				
				bar.value = x.innerHTML;
				ullist.style.display = "none";
				
			})
		})
	 
	
	
}

function search_category(){
	
	var name = document.getElementById('name').value;
	//get categorys from database---------------------------------
	$.get("../../getCate", function(arraylist) {   
		 split_string = arraylist.split(" ");   
		 loadCat(split_string);	
			
	    });
	
};

//filter data from user input------------------
function filterdata(data,searchText){
	return data.filter((x)=>x.toLowerCase().includes(searchText.toLowerCase()));
}

//input search  categories--------------------------------------
bar.addEventListener('input',function(){
	
	if(bar.value==""){
		ullist.style.display = "none";
	}else{
		ullist.style.display = "block";
		const data =filterdata(split_string,bar.value);
		loadCat(data);
	}
	
	
});

//load the user add new image--------------------------------------------------
function RefreshImage(){
	var image = document.getElementById('imageUp').value
	
	console.log(image);
	//remove image path and get image name---------------
	 newImage = image.replace(/C:\\fakepath\\/, '');
	console.log(newImage);
	ImgUp= true;
	loadData();
	
	if(ImgUp === true){
		document.getElementById('not-up').style.display = "none";
		document.getElementById('showImage').style.display = "block";
	}else{
		
		console.log("not true");
	}
}



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
	cate = document.getElementById("searchCate").value;
	
	if(name === "" ||  desc === "" || price ===""|| small===""|| medium===""|| large==="" || xl===""|| cate==="" || newImage==="" ){
		
		document.getElementById("loginFailure").innerHTML = "Please fill out fields" ;
		
	}else{
		
		$.post("../../pro_add",{name:name,desc:desc,price:price,imageUp:newImage,date:today,small:small,medium:medium,large:large,xl:xl,cate:cate},function(){
		
		alert("add");
		proList=[];
		getDatalist();
		
		});
		
		
	}
	
	
	
};





	
