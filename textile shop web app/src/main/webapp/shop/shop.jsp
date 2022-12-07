<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html lang="zxx">

<head>
    <meta charset="UTF-8">
    <meta name="description" content="">
    <meta name="keywords" content="nawara_Fashion, unica, creative, html">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Nawara-Fashion</title>

    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&display=swap"
    rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

    <!-- Css Styles -->
    <link rel="stylesheet" href="../css/shop/bootstrap.min.css" type="text/css">
    <link rel="stylesheet" href="../css/shop/font-awesome.min.css" type="text/css">
    <link rel="stylesheet" href="../css/shop/elegant-icons.css" type="text/css">
    <link rel="stylesheet" href="../css/shop/magnific-popup.css" type="text/css">
    <link rel="stylesheet" href="../css/shop/nice-select.css" type="text/css">
    <link rel="stylesheet" href="../css/shop/owl.carousel.min.css" type="text/css">
    <link rel="stylesheet" href="../css/shop/slicknav.min.css" type="text/css">
    <link rel="stylesheet" href="../css/shop/style.css" type="text/css">
    
     <!-- jquary  -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>

<body>
    <!-- Page Preloder -->
    <div id="preloder">
        <div class="loader"></div>
    </div>

    <!-- Header Section Begin -->
    <header class="header">
        <div class="header__top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-7">
                        <div class="header__top__left">
                            <p>Free shipping, 30-day return or refund guarantee.</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-5">
                        <div class="header__top__right">
                            <div class="header__top__links">
                                <a href="#">Sign in</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-3">
                    <div class="header__logo">
                       <a href="../shop/home.jsp"><img src="../Images/logo.png" alt=""></a>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <nav class="header__menu mobile-menu">
                        <ul>
                            <li ><a href="../shop/home.jsp">Home</a></li>
                            <li class="active"><a href="../shop/shop.jsp">Shop</a></li>
                            <li><a href="#">Pages</a>
                                <ul class="dropdown">
                                    <li><a href="../shop/about.jsp">About Us</a></li>
                                    <li><a href="../shop/shop-details.jsp">Shop Details</a></li>
                                    <li><a href="../shop/shopping-cart.jsp">Shopping Cart</a></li>
                                    <li><a href="../shop/blog-details.jsp">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a href="../shop/blog.jsp">Blog</a></li>
                            <li><a href="../shop/contact.jsp">Contacts</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-lg-3 col-md-3">
                    <div class="header__nav__option">
                         <a href="#" class="search-switch"><img src="../Images/icon/search.png" alt=""></a>
                        <a href="#"><img src="../Images/icon/heart.png" alt=""></a>
                        <a href="./shopping-cart.jsp"><img src="../Images/icon/cart.png" alt=""> <span class="cart-amount" style="display:none;"></span></a>
                        
                    </div>
                </div>
            </div>
            <div class="canvas__open"><i class="fa fa-bars"></i></div>
        </div>
    </header>
    <!-- Header Section End -->

    <!-- Breadcrumb Section Begin -->
    <section class="breadcrumb-option">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="breadcrumb__text">
                        <h4>Shop</h4>
                        
                            <a href="../shop/home.jsp">Home</a>
                          	>
                            <span>Shop</span>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Breadcrumb Section End -->

    <!-- Shop Section Begin -->
    <section class="shop spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="shop__sidebar">
                        <div class="shop__sidebar__accordion">
                            <div class="accordion" id="accordionExample">
                            	<div class="card">
                                    <div class="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseOne">Active Filters</a>
                                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                                    </div>
                                    <div id="collapseOne" class="collapse show" data-parent="#accordionExample">
                                        <div class="card-body" id="filterList">
                                           
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-heading">
                                        <a data-toggle="collapse" data-target="#collapseOne">Categories</a>
                                        <i class="fa fa-chevron-down" aria-hidden="true"></i>
                                    </div>
                                    <div id="collapseOne" class="collapse show" data-parent="#accordionExample">
                                        <div class="card-body">
                                            <div class="shop__sidebar__categories">
                                                <ul class="nice-scroll">
                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-heading">
                                        <a >Filter Price</a>
                                        
                                    </div>
                                    <div  class="collapse show" >
                                        <div class="card-body">
                                            <div class="shop__sidebar__price">
                                               <div class=slider>
                                               		<div class="progress"></div>
                                               
                                               </div>
                                               <div class="rage-input">
                                               <input type="range" class="range-min" onChange="priceChange(className,value)" min="0" max="7000" value="0">
                                               <input type="range" class="range-max" onChange="priceChange(className,value)" min="0" max="7000" value="7000">
                                               </div>
                                               <div class="show-price-range">
                                               		<div></div>
                                               		<div ></div>
                                               </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="shop__product__option">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="shop__product__option__left">
                                    <p></p>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="shop__product__option__right">
                                    <p>Sort by Price:</p>
                                    <select onchange="filterLowToHigh()" id="filterPrice">
                                    	 <option value="HighToLow" >High To Low</option>
                                        <option value="LowToHigh" >Low To High</option>
                                       
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <main>
						<div class="list" id="products-holder"></div>
						<div class="product__pagination" id="pagination"></div>
					</main>
                </div>
            </div>
        </div>
    </section>
    <!-- Shop Section End -->

    <!-- Footer Section Begin -->
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="footer__about">
                        <div class="footer__logo">
                           <a href="#"><img src="../Images/footer-logo.png" alt=""></a>
                        </div>
                        <p>The customer is at the heart of our unique business model, which includes design.</p>
                        <a href="#"><img src="img/payment.png" alt=""></a>
                    </div>
                </div>
                <div class="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                    <div class="footer__widget">
                        <h6>Shopping</h6>
                        <ul>
                            <li><a href="#">New Collection</a></li>
                            <li><a href="#">Dresses</a></li>
                            <li><a href="#">On Sale</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-2 col-md-3 col-sm-6">
                    <div class="footer__widget">
                        <h6>Shopping</h6>
                        <ul>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Payment Methods</a></li>
                            <li><a href="#">Delivary</a></li>
                            <li><a href="#">Return & Exchanges</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
                    <div class="footer__widget">
                        <h6>NewLetter</h6>
                        <div class="footer__newslatter">
                            <p>Be the first to know about new arrivals, look books, sales & promos!</p>
                            <form action="#">
                                <input type="text" placeholder="Your email">
                                <button type="submit"><span class="icon_mail_alt"></span></button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="footer__copyright__text">
                        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                        <p>Copyright ©
                            <script>
                                document.write(new Date().getFullYear());
                            </script>
                        </p>
                        <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <!-- Footer Section End -->

    <!-- Search Begin -->
    <div class="search-model">
        <div class="h-100 d-flex align-items-center justify-content-center">
            <div class="search-close-switch">+</div>
            <form class="search-model-form">
                <input type="text" id="search-input" placeholder="Search here.....">
            </form>
        </div>
    </div>
    <!-- Search End -->

    <!-- Js Plugins -->
    <script src="../JavaScript/shop/jquery-3.3.1.min.js"></script>
    <script src="../JavaScript/shop/bootstrap.min.js"></script>
    <script src="../JavaScript/shop/jquery.nice-select.min.js"></script>
    <script src="../JavaScript/shop/jquery.nicescroll.min.js"></script>
    <script src="../JavaScript/shop/jquery.magnific-popup.min.js"></script>
    <script src="../JavaScript/shop/jquery.countdown.min.js"></script>
    <script src="../JavaScript/shop/jquery.slicknav.js"></script>
    <script src="../JavaScript/shop/mixitup.min.js"></script>
    <script src="../JavaScript/shop/owl.carousel.min.js"></script>
    <script src="../JavaScript/shop/shop.js"></script>
</body>

</html>