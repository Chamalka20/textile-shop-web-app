//---------------show admin details------------------------
const adminName = localStorage.getItem("adminName");
var orId  = localStorage.getItem("ordId");

function showAccount(){
	
	document.getElementById("acc-name").innerHTML = adminName;
	
}

showAccount();


//--------logOut------------------------

function logOut(){
	const auth = new Auth();
	auth.logOut();
}


//get order details from servlet------------------------------------
var ordDetails = [];
var searchOrder;

function getOrderDetails(){
	
	
	$(document).ready(function(){
		$.getJSON("../orders",function(getData){
				
			for(var i=0;i<getData.length;i++){
				ordDetails.push(getData[i]);
					
			}
			//loadProDetails(proDetails);
			console.log(ordDetails);
			//search user select order id -----------------------
			searchOrder = ordDetails.find((el)=> el.OrderId == orId )|| [];
			loadOrderDetails();
		});
		
	});	

}

getOrderDetails();

// get order items ---------------------------------------
var ordItems = [];
var searchOrderItem=[];
function getOrderItems(){
	
	$.getJSON("../orderItems",function(getData){
				
			for(var i=0;i<getData.length;i++){
				
				ordItems.push(getData[i]);
			}
			searchOrderItem = ordItems.filter((el)=> el.orddId == orId )|| [];	
			console.log(searchOrderItem);
			console.log(ordItems);
			loadOrderItems();
		});
	
	
	
}
getOrderItems();

// display order details------------------------------
var orderdetailsHolder = document.getElementById('oderContainer');
var userdetailsHolder = document.getElementById('userContainer');

function loadOrderDetails(){
	
	
	return(orderdetailsHolder.innerHTML= `
	
			<div><h5>Order Details</h5></div>
			<div class="wrapper"><h6>Order Id:</h6><p>${searchOrder.OrderId}</p></div>
		 	<div class="wrapper"><h6>Order Date:</h6><p>${searchOrder.orderDate}</p></div>
		 	<div class="wrapper"><h6>Payment Mode: </h6><p>${searchOrder.paymentMode}</p></div>
		 	<div class="wrapper"><h6>orderStatus: </h6><p>${searchOrder.orderStatus}</p></div>
	
	`),(userdetailsHolder.innerHTML=`
		
			<div><h5>User Details</h5></div>
			<div class="wrapper"><h6>Full Name:</h6><p>${searchOrder.userName} ${searchOrder.lastName}</p></div>
		 	<div class="wrapper"><h6>Email:</h6><p>${searchOrder.email}</p></div>
		 	<div class="wrapper"><h6>Phone: </h6><p>${searchOrder.phone}</p></div>
		 	<div class="wrapper"><h6>Address: </h6><p>${searchOrder.address_line1}, ${searchOrder.address_line2} ,${searchOrder.city}</p></div>
		 	<div class="wrapper"><h6>ZIP: </h6><p>${searchOrder.ZIP}</p></div>
		
	`)
	
	
	
}


var orderItemsHolder = document.getElementById('dataHolder');

function loadOrderItems(){
	
	var subTotal = 0;
	
	return(orderItemsHolder.innerHTML=searchOrderItem.map((x)=>{
		
		subTotal = x.price*x.quantity;
		return`
	
			<div class="subContainer" id="items">
				<div class="itemId">${x.itemId}</div>
				<div class="image-holder"><img class="proImage" src="../Images/product/${x.Image}"></div>
				<div class="product-name">${x.proName}</div>
				<div class="price">Rs ${x.price.toLocaleString("en-US")}.00</div>
				<div class="quantity">${x.quantity}</div>
				<div class="total">Rs ${subTotal.toLocaleString("en-US")}.00</div>
				
			</div>
			

	`}).join(" "))
	
	
	
}














