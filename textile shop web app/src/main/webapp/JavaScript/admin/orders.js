//---------------show admin details------------------------
const adminName = localStorage.getItem("adminName");

function showAccount(){
	
	document.getElementById("acc-name").innerHTML = adminName;
	
}

showAccount()

//--------logOut------------------------

function logOut(){
	const auth = new Auth();
	auth.logOut();
}

//----------get products data--------------------------------------
var basket = document.getElementById('dataHolder');
var ordList = [];

function getDatalist(){
	
		$.getJSON("../../orders", function(getData) {
			
			for(var i=0;i<getData.length;i++){
				
					ordList.push(getData[i]);
					
			}
					
			loadData();
						
			});

};		
getDatalist();
console.log(ordList);

let loadData= () =>{

	if(ordList.length != 0){
		
		return(basket.innerHTML= ordList.map((x)=>{
			
			return`
			
			<div class="subContainer" id="items}">
			 	
				<div class="id">${x.OrderId}</div>
				<div class="userName">${x.userName}</div>
				<div class="paymentMode">${x.paymentMode}</div>
				<div class="orderDate">${x.orderDate}</div>
				<div class="action"><button class="btn1" onClick="orderDetails(${x.OrderId})">View</button></div>
			</div>
			
			
		`}).join(" "))
		
		
	}else{
		
		return(basket.innerHTML=`<div class="no-records"><p>No Orders found</p></div>`);
		
	};
		
		
	
};


function orderDetails(id){
	
	console.log(id);
	
	localStorage.setItem("ordId",id);
    window.location='orderDetails.jsp';
	
	
}



