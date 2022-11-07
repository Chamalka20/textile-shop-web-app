var saleBasket = document.getElementById('saleItems');
proList =[];
console.log("hiiiiiii");
function getDatalist(){
	
	$.getJSON("../getPro", function(getData) {
			
		for(var i=0;i<getData.length;i++){
					proList.push(getData[i]);
					
		}
					
		loadData();
						
		});

};

getDatalist()
// sale items------------------------------------------------------------------
let loadData= () =>{
	
	return(saleBasket.innerHTML= proList.map((x)=>{
	
		if(x.saleActive=="true"){
		
		return`
			<div class="subContainer" id="items-${x.id}">
			 	
				<div class="id">${x.id}</div>
				<div class="name"><img class="proImage" src="../Images/${x.image}">${x.name}</div>
				<div class="desc">${x.desc}</div>
				<div class="price">Rs ${x.price}.00</div>
				<div class="stock">${x.stock}</div>
				<div class="action"><button  onClick="editProduct(${x.id})">Edit</button><i class="fas fa-trash" id="delete" onClick="deleteItem(${x.id})"></i></div>
			</div>
	
	
		
		`}else{
			
			return`<div>none</div>`
		}
	
	}).join(" "));
		
}

//add new item to sale--------------------------------------------------------------------------
var addNewHolder = document.getElementById('add-new');
var mainSubHolder = document.getElementById('mainHolder');
var title = document.getElementById('title');

var proDetails =[];

function addNewProduct(){
	addNewHolder.style.display ="block";
	
	if(addNewHolder.style.display ==="block"){
		
		addNewHolder.style.display ="none";
		title.style.display ="block";
		
		return(mainSubHolder.innerHTML= proList.map((x)=>{
			
		if(x.saleActive!="true"){
		
		return`
			<div class="subContainer" id="items-${x.id}">
			 	<div class="wrapper"><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"></div>
			 	<div class="wrapper"><img class="newProImage" src="../Images/${x.image}">${x.name}</div>
			 	<div class="wrapper">Salles: ${x.salles}</div>
			 	<div class="wrapper">Add date: ${x.add_date}</div>
			 	<div class="wrapper"><a href="#" onclick="productInfor(${x.id})">More info</a></div>
			</div>
	
	
		
		`}else{
			
			return`<div>none</div>`
		}
	
	}).join(" "));
		
		
	}
	
}
//pop up the window and show product informaion-------------------------------------

function productInfor(id){
	proDetails=[];
	$.getJSON("../ProDetails",{id:id},function(getData){
				
			for(var i=0;i<getData.length;i++){
				proDetails.push(getData[i]);
					
			}
			
			console.log(proDetails);
		});

}


