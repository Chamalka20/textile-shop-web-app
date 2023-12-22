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


//----------------------------------------------------------
var basket= [];
var localStrorage = JSON.parse(localStorage.getItem("cartData"));
var localfav_items = JSON.parse(localStorage.getItem("fav_items"));
console.log(localfav_items)
//get localStorage cart data------------------------------------
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
	
}


var proList = [];

function getDatalist(){
	
		$.getJSON("../../getPro", function(getData) {
			
			for(var i=0;i<getData.length;i++){
					proList.push(getData[i]);
					
			}
			
			
			DisplayWishList(proList);	
		});

};		
getDatalist();


const diswish_list = document.getElementById('wishlist-container');

function DisplayWishList (data){
	
	
	// Generate the non-Wishlist and Wishlist product lists using the map function	
	const productsWithWishlistFlag = data.map(product => ({
	  id: product.id,
	  add_date : product.add_date,
	  categorie : product.categorie,
	  desc : product.desc,
	  image : product.image,
	  name : product.name,
	  price : product.price,
	  saleActive : product.saleActive,
	  salePercentage : product.salePercentage,
	  salles : product.salles,
      sizeId : product.sizeId,
	  stock : product.stock,	 
	  isWishlist: localfav_items.includes(product.id)
	}));
	
	var wishlist = productsWithWishlistFlag.filter(item =>{return item.isWishlist === true })
	
	
	diswish_list.innerHTML = wishlist.map(ele =>{
		
		
		return`
		
			<div class="wish-element"><img src="../../Images/product/${ele.image}"><p class="pro-name">${ele.name}</p><p class="price">Rs ${ele.price.toLocaleString("en-US")}.00</p><div class="in-stock"><p>${ele.stock ? "in-stock" : "out-of-stock"}</p></div><div class="actions"><p>Options</p></div></div> 
		
		
		
		
		`
		
		
		
	})
	
	
	
	
	
}









