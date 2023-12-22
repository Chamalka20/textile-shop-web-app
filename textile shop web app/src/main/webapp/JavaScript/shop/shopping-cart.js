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
function getLocalStorgeData(){
	
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
		
		
	}	
	
	
	
}
getLocalStorgeData();

//------------------------------------------------------------

//get products data from database------------------------------------------
var proList = [];

function getDatalist(){
	
		$.getJSON("../../getPro", function(getData) {
			
			for(var i=0;i<getData.length;i++){
					proList.push(getData[i]);
					
			}
			generateCartItems(proList);
			totalAomunt(proList)
			console.log(proList);	
		});

};		
getDatalist();


// list cart items--------------------------------------------------
var mainHolder=document.getElementById('cart-main-container');
var subtotalPrice=0;
var total =0;
var totalCounter = [];

function generateCartItems(data){
	
	
	//Check cart is emptyor not -----------------------------
	if(basket.length !== 0){
		
		mainHolder.innerHTML =`
								<div class="row" >
                <div class="col-lg-8">
                    <div class="shopping__cart__table">
                        <table>
                            <thead>
                                <tr>
                                    <th>Product</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                               
                               
                            </tbody>
                        </table>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="continue__btn">
                                <a href="../../shop/shop.jsp">Continue Shopping</a>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="continue__btn update__btn" onClick="updateCart()">
                                <a> Update cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="cart__discount">
                        <h6>Discount codes</h6>
                        <form action="#">
                            <input type="text" placeholder="Coupon code">
                            <button type="submit">Apply</button>
                        </form>
                    </div>
                    <div class="cart__total">
                        <h6>Cart total</h6>
                        <ul id="dispay-total">
                            <li>Total <span></span></li>
                        </ul>
                        <div class="checkout_btn" onClick="checkOut()"><a >Proceed to checkout</a></div>
                        
                    </div>
                </div>
            </div>`
		
		
		var itemTable = document.querySelector("tbody");					
		
		
		return(itemTable .innerHTML = basket.map((x)=>{
			
			var{id,item,size,limit} = x;
			var search = data.find((el)=> el.id === id )|| [];
			console.log(search);
			
			//calculate each item total price----------------------------
			subtotalPrice = search.price * item;
			
			
			return`
			<tr>
				<td class="product__cart__item">
                   <div class="product__cart__item__pic">
                      <img src='../../Images/product/${search.image}' alt="">
                   </div>
                   <div class="product__cart__item__text">
                     <h6>${search.name}-${size}</h6>
					 <h5>Rs ${search.price.toLocaleString("en-US")}.00</h5>
				   </div>
                </td>
                <td class="quantity__item">
                  <div class="quantity">
                     <div class="pro-qty-2">
                     	<div onClick="decrement(${item},${search.id})"><span class="material-symbols-outlined" id="minus-${search.id}" onCopy="return false" onselectstart="return false">remove</span></div>
                        <div class="quantity-value" id="${search.id}">${item}</div>
                        <div onClick="increment(${item},${limit},${search.id})"><span class="material-symbols-outlined" id="plus-${search.id}" onCopy="return false" onselectstart="return false">add</span></div>
                      </div>
                  </div>
                </td>
                <td class="cart__price">Rs ${subtotalPrice.toLocaleString("en-US")}.00</td>
                <td class="cart__close"><i class="fa fa-close" onClick="removeItem(${search.id})"></i></td>
             </tr>
			
			`
			
			
		}).join(" "))
		
		
		
	}else{
		console.log("hgjgjgyj");
		mainHolder.innerHTML=`	
								<div class="empty-cart-message">
									<h3>Cart is empty</h3>
									<div class="continue__btn"><a href="../../jsp/shop/shop.jsp">Continue Shopping</a></div>
								</div>
														
							`;
														
		
	}



}

//------user select product quantity-------------------------


function increment(items,limit,id){
	newitems = items;
	var proId = id;
	console.log(newitems);
	if(limit !== 0){
		
		var search = basket.find((x) => x.id === proId);
		
		if(limit>search.item){
		
		
		document.getElementById('minus-'+id).style.color="black";
		
		var search = basket.find((x) => x.id === proId)
		
			//Reduce when the same piece of data is stored 
			if(search === undefined){
				
				basket.push({id:proId ,size:size,item:1});
			}else{
				
				search.item+=1;
			}
		
		//---------------------------
		
		console.log(basket);
		
		}else{
			console.log("not");
			document.getElementById('plus-'+id).style.color="#cfcbca";
		}
		
	}else{
		
		newitems+=1;
	}
		
	
	update(proId);
	
}

function decrement(items,id){
	var proId = id
	var search = basket.find((x) => x.id === proId);
	// limit minimumum quantity is one------------------------------
	if(search.item !== 0){
		
		
		document.getElementById('plus-'+id).style.color="black";
		
		var search = basket.find((x) => x.id === proId);
		if(search === undefined){
			
			basket.push({id:proId ,size:size,item:1});
		}else{
			
			search.item-=1;
		}
		
	}else{
		
		document.getElementById('minus-'+id).style.color="#cfcbca";
	}
	
	update(proId);
}

function update(proId){
	
	var search = basket.find((x) => x.id === proId);
	newitems = search.item;
	document.getElementById(proId).innerHTML=search.item;
	
	
}

//----------------remove items-------------------------------

function removeItem(id){
	
	var selectedId = id
	basket = basket.filter((x)=> x.id !== selectedId)
	localStorage.setItem("cartData",JSON.stringify(basket));
	proList = [];
	basket= [];
	getLocalStorgeData();
	getDatalist();
	
}

function updateCart(){
	
	localStorage.setItem("cartData",JSON.stringify(basket));
	proList = [];
	basket= [];
	getLocalStorgeData();
	getDatalist();
	
}



function totalAomunt(data){
	
 	if(basket.length!== 0){
	
		total = basket.map((x)=>{
			
			var{id,item}=x;
			var search = data.find((el)=> el.id === id )|| [];
			
			return search.price*item
			
			
		}).reduce((x,y) => x+y ,0);
	
		//display total---------------------------
		document.querySelector('#dispay-total li span').innerHTML = "RS "+total.toLocaleString("en-US")+".00";
	
	}else return
	
	
}

//----------------------------------------------
function checkOut(){
	
	window.location='checkout.jsp';
	
}

 
//------------------------------------------------------------------
// search resaults show----------------------------------------------


const search_list = document.getElementById('search-list');
const searchList_container = document.getElementById('search-results');
const search_input = document.getElementById('search-input');


function DisplayResulst(data){
	
	return(search_list.innerHTML= data.map((x)=>{
		
		
		return`
			<li onClick="SearchSelectItem(${x.id})"><div class="result-row"><img class="search-img" src="../../Images/product/${x.image}"><p class="search-name">${x.name}</p ><p class="search-price">Rs ${x.price}</p></div></li>
			
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
//Derect product details page---------------------
function productDetails(id){
	
	localStorage.setItem("id",id);
    window.location='product-details.jsp';
	
}






