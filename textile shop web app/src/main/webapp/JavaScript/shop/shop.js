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
var localStrorage=[]; 
var localfav_items=[];

function getLocalStorageData(){
	
  basket= [];
  localStrorage = JSON.parse(localStorage.getItem("cartData"));
  localfav_items = JSON.parse(localStorage.getItem("fav_items"));
}
getLocalStorageData();



if(localfav_items == null){
	
	localfav_items = [0];
}

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
var filterProductData = [];
var tempFilterProductData=[];
const list_element = document.getElementById('products-holder');
const pagination_element = document.getElementById('pagination');
let current_page = 1;
let rows = 6;

//get products data from database------------------------------------------

function getDatalist(){
	
		$.getJSON("../../getPro", function(getData) {
			
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

$.get("../../getCate", function(arraylist) {   
		
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
		let current_cat = document.querySelector('.nice-scroll li a.active');
		current_cat.style.color="#b7b7b7";
		current_cat.classList.remove('active');
		
		if(isCatFilterActive !== true){
			
			for(var i=0;i<data.length;i++){
				
				if(e.target.innerHTML===data[i]){
					
					
					e.target.classList.add('active');
					e.target.style.color ="black";
					//Refresh use add favorite items--------------
					getLocalStorageData();
					//---------------------------------------
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


//----------------filter price low to high------------------------


function filterLowToHigh(){
	var selectBox = document.getElementById("filterPrice");
	var selectedValue = selectBox.options[selectBox.selectedIndex].value;
	
	
	if(selectedValue === "HighToLow"){
		
		
		
	}else if(selectedValue ==="LowToHigh"){
		
		
		
	}
	
	
}


  
//--------------filter by Categories----------------------
	  
function filterbyCategories(data,categorie){
	
	if(categorie !== "All"){
		
		filterProductData= data.filter(function (a) {
				var hitCategory =[];
	            hitCategory.push(a.categorie);
	
				// filter this salles by less than 10
	            var hitCategoryMatches = hitCategory.filter(function(cat) { return cat === categorie });
	            
				return hitCategoryMatches.length>0;
			})
		isCatFilterActive=true;
		tempFilterProductData=filterProductData;
		
		activeFilters(categorie,storePriceChangetype,storePriceChangevalue);
		activeCat = categorie;
		current_page=1;
	//get all results--------------------------------------------------	
	}else{
		filterProductData=[];
		
		for(var i=0;i<data.length;i++){
					filterProductData.push(data[i]);
					
			}
		
	}
		
	PriceRange(filterProductData);	
	DisplayList(filterProductData, list_element, rows, current_page);
	SetupPagination(filterProductData, pagination_element, rows);	
		
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
			
			var tempMinVal = parseInt(rangeInput[0].value);
			var tempMaxVal = parseInt(rangeInput[1].value);
		
			if(tempMaxVal-tempMinVal < priceGap){
				//if active slider---------------
				if(e.target.className ==="range-min"){
					rangeInput[0].value = tempMaxVal - priceGap;
					
				}else{
					
					rangeInput[1].value = tempMinVal + priceGap;
					console.log(tempMinVal + priceGap);
				}
				
			}else{
				showPrice[0].innerHTML="Minimum price: Rs "+ tempMinVal;
				showPrice[1].innerHTML="Maximum price: Rs "+ tempMaxVal;
				
				progress.style.left = (tempMinVal/rangeInput[0].max)*100+"%";
				progress.style.right = 100-(tempMaxVal/rangeInput[1].max)*100+"%";
			}
			
			filterProductData= data.filter(function (a) {
				var hitprice =[];
	            hitprice.push(a.price);
	
				
	            var hitpriceMatches = hitprice.filter(function(val) { return val >= tempMinVal && val <= tempMaxVal });
	           
				return hitpriceMatches.length>0;
			})
			
			minVal=tempMinVal;
			maxVal=tempMaxVal;
			DisplayList(filterProductData, list_element, rows, current_page);
			SetupPagination(filterProductData, pagination_element, rows);	
		})
		
	})
	
	
	
}
PriceRange()

//----------------------sort by price-----------------------------



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
		let cat = document.querySelectorAll('.nice-scroll li a');
		catlistItem.style.color="#b7b7b7";
		catlistItem.classList.remove('active');
		cat[0].classList.add('active');
		cat[0].style.color="black";
		
		document.querySelector('.filter-history-item-cat').style.display="none";
		isCatFilterActive = false;
		
		filterProductData = [];
		
		
		//if user close the prize filter and go to the previous one----------
		if(isPriceFilterActive == true){
			
			filterProductData= proList.filter(function (a) {
				var hitprice =[];
	            hitprice.push(a.price);
	 
				
	            var hitpriceMatches = hitprice.filter(function(val) { return val >= minVal && val <= maxVal });
	           
				return hitpriceMatches.length>0;
			})
			
			DisplayList(filterProductData, list_element, rows, current_page);
			SetupPagination(filterProductData, pagination_element, rows);
			PriceRange(proList);
			
		}else{
			
			categorie = "All";
			proList = [];
			getDatalist();
			getLocalStorageData();
		}
		
		
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
		
		//if user close the prize filter and go to the previous one----------
		if(isCatFilterActive == true){
			
			DisplayList(tempFilterProductData, list_element, rows, current_page);
			SetupPagination(tempFilterProductData, pagination_element, rows);
			
		}else{
			
			proList=[];
			getDatalist();
		}
		
	}
	
	
}

//-----------------------------------------------------
// search resaults show----------------------------------------------


const search_list = document.getElementById('search-list');
const searchList_container = document.getElementById('search-results');
const search_input = document.getElementById('search-input');


function DisplayResulst(data){
	
	return(search_list.innerHTML= data.map((x)=>{
		
		
		return`
			<li onClick="SearchSelectItem(${x.id})"><div class="result-row"><img class="search-img" src="../Images/product/${x.image}"><p class="search-name">${x.name}</p ><p class="search-price">Rs ${x.price}</p></div></li>
			
		`
		
		
		}))
	
	
}


function filterdata(data,searchText){
	
	return data.filter((x)=>x.name.toLowerCase().includes(searchText.toLowerCase()));
}


search_input.addEventListener('input',function(){
	
	if(search_input.value==""){
		
		searchList_container.style.display = "none";
		
	}else{
		searchList_container.style.display="block";
		var fildata = filterdata(proList,search_input.value);
		DisplayResulst(fildata);
		
	}
	
	
});


//user select one search result--------------------
function SearchSelectItem(id){
	
	productDetails(id);
	
}


//---------------------------------------------------------------

//--------------display resuls------------------------------------------------

function DisplayList (items, wrapper, rows_per_page, page) {
	wrapper.innerHTML = "";
	page--;

	let start = rows_per_page * page;
	let end = start + rows_per_page;
	let paginatedItems = items.slice(start, end);
	
// Generate the non-Wishlist and Wishlist product lists using the map function	
	const productsWithWishlistFlag = paginatedItems.map(product => ({
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
	
	console.log(productsWithWishlistFlag)
	
	//total results-----------------------------------------------------------
	var results =document.querySelector('.shop__product__option__left  p');
    results.innerHTML ="Showing 1-"+rows+" of "+filterProductData.length+" results";
    
	if(items.length != 0){//if product result is empty-------------------------
		
		return(list_element.innerHTML= productsWithWishlistFlag.map((x)=>{
			if(x.saleActive==="true"){
				
				//calculate sale price--------------------------
					var proPrice = x.price;
					var presentage = x.salePercentage / 100;
			
					var totalValue = proPrice - (proPrice * presentage)
				
				return`
	                    <div class="product__item sale" onClick="productDetails(${x.id})">
	                        <div class="product__item__pic " style="background-image:url('../../Images/product/${x.image}');">
	                            <span class="label">Sale</span>
	                            <ul class="product__hover">
	                                 <li onclick="addOrRemoveFavorite(${x.id});event.stopPropagation();"><img id="fav-icon-${x.id}" src="../../Images/icon/${x.isWishlist ? 'love1.png' : 'favorite.png'}" ></li>
	                                
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
			
			}else{
				
				 // convert strings to Date objcts--------------
				var proDate = new Date(x.add_date);
				
				if(proDate >= thisMonth){
					
					return`
	                    <div class="product__item" onClick="productDetails(${x.id})">
	                        <div class="product__item__pic " style="background-image:url('../../Images/product/${x.image}');">
	                            <span class="label">New</span>
	                            <ul class="product__hover">
	                                  <li onclick="addOrRemoveFavorite(${x.id});event.stopPropagation();"><img id="fav-icon-${x.id}" src="../../Images/icon/${x.isWishlist ? 'love1.png' : 'favorite.png'}" ></li>
	                                
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
				
					
				}else {
					
								
					return`
				                   
						 <div class="product__item" onClick="productDetails(${x.id})">
				                        <div class="product__item__pic "  style="background-image:url('../../Images/product/${x.image}');">
				                           
				                            <ul class="product__hover">
				                                <li onclick="addOrRemoveFavorite(${x.id});event.stopPropagation();"><img id="fav-icon-${x.id}" src="../../Images/icon/${x.isWishlist ? 'love1.png' : 'favorite.png'}" ></li>
				                                
				                            </ul>
				                        </div>
				                        <div class="product__item__text" >
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

//---------------------------------------------------------------------------------------
//add to the user favorite products---------------------------------------


var fav_items =[];


//get localStorage fav data------------------------------------

if(localfav_items !== null){
	
	for(var i=0;i<localfav_items.length;i++){
	
	fav_items.push(localfav_items[i]);
				
	}
	
}


function addOrRemoveFavorite(id){
	
	
	const fav_icon = document.getElementById('fav-icon-'+id);
	
	
	if(fav_items.includes(id)){
		
		fav_icon.src = '../../Images/icon/favorite.png';
		
		const newFav_items = fav_items.filter(function (fav) {
			
           return fav !== id;
        });
		
		fav_items = newFav_items;
		
	}else{
		
		fav_icon.src = '../../Images/icon/love1.png';
		fav_items.push(id);
		
	}
	
	
	
	localStorage.setItem("fav_items",JSON.stringify(fav_items));
	
	
}



//------------------------------------------------------
//Derect product details page---------------------
function productDetails(id){
	
	localStorage.setItem("id",id);
    window.location='product-details.jsp';
	
}