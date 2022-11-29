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
		$.getJSON("../ProDetails",{id:id},function(getData){
				
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
	
	return(proDetailsHolder.innerHTML=`
	
		<div class="row">
                <div class="col-lg-6">
                    <div class="product__details__pic">
                      
                        <img src="../Images/product/${data[0].image}">
                        
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
                        <div class="product__details__price">Rs ${data[0].price}.00<span>$ 83.0</span></div>
                        <p>Nemo enim ipsam voluptatem quia aspernatur aut odit aut loret fugit, sed quia consequuntur
                        magni lores eos qui ratione voluptatem sequi nesciunt.</p>
                        
                         <div class="product__details__widget">
                            <ul>
                            	<li>
                                    <span>Available size:</span>
                                    <div class="size__btn">
                                        <label for="xs-btn" class="active">
                                            <input type="radio" id="xs-btn" onClick="selectSize(${data[0].xl})">
                                            xl
                                        </label>
                                        <label for="s-btn">
                                            <input type="radio" id="s-btn" onClick="selectSize(${data[0].small})">
                                            s
                                        </label>
                                        <label for="m-btn">
                                            <input type="radio" id="m-btn" onClick="selectSize(${data[0].medium})">
                                            m
                                        </label>
                                        <label for="l-btn">
                                            <input type="radio" id="l-btn" onClick="selectSize(${data[0].large})">
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
                                	<div onClick="decrement()"><span class="material-symbols-outlined" >remove</span></div>
                                    <div class="quantity-value">1</div>
                                    <div onClick="increment()"><span class="material-symbols-outlined" >add</span></div>
									
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
	
	
	
	
}
//----------------------------------------------------------

//user select product size ---------------------------------

function selectSize(data){
	
	document.querySelector('.size-alert').style.display = "none";
	document.querySelector('#stockin').checked = false;
	
	if(data <= 10){
		document.querySelector('#stockin').checked = true;
		document.querySelector('.size-alert').innerHTML= data+" in stock";
		document.querySelector('.size-alert').style.display = "block";
		
	}else{
		
		document.querySelector('#stockin').checked = true;
		
	}
	
}



//------user select product quantity-------------------------
var items = 0;
function increment(){
	
	items+=1;
	
	update();
	
}

function decrement(){
	
	if(items !== 1){
		
		items-=1;
		
	}
	
	update();
}

function update(){
	
	document.querySelector('.quantity-value').innerHTML=items;
	
	
}

