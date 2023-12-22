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


//-----------------------------------------------------

var id = localStorage.getItem("id");

var proDetails = [];
var proDetailsHolder=document.querySelector("#product-details-holder");
//get product details from servlet------------------------------------
function getProDetails(){
	
	$(document).ready(function(){
		$.getJSON("../../ProDetails",{id:id},function(getData){
				
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
	
	if(data[0].saleActive==="true"){
		
		//calculate sale price--------------------------
		var proPrice = data[0].price;
		var presentage = data[0].salePercentage / 100;

		var totalValue = proPrice - (proPrice * presentage)
		
		return(proDetailsHolder.innerHTML=
		//sale item-----------------------------------------------
			`<div class="row">
	                <div class="col-lg-6">
	                    <div class="product__details__pic">
	                      
	                        <img src="../../Images/product/${data[0].image}">
	                        
	                    </div>
	                </div>
	                <div class="col-lg-6">
	                    <div class="product__details__text">
	                        <h3>${data[0].name}</h3>
	                        <div class="rating">
	                            <i class="fa fa-star"></i>
	                            <i class="fa fa-star"></i>
	                            <i class="fa fa-star"></i>
	                            <i class="fa fa-star"></i>
	                            <i class="fa fa-star"></i>
	                            <span>( 138 reviews )</span>
	                        </div>
	                        <div class="product__details__price">Rs ${totalValue}.00<span>Rs ${data[0].price}.00</span></div>
	                        <p>Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret fugit, sed quia consequuntur
	                        magni lores eos qui ratione voluptatem sequi nesciunt.</p>
	                        
	                         <div class="product__details__widget">
	                            <ul>
	                            	<li>
	                                    <span>Available size:</span>
	                                    <div class="size__btn" >
	                                        <label for="xl-btn" >
	                                            <input type="radio" id="xl-btn" onClick="selectSize(${data[0].xl},'XL',${data[0].id},${data[0].sizeId})">
	                                            xl
	                                        </label>
	                                        <label for="s-btn" >
	                                            <input type="radio" id="s-btn" onClick="selectSize(${data[0].small},'Small',${data[0].id},${data[0].sizeId})">
	                                            s
	                                        </label>
	                                        <label for="m-btn">
	                                            <input type="radio" id="m-btn" onClick="selectSize(${data[0].medium},'Medium',${data[0].id},${data[0].sizeId})">
	                                            m
	                                        </label>
	                                        <label for="l-btn">
	                                             <input type="radio" id="l-btn" onClick="selectSize(${data[0].large},'Large',${data[0].id},${data[0].sizeId})">
	                                            l
	                                        </label>
	                                    </div>
	                                </li>
	                                <li>
	                                    <span>Availability:</span>
	                                    <div class="stock__checkbox">
	                                        <label for="stockin">
	                                            In Stock
	                                            <input type="checkbox" id="stockin" >
	                                            <span class="checkmark"></span>
	                                        </label>
	                                        <div class="size-alert" style="display:none;"><p></p></div>
	                                    </div>
	                                </li>
	                                
	                                
	                                <li>
	                                    <span>Promotions:</span>
	                                    <p>Free shipping</p>
	                                </li>
	                            </ul>
	                        </div>
	                                                
	                        <div class="product__details__button">
	                            <div class="quantity">
	                                <span>Quantity:</span>
	                                <div class="pro-qty">
	                                	<div onClick="decrement()"><span class="material-symbols-outlined" id="minus" onCopy="return false" onselectstart="return false">remove</span></div>
	                                    <div class="quantity-value">1</div>
	                                    <div onClick="increment()"><span class="material-symbols-outlined" id="plus" onCopy="return false" onselectstart="return false">add</span></div>
										
	                                </div>
	                            </div>
	                            <a href="#" class="cart-btn"><span class="icon_bag_alt"></span> Add to cart</a>
	                            <ul>
	                                <li><a href="#"><span class="icon_heart_alt"></span></a></li>
	                                <li><a href="#"><span class="icon_adjust-horiz"></span></a></li>
	                            </ul>
	                        </div>
	                       
	                    </div>
	                </div>
	      
	            </div>
	
	
				`)
		
		
		}else{
			
		return(proDetailsHolder.innerHTML=
		//----- not sale item-----------------------------------------------
			`<div class="row">
	                <div class="col-lg-6">
	                    <div class="product__details__pic">
	                      
	                        <img src="../../Images/product/${data[0].image}">
	                        
	                    </div>
	                </div>
	                <div class="col-lg-6">
	                    <div class="product__details__text">
	                        <h3>${data[0].name}</h3>
	                        <div class="rating">
	                            <i class="fa fa-star"></i>
	                            <i class="fa fa-star"></i>
	                            <i class="fa fa-star"></i>
	                            <i class="fa fa-star"></i>
	                            <i class="fa fa-star"></i>
	                            <span>( 138 reviews )</span>
	                        </div>
	                        <div class="product__details__price">Rs ${data[0].price}.00</div>
	                        <p>Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret fugit, sed quia consequuntur
	                        magni lores eos qui ratione voluptatem sequi nesciunt.</p>
	                        
	                         <div class="product__details__widget">
	                            <ul>
	                            	<li>
	                                    <span>Available size:</span>
	                                    <div class="size__btn" >
	                                        <label for="xl-btn" >
	                                            <input type="radio" id="xl-btn" onClick="selectSize(${data[0].xl},'XL',${data[0].id},${data[0].sizeId})">
	                                            xl
	                                        </label>
	                                        <label for="s-btn" >
	                                            <input type="radio" id="s-btn" onClick="selectSize(${data[0].small},'small',${data[0].id},${data[0].sizeId})">
	                                            s
	                                        </label>
	                                        <label for="m-btn">
	                                            <input type="radio" id="m-btn" onClick="selectSize(${data[0].medium},'medium',${data[0].id},${data[0].sizeId})">
	                                            m
	                                        </label>
	                                        <label for="l-btn">
	                                            <input type="radio" id="l-btn" onClick="selectSize(${data[0].large},'large',${data[0].id},${data[0].sizeId})">
	                                            l
	                                        </label>
	                                    </div>
	                                </li>
	                                <li>
	                                    <span>Availability:</span>
	                                    <div class="stock__checkbox">
	                                        <label for="stockin">
	                                            In Stock
	                                            <input type="checkbox" id="stockin" >
	                                            <span class="checkmark"></span>
	                                        </label>
	                                        <div class="size-alert" style="display:none;"><p></p></div>
	                                    </div>
	                                </li>
	                                
	                                
	                                <li>
	                                    <span>Promotions:</span>
	                                    <p>Free shipping</p>
	                                </li>
	                            </ul>
	                        </div>
	                                                
	                        <div class="product__details__button">
	                            <div class="quantity">
	                                <span>Quantity:</span>
	                                <div class="pro-qty">
	                                	<div onClick="decrement()"><span class="material-symbols-outlined" id="minus" onCopy="return false" onselectstart="return false">remove</span></div>
	                                    <div class="quantity-value">1</div>
	                                    <div onClick="increment()"><span class="material-symbols-outlined" id="plus" onCopy="return false" onselectstart="return false">add</span></div>
										
	                                </div>
	                            </div>
	                            <a  class="cart-btn" onClick="addToCart()"><span class="icon_bag_alt"></span> Add to cart</a>
	                            <ul>
	                                <li><a href="#"><span class="icon_heart_alt"></span></a></li>
	                                <li><a href="#"><span class="icon_adjust-horiz"></span></a></li>
	                            </ul>
	                        </div>
	                       
	                    </div>
	                </div>
	      
	            </div>
	
	
				`)
			
			
			
		}
	
	

	
}
//----------------------------------------------------------
var basket= [];
var localStrorage = JSON.parse(localStorage.getItem("cartData"));

//get localStorage data------------------------------------
for(var i=0;i<localStrorage.length;i++){
	
	basket.push(localStrorage[i]);
					
}

console.log(basket);

if(localStrorage !== null){
	
	var cartIcon = document.querySelector('.cart-amount');
	cartIcon.style.display = "block";
	cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x+y ,0);
	console.log("hghhf");
	
}
//------------------------------------------------------------

//user select product size ---------------------------------
var limit = 0;
var items = 0;
var proId = 0;
var getsizeId =0;
var size = "";

function selectSize(data,proSize,id,sizeId){
	limit= data;
	proId = id;
	size = proSize;
	getsizeId = sizeId;
	
	//reset quantity------------------------------
	items = 0;
	update();
	document.querySelector('#plus').style.color="black"
	document.querySelector('#minus').style.color="black";
	//----------------------------------------------------------
	
	$(document).ready(function(){
		
		$('.size__btn label').on('click',function(){
			console.log("ner");
			$(this).addClass('active');
			$(this).siblings().removeClass('active');
			
		})
		
	})
	
	
	document.querySelector('.size-alert').style.display = "none";
	document.querySelector('#stockin').checked = false;
	document.querySelector('#stockin').disabled = true;
	
	if(data <= 10){
		document.querySelector('#stockin').checked = true;
		document.querySelector('.size-alert').innerHTML= data+" in stock";
		document.querySelector('.size-alert').style.display = "block";
		
			
	}else{
		
		document.querySelector('#stockin').checked = true;
		
		
	}
	
	
}



//------user select product quantity-------------------------

function increment(){
	
	var proAddAlert=document.querySelector(".product-add-warning");
	//user not select size---------------------
	if(size !== ""){
		
		proAddAlert.innerHTML=``;
		
		if(limit !== 0){
		
			if(limit>items){
			
			items+=1;
			document.querySelector('#minus').style.color="black";
			
			var search = basket.find((x) => x.id === proId)
			
			console.log(search);
			//Reduce when the same piece of data is stored 
				if(search === undefined){
					
					basket.push({id:proId ,size:size,item:1,limit:limit,sizeId:getsizeId})
		
				}else{
					
					search.item+=1;
				}
			
			//---------------------------
		
			console.log(basket);
		
			}else{
				
				document.querySelector('#plus').style.color="#cfcbca";
			}
		
		}else{
			
			items+=1;
		}
		
		
		
	}else{
		document.body.scrollTop = 0;
  		document.documentElement.scrollTop = 0;
		
		proAddAlert.innerHTML=`<div class="warning-message"><p>Please select product size.</p></div>`;
		
	}
	
	
		
	
	update();
	
}

function decrement(){
	
	// limit minimumum quantity is one------------------------------
	if(items !== 1){
		
		items-=1;
		document.querySelector('#plus').style.color="black";
		
		var search = basket.find((x) => x.id === proId);
		if(search === undefined){
			console.log("gtttt")
			basket.push({id:proId ,size:size,item:1});
		}else{
			
			search.item-=1;
		}
		console.log(basket);
	}else{
		
		document.querySelector('#minus').style.color="#cfcbca";
	}
	
	update();
}

function update(){
	
	document.querySelector('.quantity-value').innerHTML=items;
	
	
}

//---------------add to  ADD TO CART --------------------------

function addToCart(){
	
	var cartIcon = document.querySelector('.cart-amount');
	var proAddAlert=document.querySelector(".product-add-alert");
	
	document.body.scrollTop = 0;
  	document.documentElement.scrollTop = 0;
	
	proAddAlert.innerHTML=`<div class="success-message"><p>${proDetails[0].name} have been added to your cart.</p></div>`;
	cartIcon.style.display = "block";
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x,y) => x+y ,0)
	
   	localStorage.setItem("cartData",JSON.stringify(basket));
    
}




