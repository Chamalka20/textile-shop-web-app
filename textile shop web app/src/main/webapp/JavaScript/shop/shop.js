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
	console.log("hghhf");
	
}
//------------------------------------------------------------

//--------------------------------------------------------------------------------------------
//get today date-----------------------------------------
	var today = new Date();
	var mm = String(today.getMonth() + 1); 
	var yyyy = today.getFullYear();
	
	//----------identify this month-------------------------
	var thisMonth = new Date(yyyy + '-' + mm + '-' + 01);


//----------get products data--------------------------------------
var isCatFilterActive = false;
var isPriceFilterActive = false;
var proList = [];
var resultProductData = [];
const list_element = document.getElementById('products-holder');
const pagination_element = document.getElementById('pagination');
let current_page = 1;
let rows = 6;

//get products data from database------------------------------------------

function getDatalist(){
	
		$.getJSON("../getPro", function(getData) {
			
			for(var i=0;i<getData.length;i++){
					proList.push(getData[i]);
					
			}
			defaultSelect(proList);
				
		});

};		
getDatalist();



//--------------- get categorie names-------------------------
var catList = document.querySelector('.nice-scroll');
var split_string = []
var activeCat = "";
var storePriceChangetype = "";
var storePriceChangevalue = 0;

$.get("../getCate", function(arraylist) {   
		
	 split_string = arraylist.split(" ");   
	 loadCat(split_string);	 
			 	
});
	    
	    
function loadCat(data){
	
	
	$(".nice-scroll ").append(data.map(function (el) {
		   	
		  if(el==="All"){
			
				return $('<li >').append(
				
					$('<a  class="active">').text(el))
			
			}else{
				
				return $('<li >').append(
				
					$('<a>').text(el))
				
			} 	
		   	
			
		   	
		}));
	
 var catlistItems = document.querySelectorAll('.nice-scroll li a');
 
 
//user click one by one category names------------------------------------ 
 catlistItems.forEach(input=>{
	
	if(input.className ==="active"){
		
		input.style.color ="black";
		
	}
	
	input.addEventListener("click",(e)=>{
		
		//default select active class color change-------------------------
		
		document.querySelector('.nice-scroll li a.active').style.color="#b7b7b7";
		
		if(isCatFilterActive !== true){
			
			for(var i=0;i<data.length;i++){
				
				if(e.target.innerHTML===data[i]){
					
					
					e.target.classList.add('active');
					e.target.style.color ="black";
					filterbyCategories(proList,e.target.innerHTML);
					
					
				}
				
			}
			
		}
				
	})
	
 })
 
 
}   

//------set default Categorie -------------------------

function defaultSelect(data){
	
	filterbyCategories(data,"All")
	
	
}

  
//--------------filter by Categories----------------------
	  
function filterbyCategories(data,categorie){
	
	if(categorie !== "All"){
		
		resultProductData= data.filter(function (a) {
				var hitCategory =[];
	            hitCategory.push(a.categorie);
	
				// filter this salles by less than 10
	            var hitCategoryMatches = hitCategory.filter(function(cat) { return cat === categorie });
	            
				return hitCategoryMatches.length>0;
			})
		isCatFilterActive=true
		
		activeFilters(categorie,storePriceChangetype,storePriceChangevalue);
		activeCat = categorie;
	}else{
		
		for(var i=0;i<data.length;i++){
					resultProductData.push(data[i]);
					
			}
		
	}
		
	PriceRange(resultProductData);	
	DisplayList(resultProductData, list_element, rows, current_page);
	SetupPagination(resultProductData, pagination_element, rows);	
		
}	    
	    
//------------------Price Range--------------------------------------

var rangeInput = document.querySelectorAll('.rage-input input');
var progress = document.querySelector('.slider .progress');
var showPrice = document.querySelectorAll('.show-price-range div');
var priceGap =500;
//default values------------------------------------
var minVal = parseInt(rangeInput[0].value);
var maxVal = parseInt(rangeInput[1].value);


showPrice[0].innerHTML="Minimum price: Rs "+ minVal;
showPrice[1].innerHTML="Maximum price: Rs "+ maxVal;

progress.style.left = (minVal/rangeInput[0].max)*100+"%";
progress.style.right = 100-(maxVal/rangeInput[1].max)*100+"%";

