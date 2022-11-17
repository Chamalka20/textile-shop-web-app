	

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



//----------gat products data--------------------------------------
var basket = document.getElementById('dataHolder');
var proList = [];

function getDatalist(){
	
		$.getJSON("../getPro", function(getData) {
			
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
				<div class="name"><img class="proImage" src="../Images/${x.image}">${x.name}</div>
				<div class="price">Rs ${x.price}.00</div>
				<div class="stock">${x.stock}</div>
				<div class="action"><button  onClick="editProduct(${x.id})">Edit</button><i class="fas fa-trash" id="delete" onClick="deleteItem(${x.id})"></i></div>
			</div>
			
		`}).join(" "));
		
		
	}else{
		
		return(basket.innerHTML=`<div class="no-records"><p>No records found</p></div>`);
		
	};
		
	
	
	
};

//deleting user select items--------------------------------
function deleteItem(id){
	$(document).ready(function(){
		
		$.post("../deleteProduct",{id:id},function(){
			
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







	
