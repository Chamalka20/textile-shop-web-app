(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");

        /*------------------
            Gallery filter
        --------------------*/
        $('.filter__controls li').on('click', function () {
            $('.filter__controls li').removeClass('active');
           
           
			
        });
        if ($('.product__filter').length > 0) {
          
            var mixer = mixitup(Bestproduct);
        }
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Search Switch
    $('.search-switch').on('click', function () {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click', function () {
        $('.search-model').fadeOut(400, function () {
            $('#search-input').val('');
        });
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });

    /*------------------
        Accordin Active
    --------------------*/
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).prev().addClass('active');
    });

    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).prev().removeClass('active');
    });

    //Canvas Menu
    $(".canvas__open").on('click', function () {
        $(".offcanvas-menu-wrapper").addClass("active");
        $(".offcanvas-menu-overlay").addClass("active");
    });

    $(".offcanvas-menu-overlay").on('click', function () {
        $(".offcanvas-menu-wrapper").removeClass("active");
        $(".offcanvas-menu-overlay").removeClass("active");
    });

    /*-----------------------
        Hero Slider
    ------------------------*/
    $(".hero__slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ["<span class='arrow_left'><span/>", "<span class='arrow_right'><span/>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: false
    });

    /*--------------------------
        Select
    ----------------------------*/
    $("select").niceSelect();

    /*-------------------
	
    /*-------------------
		Scroll
	--------------------- */
    $(".nice-scroll").niceScroll({
        cursorcolor: "#0d0d0d",
        cursorwidth: "5px",
        background: "#e5e5e5",
        cursorborder: "",
        autohidemode: true,
        horizrailenabled: false
    });

    //*------------------   

})(jQuery)


//get the current date------------------------------------------
today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;




//----------------------------------------------------------
var basket= [];
var localStrorage = JSON.parse(localStorage.getItem("cartData"));

//get localStorage data------------------------------------
if(localStrorage !== null){
	
	for(var i=0;i<localStrorage.length;i++){
	
	basket.push(localStrorage[i]);
					
	}
	
}

console.log(basket);

if(localStrorage !== null){
	
	var cartIcon = document.querySelector('.cart-amount');
	cartIcon.style.display = "block";
	cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x+y ,0);
	
	
}else{
	
	window.location='shopping-cart.jsp';
}
//------------------------------------------------------------


//get products data from database------------------------------------------
var proList = [];
var listHolder=document.querySelector('.checkout__total__products');

function getDatalist(){
	
		$.getJSON("../../getPro", function(getData) {
			
			for(var i=0;i<getData.length;i++){
					proList.push(getData[i]);
					
			}
			displayoderList(proList);
			totalAomunt(proList);
			console.log(proList);	
		});

};		
getDatalist();




function displayoderList(data){
	var no =0;
	return(listHolder.innerHTML = basket.map((x)=>{
		
		var{id,item,size,limit} = x;
		var search = data.find((el)=> el.id === id )|| [];
		console.log(search);
		no += 1;
		var subtotalPrice = search.price * item;  
	
		return`<li>${no}. ${search.name} <span>Rs ${subtotalPrice.toLocaleString("en-US")}.00</span><p><i>Quantity &#xd7 ${item}</i></p></li>`
		
		
	}).join(" "))
	
}

// get total amount -----------------------------------
var finaltotal = 0;

function totalAomunt(data){
	
 	if(basket.length!== 0){
	
		var total = basket.map((x)=>{
			
			var{id,item}=x;
			var search = data.find((el)=> el.id === id )|| [];
			
			return search.price*item
			
			
		}).reduce((x,y) => x+y ,0);
		
		finaltotal = total;
		//display total---------------------------
		document.querySelector('.checkout__total__all').innerHTML = `<li>Total <span>Rs ${total.toLocaleString("en-US")}.00</span></li>`;
	
	}else return
	
	
}



// select ceate account or not -----------------------------------------------------
var accCreat =document.querySelector('.checkout__input__checkbox #acc');
var isAccountCreate = false;


function createAccount(){
	
	if(accCreat.checked === true){
	
		isAccountCreate = true;
		document.querySelector('#pass-show').style.display = "block";
                                									
		 
	
	}else{
		
		isAccountCreate = false;
		document.querySelector('#pass-show').style.display = "none";
	} 
	
	
	
}




//select payment type-----------------------------------------------------------------------

var payType = document.querySelectorAll(".checkout__input__checkbox #payment");

var payMethod = "";

payType.forEach(input=>{
	
	input.addEventListener("click",(e)=>{
	
		if(e.target.value === "Cash-on-delivery"){
			
			document.querySelector('.pay-methods').innerHTML = ``;
			payMethod = e.target.value;
			
			
		}else if(e.target.value === "Pay-Online"){
			
			document.querySelector('.pay-methods').innerHTML = `<img src="../../Images/payment.png">`;
			payMethod = e.target.value;
		}
	
	
	})
	
	
})


// get user input data------------------------------------------------------
var strArr = {basket}