//-------------------------------------------------------
function priceChange(type,value){

	isPriceFilterActive= true;
	if(type==="range-max"){
		
		storePriceChangetype = "MaxPrice";
		storePriceChangevalue = value;
		activeFilters(activeCat,"MaxPrice",value);
		
	}
	
	if(type==="range-min"){
		
		storePriceChangetype = "MinPrice";
		storePriceChangevalue = value;
		activeFilters(activeCat,"MinPrice",value);
		
	}
}

//-------------------------------------------------------------
function PriceRange(data){
	
	//-----------------------------------
	
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
			
			resultProductData= data.filter(function (a) {
				var hitprice =[];
	            hitprice.push(a.price);
	
				
	            var hitpriceMatches = hitprice.filter(function(val) { return val >= minVal && val <= maxVal });
	           
				return hitpriceMatches.length>0;
			})
			
			
			DisplayList(resultProductData, list_element, rows, current_page);
			SetupPagination(resultProductData, pagination_element, rows);	
		})
		
	})
	
	
	
}
PriceRange()

//-----------------set-filter-history------------------------------
function activeFilters(cat,priceRage,priceValue){
	
const filterList = document.getElementById('filterList');	
	
	if(isCatFilterActive===true){
		
		//if user price and category both are filter----------------------
		if(isPriceFilterActive === true){
			
			return(filterList.innerHTML=`
			
			<div class="filter-history-item-cat" onClick="closeFilter(className)"><span>${cat}</span><span class="material-symbols-outlined">close</span></div>
			<div class="filter-history-item-price" onClick="closeFilter(className)"><span>${priceRage}:</span><span> ${priceValue}</span><span class="material-symbols-outlined">close</span></div>
			`)
			
		}else{
			
				
			return(filterList.innerHTML=`
			
			<div class="filter-history-item-cat" onClick="closeFilter(className)"><span>${cat}</span><span class="material-symbols-outlined">close</span></div>
			`)

			
			
		}
			
		
	}
	
	if(isPriceFilterActive === true){
		console.log(priceRage);
		return(filterList.innerHTML=`
			
			<div class="filter-history-item-price" onClick="closeFilter(className)"><span>${priceRage}:</span><span> ${priceValue.toLocaleString("en-US")}</span><span class="material-symbols-outlined">close</span></div>
		`)
	}
	
}

function closeFilter(name){
	
	if(name==="filter-history-item-cat"){
		
		var catlistItem = document.querySelector('.nice-scroll li a.active');
		catlistItem.style.color="#b7b7b7";
		catlistItem.classList.remove('active');
		document.querySelector('.filter-history-item-cat').style.display="none";
		isCatFilterActive = false;
		proList = [];
		resultProductData = [];
		getDatalist();
		
	}
	
	if(name==="filter-history-item-price"){
		
		document.querySelector('.filter-history-item-price').style.display="none";
		isPriceFilterActive = false;
		
		minVal = 0;
        maxVal = 7000;
        
        // user remove the filters and reset defult values-------------------
		progress.style.left = (minVal/rangeInput[0].max)*100+"%";
		progress.style.right = 100-(maxVal/rangeInput[1].max)*100+"%";
	
		rangeInput[0].value = minVal;
		rangeInput[1].value = maxVal;
		
	}
	
	
}


//---------------------------------------------------------------

//--------------display resuls------------------------------------------------

