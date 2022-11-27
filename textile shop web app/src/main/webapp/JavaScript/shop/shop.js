
 

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

//--------------- get categorie names-------------------------
var catList = document.querySelector('.nice-scroll');
var split_string = []

$.get("../getCate", function(arraylist) {   
		
	 split_string = arraylist.split(" ");   
	 loadCat(split_string);	 
			 	
});
	    
	    
function loadCat(data){
	
	return(catList.innerHTML=data.map((x)=>{
		
		return`	 
			 <li><a href="#">${x}</a></li>`
		
	}).join(" "))
	
}   
	    
	    
//------------------Price Range--------------------------------------

var rangeInput = document.querySelectorAll('.rage-input input');
var progress = document.querySelector('.slider .progress');
var showPrice = document.querySelectorAll('.show-price-range p');
var priceGap =500;
//default values------------------------------------
var minVal = parseInt(rangeInput[0].value);
var maxVal = parseInt(rangeInput[1].value);


showPrice[0].innerHTML="Minimum price: Rs "+ minVal;
showPrice[1].innerHTML="Maximum price: Rs "+ maxVal;

progress.style.left = (minVal/rangeInput[0].max)*100+"%";
progress.style.right = 100-(maxVal/rangeInput[1].max)*100+"%";

rangeInput.forEach(input=>{
		//after user change the price-----------------------
		input.addEventListener("input",(e)=>{
			
			var minVal = parseInt(rangeInput[0].value);
			var maxVal = parseInt(rangeInput[1].value);
			
			if(maxVal-minVal < priceGap){
				//if active slider---------------
				if(e.target.className ==="range-min"){
					rangeInput[0].value = maxVal - priceGap;
					
				}else{
					
					rangeInput[1].value = minVal + priceGap;
					console.log(minVal + priceGap);
				}
				
			}else{
				showPrice[0].innerHTML="Minimum price: Rs "+ minVal;
				showPrice[1].innerHTML="Maximum price: Rs "+ maxVal;
				
				progress.style.left = (minVal/rangeInput[0].max)*100+"%";
				progress.style.right = 100-(maxVal/rangeInput[1].max)*100+"%";
			}
			
		
		})
		
})


//---------------------------------------------------------------
//----------get products data--------------------------------------
var productsHolder = document.querySelector('#products-holder');
var pagination_element = document.getElementById('pagination');
var current_page = 1;
var rows = 6;
var proList = [];

function getDatalist(){
	
		$.getJSON("../getPro", function(getData) {
			
			for(var i=0;i<getData.length;i++){
					proList.push(getData[i]);
					
			}
			
			DisplayList(proList, productsHolder, rows, current_page);
			SetupPagination(proList, pagination_element, rows);			
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

//-----------display products-----------------------------------------
function DisplayList (items, wrapper, rows_per_page, page) {
	
	wrapper.innerHTML = "";
	page--;
	
	let start = rows_per_page * page;
	let end = start + rows_per_page;
	let paginatedItems = items.slice(start, end);
		
	return(productsHolder.innerHTML= paginatedItems.map((x)=>{
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

//---------------- Pagination  --------------------------------------------------------------
function SetupPagination (items, wrapper, rows_per_page) {
	wrapper.innerHTML = "";

	let page_count = Math.ceil(items.length / rows_per_page);
	for (let i = 1; i < page_count + 1; i++) {
		let btn = PaginationButton(i, items);
		wrapper.appendChild(btn);
	}
}

function PaginationButton (page, items) {
	let button = document.createElement('button');
	button.innerText = page;

	if (current_page == page){
		
		button.classList.add('active');
		
	} 

	button.addEventListener('click', function () {
		current_page = page;
		console.log(current_page);
		DisplayList(items, pagination_element, rows, current_page);

		let current_btn = document.querySelector('.product__pagination button.active');
		console.log(current_btn);
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}