function getUserInfor(){

	
		
	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;
	var country = document.getElementById('country').value;
	var street = document.getElementById('street').value;
	var apartment = document.getElementById('apartment').value;
	var city = document.getElementById('city').value;
	var zip = document.getElementById('zip').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;
	var password=document.getElementById('password').value;
	
	if(firstName === "" ||  lastName === "" || country ===""|| street===""|| city===""|| zip==="" || phone===""|| email==="" ){
		
		// When the user clicks on the button, scroll to the top of the document---------------
		document.body.scrollTop = 0;
  		document.documentElement.scrollTop = 0;
		
		document.querySelector('.message-holder').innerHTML =`<div class="warning-message"><p>Please fill out fields</p></div>`;
		
		
	
	}else{
		
		document.querySelector('.message-holder').innerHTML =``;
		
		// user select cash on delivery----------------------------
		if(payMethod === "Cash-on-delivery"){
			
			//if user select creat account-----------------------------
			if(isAccountCreate === true){
				
				
				$.post("../../user_insert",{fname:firstName,lname:lastName,pass:password ,email:email,ZIP:zip,country:country,phone:phone,
											isTemporaty:"false",isOrder:"true",addli1:apartment,addli2:street,city:city,date:today,'selectItems[]':JSON.stringify(strArr),total:finaltotal,payType:"CashOnDelivery",provider:"null",account_no:0,expiry:"null"},function(){
					
					//update sells and products quantity---------------------------------
					$.post("../../orderprUp",{'selectItems[]':JSON.stringify(strArr)},function(){});
					
					
					document.body.scrollTop = 20;
  					document.documentElement.scrollTop = 20;
  					
					localStorage.removeItem("cartData");
					
					document.querySelector('.checkout').innerHTML=`<div class="success-container">
																		<lottie-player src="https://assets10.lottiefiles.com/packages/lf20_4qldwfx4.json" background="transparent"  speed="1"  style="width: 300px; height: 300px;"  autoplay></lottie-player>
																		<h5>Your order is Complete</h5>
																		<button><a href="../shop/home.jsp">Back to Home</button>
																	</div>`
		
				});	
				
				
				
				
			}else{
				
					$.post("../../user_insert",{fname:firstName,lname:lastName,pass:password ,email:email,ZIP:zip,country:country,phone:phone,
											isTemporaty:"true",isOrder:"true",addli1:apartment,addli2:street,city:city,date:today,'selectItems[]':JSON.stringify(strArr),total:finaltotal,payType:"CashOnDelivery",provider:"null",account_no:0,expiry:"null"},function(){
					
					//update sells and products quantity---------------------------------
					$.post("../../orderprUp",{'selectItems[]':JSON.stringify(strArr)},function(){});
					
					
					document.body.scrollTop = 20;
  					document.documentElement.scrollTop = 20;
					
					localStorage.removeItem("cartData");
					
					document.querySelector('.checkout').innerHTML=`<div class="success-container">
																		<lottie-player src="https://assets10.lottiefiles.com/packages/lf20_4qldwfx4.json" background="transparent"  speed="1"  style="width: 300px; height: 300px;"  autoplay></lottie-player>
																		<h5>Your order is Complete</h5>
																		<button><a href="../shop/home.jsp">Back to Home</button>
																	</div>`
		
				
				});	
				
				
				
			}
			
			
		
		// user select pay-online----------------------------
		}else if(payMethod === "Pay-Online"){
			
			document.querySelector('.checkout').innerHTML=`<div class="success-container">
																		  <div  class="card-holder">

																	        <div class="row">
																	
																	
																	            <div class="col">
																	
																	                <h3 class="title">payment</h3>
																	
																	                <div class="inputBox">
																	                    <span>cards accepted :</span>
																	                    <img src="images/card_img.png" alt="">
																	                </div>
																	                <div class="inputBox">
																	                    <span>name on card :</span>
																	                    <input type="text" id="card-name">
																	                </div>
																	                <div class="inputBox">
																	                    <span>credit card number :</span>
																	                    <input type="number" placeholder="1111-2222-3333-4444" id="card-no">
																	                </div>
																	                <div class="inputBox">
																	                    <span>exp month :</span>
																	                    <input type="text" placeholder="january" id="card-month">
																	                </div>
																	
																	                <div class="flex">
																	                    <div class="inputBox">
																	                        <span>exp year :</span>
																	                        <input type="number" placeholder="2022" id="card-year">
																	                    </div>
																	                    <div class="inputBox">
																	                        <span>CVV :</span>
																	                        <input type="text" placeholder="1234" id="card-cvv">
																	                    </div>
																	                </div>
																	
																	            </div>
																	    
																	        </div>
																	
																	        <input type="submit" onClick="payOnline()" value="proceed to checkout" class="submit-btn">
																	
																	    </div>

																		
																		
																	</div>`
			
			
		}else{
		
			document.body.scrollTop = 0;
  			document.documentElement.scrollTop = 0;
			document.querySelector('.message-holder').innerHTML =`<div class="warning-message"><p>Please select payment method</p></div>`;
			
		}
		

	}
	
	
	
  	
} 

//cerdit card information----------------------------------------
function payOnline(){
	var cardName = document.getElementById('card-name').value;
	var cardNo = document.getElementById('card-no').value;
	var cardMonth = document.getElementById('card-month').value;
	var cardYear = document.getElementById('card-year').value;
	var cardCvv = document.getElementById('card-cvv').value;
	
	if(cardName === "" ||  cardNo === "" || cardMonth ===""|| cardYear===""|| cardCvv==="" ){
		
		document.body.scrollTop = 0;
  		document.documentElement.scrollTop = 0;
		
		document.querySelector('.message-holder').innerHTML =`<div class="warning-message"><p>Please fill out fields</p></div>`;
		
		
	}else{
		
		document.body.scrollTop = 0;
  		document.documentElement.scrollTop = 0;
		document.querySelector('.message-holder').innerHTML =``;
		document.querySelector('.checkout').innerHTML=`<div class="success-container">
																		<lottie-player src="https://assets10.lottiefiles.com/packages/lf20_4qldwfx4.json" background="transparent"  speed="1"  style="width: 300px; height: 300px;"  autoplay></lottie-player>
																		<h5>Your order is Complete</h5>
																		<button><a href="../../jsp/shop/home.jsp">Back to Home</button>
																	</div>`
		localStorage.removeItem("cartData");
		
	}
	
	
	
}