function DisplayList (items, wrapper, rows_per_page, page) {
	wrapper.innerHTML = "";
	page--;

	let start = rows_per_page * page;
	let end = start + rows_per_page;
	let paginatedItems = items.slice(start, end);
	
	//total results-----------------------------------------------------------
	var results =document.querySelector('.shop__product__option__left  p');
    results.innerHTML ="Showing 1-"+rows+" of 126 results";
    
	if(items.length != 0){//if product result is empty-------------------------
		
		return(list_element.innerHTML= paginatedItems.map((x)=>{
			if(x.saleActive==="true"){
				
				//calculate sale price--------------------------
					var proPrice = x.price;
					var presentage = x.salePercentage / 100;
			
					var totalValue = proPrice - (proPrice * presentage)
				
				return`
	                    <div class="product__item sale" onClick="productDetails(${x.id})">
	                        <div class="product__item__pic " style="background-image:url('../Images/product/${x.image}');">
	                            <span class="label">Sale</span>
	                            <ul class="product__hover">
	                                <li><a href="#"><img src="../Images/icon/heart.png" alt=""></a></li>
	                                <li><a href="#"><img src="../Images/icon/compare.png" alt=""> <span>Compare</span></a></li>
	                            </ul>
	                        </div>
	                        <div class="product__item__text">
	                            <h6>${x.name}</h6>
	                           
	                            <div class="rating">
	                                <i class="fa fa-star-o"></i>
	                                <i class="fa fa-star-o"></i>
	                                <i class="fa fa-star-o"></i>
	                                <i class="fa fa-star-o"></i>
	                                <i class="fa fa-star-o"></i>
	                            </div>
	                            <div class="price-con"><h5>Rs ${totalValue.toLocaleString("en-US")}.00</h5><del><p>Rs ${x.price.toLocaleString("en-US")}.00</p></del></div>
	                            
	                        </div>
	                    </div>
	                `
			
			}else {
				
				 // convert strings to Date objcts--------------
				var proDate = new Date(x.add_date);
				
				if(proDate >= thisMonth){
					
					return`
	                    <div class="product__item" onClick="productDetails(${x.id})">
	                        <div class="product__item__pic " style="background-image:url('../Images/product/${x.image}');">
	                            <span class="label">New</span>
	                            <ul class="product__hover">
	                                <li><a href="#"><img src="../Images/icon/heart.png" alt=""></a></li>
	                                <li><a href="#"><img src="../Images/icon/compare.png" alt=""> <span>Compare</span></a></li>
	                            </ul>
	                        </div>
	                        <div class="product__item__text">
	                            <h6>${x.name}</h6>
	                           
	                            <div class="rating">
	                                <i class="fa fa-star-o"></i>
	                                <i class="fa fa-star-o"></i>
	                                <i class="fa fa-star-o"></i>
	                                <i class="fa fa-star-o"></i>
	                                <i class="fa fa-star-o"></i>
	                            </div>
	                             <div class="price-con"><h5>Rs ${x.price.toLocaleString("en-US")}.00</h5></div>
	                            
	                        </div>
	                    </div>
	                `
				
					
				}else{
					
					return`
	                    <div class="product__item" onClick="productDetails(${x.id})">
	                        <div class="product__item__pic " style="background-image:url('../Images/product/${x.image}');">
	                           
	                            <ul class="product__hover">
	                                <li><a href="#"><img src="../Images/icon/heart.png" alt=""></a></li>
	                                <li><a href="#"><img src="../Images/icon/compare.png" alt=""> <span>Compare</span></a></li>
	                            </ul>
	                        </div>
	                        <div class="product__item__text">
	                            <h6>${x.name}</h6>
	                            
	                            <div class="rating">
	                                <i class="fa fa-star-o"></i>
	                                <i class="fa fa-star-o"></i>
	                                <i class="fa fa-star-o"></i>
	                                <i class="fa fa-star-o"></i>
	                                <i class="fa fa-star-o"></i>
	                            </div>
	                            <div class="price-con"><h5>Rs ${x.price.toLocaleString("en-US")}.00</h5></div>
	                            
	                        </div>
	                    </div>
	                `
				}
				
				
			}}).join(" "))
		
		
	}else{
		
		return(list_element.innerHTML= `<div class="empty-message"><h4>Sorry, No products match your search </h4></div>`)
		
	}
		
		

	
}

function SetupPagination (items, wrapper, rows_per_page) {
	wrapper.innerHTML = "";

	let page_count = Math.ceil(items.length / rows_per_page);
	for (let i = 1; i < page_count + 1; i++) {
		let btn = PaginationButton(i, items);
		wrapper.appendChild(btn);
	}
}

function PaginationButton (page, items) {
	let button = document.createElement('a');
	button.innerText = page;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
		current_page = page;
		DisplayList(items, list_element, rows, current_page);

		let current_btn = document.querySelector('.product__pagination a.active');
		
		current_btn.classList.remove('active');

		button.classList.add('active');
	});

	return button;
}


//------------------------------------------------------
//Derect product details page---------------------
function productDetails(id){
	
	localStorage.setItem("id",id);
    window.location='product-details.jsp';
	
}