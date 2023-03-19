var saleBasket = document.getElementById('saleItems');
var proList =[];
var resultProductData =[];
var collectId=[];
var proCount=0;
var isSaleSuccess = false;
var error = "";

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



//----------------------------------------------------------------
function getDatalist(){
	 	
	$.getJSON("../getPro", function(getData) {
		resultProductData =[];
		proList =[];
		collectId=[];
		proCount=0;
		console.log(getData);
		for(var i=0;i<getData.length;i++){
					
			proList.push(getData[i]);
			resultProductData.push(getData[i]);
								
		}
		
				
		loadData();
		
		});
		
	
};

 getDatalist();
 



// sale items------------------------------------------------------------------
let loadData= () =>{
	var saleItems=[];
	
	saleItems=proList.filter(function (a) {
		
		var saleInOrOut=[];
		saleInOrOut.push(a.saleActive);
		var saletrueMatches = saleInOrOut.filter(function(x) { return x == "true" });
		
		return saletrueMatches.length>0;
		
	})
	
	//--------------------------------------------
	if(saleItems.length != 0){
		
		return(saleBasket.innerHTML= saleItems.map((x)=>{
		
			return`
				<div class="subContainer" id="items-${x.id}">
				 	
					<div class="name"><img class="proImage" src="../Images/product/${x.image}"></div>
					<div class="id">${x.id}</div>
					<div class="desc">${x.name}</div>
					<div class="price">Rs ${x.price}.00</div>
					<div class="stock">${x.salePercentage}%</div>
					<div class="action"><i class="fas fa-trash" id="delete" OnClick="deleteFromSale(${x.id})"" onClick="deleteItem(${x.id})"></i></div>
				</div>
		
	
	
		`}).join(" "));
	
	}else{
		
		return(saleBasket.innerHTML=`<div>No Products have been added for sale</div>`)
	}
	
		
		
}



//add new item to sale--------------------------------------------------------------------------
var addNewHolder = document.getElementById('add-new');
var mainSubHolder = document.getElementById('mainHolder');
var hideHeader = document.getElementById('hideHeader');
var popUpHolder = document.getElementById('popup1');
var proSaleDetailsHolder = document.getElementById('pro-Sale-Details-Holder');
var popUpSubHolder = document.getElementById('popUp-sub-container');


var resultProductData =[];


var proDetails =[];

//-----------------------------------------------------------------------------------------------------------------------
function filterByDate(){
	var selectBox = document.getElementById("selectMonth");
	var selectedValue = selectBox.options[selectBox.selectedIndex].value;
	proCount=0;
	
	//get today date-----------------------------------------
	var today = new Date();
	var mm = String(today.getMonth() + 1); 
	var yyyy = today.getFullYear();
	
	//identify this month,last month and Previous Month-------------------------
	var thisMonth = new Date(yyyy + '-' + mm + '-' + 01);
	var lastMonth = new Date(yyyy + '-' +( mm-1) + '-' + 01);
	var previousMonth = new Date(yyyy + '-' +( mm-2) + '-' + 01);
	
	//filter this month data----------------------------------------- 
	if(selectedValue ==="thisMonth"){
		 resultProductData=resultProductData.filter(function (a) {
			var hitDates =[];
            hitDates.push(a.add_date);
           
            // convert strings to Date objcts
            hitDates = hitDates.map(function(date) { return new Date(date); });
            // filter this dates by startDate and endDate
            var hitDateMatches = hitDates.filter(function(date) { return date >= thisMonth });
            	
            // if there is more than 0 results keep it. if 0 then filter it away
            return hitDateMatches.length>0;
        })
        
     
		
			
	}
	//filter last month data----------------------------------------- 
	if(selectedValue ==="lastMonth" ){
		
		 resultProductData=resultProductData.filter(function (a) {
			 var hitDates =[];
            hitDates.push(a.add_date);
           
            // convert strings to Date objcts
            hitDates = hitDates.map(function(date) { return new Date(date); });
            // filter this dates by startDate and endDate
            var hitDateMatches = hitDates.filter(function(date) { return date >= lastMonth && date <= thisMonth });
            	
            // if there is more than 0 results keep it. if 0 then filter it away
            return hitDateMatches.length>0;
        })
        
       
		
		
	}
	//filter previous month data----------------------------------------- 
	if(selectedValue ==="previousMonth"){
		
		  resultProductData=resultProductData.filter(function (a) {
			 var hitDates =[];
            hitDates.push(a.add_date);
           
            // convert strings to Date objcts
            hitDates = hitDates.map(function(date) { return new Date(date); });
            // filter this dates by startDate and endDate
            var hitDateMatches = hitDates.filter(function(date) { return date >= previousMonth && date <= lastMonth });
            	
            // if there is more than 0 results keep it. if 0 then filter it away
            return hitDateMatches.length>0;
        })
        
      
		
		
	}
	
	
	showProductList( resultProductData);				
	
}

