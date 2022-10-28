	
var basket = document.getElementById('dataHolder');
var proList = [];

function getDatalist(){
	$(document).ready(function(){
		$.getJSON("../getPro", function(getData) {
			
			for(var i=0;i<getData.length;i++){
					proList.push(getData[i]);
					
			}
					
			loadData();
				
					
			});
	});
}		
getDatalist();
console.log(proList);





let loadData= () =>{

	return(basket.innerHTML= proList.map((x)=>{
		
		return`
		<div class="subContainer" id="items-${x.id}">
		 	
			<div class="data">${x.id}</div>
			<div class="data"><img class="proImage" src="../Images/${x.image}">${x.name}</div>
			<div class="data">${x.desc}</div>
			<div class="data">${x.price}</div>
			<div class="data">${x.stock}</div>
			<div class="data"><button >Edit</button><i class="fas fa-trash" id="delete" onClick="deleteItem(${x.id})"></i></div>
		</div>
		
	`}).join(" "));
	
	
	
};

//deleting user select items--------------------------------
function deleteItem(id){
	$(document).ready(function(){
		
		$.post("../deleteProduct",{id:id},function(){
			
			alert("done"+id)
			proList=[];
			getDatalist(); 
			
			});						
		
	});
	
}









	
