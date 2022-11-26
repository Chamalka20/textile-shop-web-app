 var Bestproduct = document.querySelector('.Bestproduct__filter');
 var Newproduct = document.querySelector('.Newproduct__filter');
 
'use strict';

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

})(jQuery);

//----------get products data--------------------------------------

var proList = [];
function getDatalist(){
	
		$.getJSON("../getPro", function(getData) {
			
			for(var i=0;i<getData.length;i++){
					proList.push(getData[i]);
					
			}
			
			loadBestSellers();			
		});

};		
getDatalist();
console.log(proList);

//get today date-----------------------------------------
	var today = new Date();
	var mm = String(today.getMonth() + 1); 
	var yyyy = today.getFullYear();
	
	//----------identify this month-------------------------
	var thisMonth = new Date(yyyy + '-' + mm + '-' + 01);
	


//------------------------------------------------------------------------------------
function loadBestSellers(){
	
	var bestSalles=[];
	
	bestSalles=proList.filter(function (a) {
		
		var salles=[];
		salles.push(a.salles);
		
		var saleMatches = salles.filter(function(x) { return x >= 25 });
		
		return saleMatches.length>0;
		
	})
	
	return(Bestproduct.innerHTML= bestSalles.map((x)=>{
		if(x.saleActive==="true"){
			
			return`
                    <div class="product__item sale">
                        <div class="product__item__pic " style="background-image:url('../Images/product/${x.image}');">
                            <span class="label">Sale</span>
                            <ul class="product__hover">
                                <li><a href="#"><img src="../Images/icon/heart.png" alt=""></a></li>
                                <li><a href="#"><img src="../Images/icon/compare.png" alt=""> <span>Compare</span></a></li>
                            </ul>
                        </div>
                        <div class="product__item__text">
                            <h6>${x.name}</h6>
                            <a href="#" class="add-cart">+ Add To Cart</a>
                            <div class="rating">
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <div class="price-con"><h5>Rs ${x.price}.00</h5><del><p>Rs ${x.price}.00</p></del></div>
                            
                        </div>
                    </div>
                `
		
		}else {
			
			 // convert strings to Date objcts--------------
			var proDate = new Date(x.add_date);
			
			if(proDate >= thisMonth){
				
				return`
                    <div class="product__item">
                        <div class="product__item__pic " style="background-image:url('../Images/product/${x.image}');">
                            <span class="label">New</span>
                            <ul class="product__hover">
                                <li><a href="#"><img src="../Images/icon/heart.png" alt=""></a></li>
                                <li><a href="#"><img src="../Images/icon/compare.png" alt=""> <span>Compare</span></a></li>
                            </ul>
                        </div>
                        <div class="product__item__text">
                            <h6>${x.name}</h6>
                            <a href="#" class="add-cart">+ Add To Cart</a>
                            <div class="rating">
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                             <div class="price-con"><h5>Rs ${x.price}.00</h5></div>
                            
                        </div>
                    </div>
                `
			
				
			}else{
				
				return`
                    <div class="product__item">
                        <div class="product__item__pic " style="background-image:url('../Images/product/${x.image}');">
                           
                            <ul class="product__hover">
                                <li><a href="#"><img src="../Images/icon/heart.png" alt=""></a></li>
                                <li><a href="#"><img src="../Images/icon/compare.png" alt=""> <span>Compare</span></a></li>
                            </ul>
                        </div>
                        <div class="product__item__text">
                            <h6>${x.name}</h6>
                            <a href="#" class="add-cart">+ Add To Cart</a>
                            <div class="rating">
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <div class="price-con"><h5>Rs ${x.price}.00</h5></div>
                            
                        </div>
                    </div>
                `
			}
			
			
		}}).join(" "))
		
	
}

function loadNewArrivals(){
	
	return(Newproduct.innerHTML= proList.map((x)=>{
		var proDate = new Date(x.add_date);
		
		if(proDate >= thisMonth){
			
			return`
                    <div class="product__item">
                        <div class="product__item__pic " style="background-image:url('../Images/product/${x.image}');">
                            <span class="label">New</span>
                            <ul class="product__hover">
                                <li><a href="#"><img src="../Images/icon/heart.png" alt=""></a></li>
                                <li><a href="#"><img src="../Images/icon/compare.png" alt=""> <span>Compare</span></a></li>
                            </ul>
                        </div>
                        <div class="product__item__text">
                            <h6>${x.name}</h6>
                            <a href="#" class="add-cart">+ Add To Cart</a>
                            <div class="rating">
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                                <i class="fa fa-star-o"></i>
                            </div>
                            <h5>Rs ${x.price}.00</h5>
                            
                        </div>
                    </div>`
         
         
              
		}
		
	}).join(" "))
}

//------------------------get New Arrivals----------------------------------------------

function NewArrivals(){
	document.querySelector('#new').style.color="black";
	document.querySelector('#best').style.color="#b7b7b7";
	Bestproduct.style.display = "none";
	Newproduct.style.display = "grid";
	loadNewArrivals();
}
//------------------------get Best Sellers----------------------------------------------
function BestSellers(){
    document.querySelector('#best').style.color="black";
    document.querySelector('#new').style.color="#b7b7b7";
	Bestproduct.style.display = "grid";
	Newproduct.style.display = "none";
}