//-----------------------------------------------------------------------------------------------------------------------------------
function filterBySalles(){
	var selectBox = document.getElementById("selectSalles");
	var selectedValue = selectBox.options[selectBox.selectedIndex].value;
	proCount=0;
	
	
	if(selectedValue ==="less10"){
		 resultProductData= resultProductData.filter(function (a) {
			var hitSalles =[];
            hitSalles.push(a.salles);

			// filter this salles by less than 10
            var hitSallesMatches = hitSalles.filter(function(qu) { return qu <= 10 });
            
			return hitSallesMatches.length>0;
		})
		
		filterByDate();
		
	}
	
	if(selectedValue ==="less20"){
		
		  resultProductData = resultProductData.filter(function (a) {
			var hitSalles =[];
            hitSalles.push(a.salles);

			// filter this salles by less than 20
            var hitSallesMatches = hitSalles.filter(function(qu) { return qu <= 20 });
           
			return hitSallesMatches.length>0;
		})
		
		filterByDate()
	}
		
	showProductList(resultProductData);
	
	getDatalist();
	
}

function showProductList(resultProductData){
	
	addNewHolder.style.display ="block";
	
	if(addNewHolder.style.display ==="block"){
		
		addNewHolder.style.display ="none";
		hideHeader.style.display ="block";
		proSaleDetailsHolder.style.display ="block";
		mainSubHolder.style.background ="#ffff";
		
		//-----------------------------------------------------------------------
		var notSaleItems=[];
		notSaleItems=resultProductData.filter(function (a) {
			
		var saleInOrOut=[];
		saleInOrOut.push(a.saleActive);
		var saleFalseMatches = saleInOrOut.filter(function(x) { return x == "false" });
		
		return saleFalseMatches.length>0;
		
	})
		
		if(notSaleItems.length != 0){
			return(mainSubHolder.innerHTML= notSaleItems.map((x)=>{
				
			
			
			return`
				<div class="subContaineradd" id="items-${x.id}">
				 	<div class="wrapper"><input class="form-check-input" onClick="checktheproducts(${x.id})" autocomplete="off" type="checkbox" value=${x.id} id="flexCheckDefault${x.id}"><img class="newProImage" src="../Images/product/${x.image}"></div>
				 	<div class="wrapper">Salles: ${x.salles}</div>
				 	<div class="wrapper">Add date: ${x.add_date}</div>
				 	<div class="wrapper"><a href="#" onclick="productInfor(${x.id})">More info</a></div>
				</div>
		
		
			
		
		
			`}).join(" "));
		
		}else{
			
			return(mainSubHolder.innerHTML=`<div>No Products</div>`)
			
		}
		
	}
	
}

//pop up the window and show product informaion-------------------------------------

function productInfor(id){
	proDetails=[];
	$.getJSON("../ProDetails",{id:id},function(getData){
				
			for(var i=0;i<getData.length;i++){
				proDetails.push(getData[i]);
					
			}
			popUpWindow(proDetails);
			console.log(proDetails);
		});
		
	

}

