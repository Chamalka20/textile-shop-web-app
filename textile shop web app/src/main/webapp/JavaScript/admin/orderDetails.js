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
var search;

function getProDetails(){
	var gr = 4;
	
	$(document).ready(function(){
		$.getJSON("../orders",function(getData){
				
			for(var i=0;i<getData.length;i++){
				ordDetails.push(getData[i]);
					
			}
			//loadProDetails(proDetails);
			console.log(ordDetails);
			//search user select order id -----------------------
			search = ordDetails.find((el)=> el.OrderId == orId )|| [];
			loadProDetails(search);
		});
		
	});	

}

getProDetails();

// display order details------------------------------
var orderdetailsHolder = document.getElementById('oderContainer');
var userdetailsHolder = document.getElementById('userContainer');

function loadProDetails(data){
	
	
	return(orderdetailsHolder.innerHTML= `
	
			<div><h5>Order Details</h5></div>
			<div class="wrapper"><h6>Order Id:</h6><p>${data.OrderId}</p></div>
		 	<div class="wrapper"><h6>Order Date:</h6><p>${data.orderDate}</p></div>
		 	<div class="wrapper"><h6>Payment Mode: </h6><p>${data.paymentMode}</p></div>
		 	<div class="wrapper"><h6>orderStatus: </h6><p>${data.orderStatus}</p></div>
	
	`),(userdetailsHolder.innerHTML=`
		
			<div><h5>User Details</h5></div>
			<div class="wrapper"><h6>Full Name:</h6><p>${data.userName} ${data.lastName}</p></div>
		 	<div class="wrapper"><h6>Email:</h6><p>${data.email}</p></div>
		 	<div class="wrapper"><h6>Phone: </h6><p>${data.phone}</p></div>
		 	<div class="wrapper"><h6>Address: </h6><p>${data.address_line1}, ${data.address_line2} ,${data.city}</p></div>
		 	<div class="wrapper"><h6>ZIP: </h6><p>${data.ZIP}</p></div>
		
	`)
	
	
	
}