//popup the window---------------------------------------------------------
function popUpWindow(data){
	
	popUpHolder.style.visibility="visible";
	return( popUpSubHolder.innerHTML=`
		
		<div class="popUp-image-wrapper"><img class="popUp-image"src="../Images/product/${data[0].image}"></div>
		<div class="popUp-product-details">
			<div class="pop_warapper"><h6>Id: </h6><p>${data[0].id}</p></div>
			<div class="pop_warapper"><h6>Name: </h6><p>${data[0].name}</p></div>
			<div class="pop_warapper"><h6>price: </h6><p>Rs ${data[0].price}.00</p></div>
			<br><br>
			<h6>Stock</h6>
			<div class="Stock">
				<div class="pop_warapper"><h6>Small: </h6><p>${data[0].small}</p></div>
				<div class="pop_warapper"><h6>Medium: </h6><p>${data[0].medium}</p></div>
				<div class="pop_warapper"><h6>Large: </h6><p>${data[0].large}</p></div>
				<div class="pop_warapper"><h6>XL: </h6><p>${data[0].xl}</p></div>
				<div class="pop_warapper"><h6>Total Quantity: </h6><p>${data[0].quantity}</p></div>
			</div><br><br>
			<div class="pop_warapper"><h6>Salles: </h6><p>${data[0].salles}</p></div>
			<div class="pop_warapper"><h6>Add Date: </h6><p>${data[0].addDate}</p></div>
			
			
		</div>
		
	
	`)	
	
	
}

function closePop(){
	
	popUpHolder.style.visibility="hidden";
	
}

function checktheproducts(id){
	
	var checkBox = document.getElementById("flexCheckDefault"+id);
	
	
	if(checkBox.checked === true){
		
		if (!collectId.includes(id)) {
		
			for(var i=0;i<1;i++){
									
					collectId.push(id);
									
			}
			
			
			
			
		}
		proCount+=1;
	}
	if(checkBox.checked ===false ){
		
		for(var i=0;i<1;i++){
 										
			collectId.pop(id);						
		}
		proCount-=1;
	}
	
	return(proSaleDetailsHolder.innerHTML=`
	
			<p>${proCount} products select</p>
			<label for="salePresentage">Sale Presentage</label>
			<input type="text" id="salePresentage" onClick="validated()"></input>
			<div id="input-error"></div><br><br>
			<button type="button" class="btn btn-success" onClick="addtosale()">Add to sale</button>
			
		`)
		
	
}


function validated(inputValue){
	var userInputError = document.getElementById('input-error');
	var InputPresentage = document.getElementById('salePresentage')
	userInputError.style.display = "none";
	if(isNaN(inputValue) ){
		
		isSaleSuccess=false;
		error = "Must input numbers";
		userInputError.innerHTML = error;	
	}else if(proCount==0){
		error="";
		isSaleSuccess=false;
		error = "Please select products from the list above";
		userInputError.innerHTML = error;
		userInputError.style.display = "block";
		
	}else if(InputPresentage.value===""){
		error="";
		isSaleSuccess=false;
		error = "Input Value is empty";
		userInputError.innerHTML = error;
	
	}else{
		
		isSaleSuccess=true;
		
	}
		
	
	
}

function addtosale(){
	var InputPresentage = document.getElementById('salePresentage').value;
	var userInputError = document.getElementById('input-error');
	
	
	validated(InputPresentage);
	
	if(isSaleSuccess){
		
		$.post("../ToSale",{saleIds:collectId,percentage:InputPresentage},function(){
			
			alert("ok");
			getDatalist();
			
			//disappeared user selected items-------------------------------
			for(var i=0; i<collectId.length; i++){
				
				var item = collectId[i];
				document.getElementById("items-"+item).style.display="none";
				
			}	
		})
		
	}else{
		userInputError.style.display = "block";
		
	}
		
	
	
}

function deleteFromSale(id){
	
	$.post("../deleteSale",{id:id},function(){
		
		alert("delete from sale");
		getDatalist();
	})
	
}
