<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>

<!DOCTYPE html>
<html lang="zxx">

<head>
    <meta charset="UTF-8">
    <meta name="description" content="Male_Fashion Template">
    <meta name="keywords" content="Male_Fashion, unica, creative, html">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Nawara-Fashion</title>

    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&display=swap"
    rel="stylesheet">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />

    <!-- Css Styles -->
    <link rel="stylesheet" href="../../css/shop/bootstrap.min.css" type="text/css">
    <link rel="stylesheet" href="../../css/shop/font-awesome.min.css" type="text/css">
    <link rel="stylesheet" href="../../css/shop/elegant-icons.css" type="text/css">
    <link rel="stylesheet" href="../../css/shop/magnific-popup.css" type="text/css">
    <link rel="stylesheet" href="../../css/shop/nice-select.css" type="text/css">
    <link rel="stylesheet" href="../../css/shop/owl.carousel.min.css" type="text/css">
    <link rel="stylesheet" href="../../css/shop/slicknav.min.css" type="text/css">
    <link rel="stylesheet" href="../../css/shop/shopping-cart.css" type="text/css">
    
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
                        <a href="../../shop/home.jsp"><img src="../../Images/logo.png" alt=""></a>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <nav class="header__menu mobile-menu">
                        <ul>
                            <li ><a href="../../jsp/shop/home.jsp">Home</a></li>
                            <li ><a href="../../jsp/shop/shop.jsp">Shop</a></li>
                            <li><a href="#">Pages</a>
                                <ul class="dropdown">
                                    <li><a href="../../jsp/shop/about.jsp">About Us</a></li>
                                    <li><a href="../../jsp/shop/shop-details.jsp">Shop Details</a></li>
                                    <li><a href="../../jsp/shop/shopping-cart.jsp">Shopping Cart</a></li>
                                    <li><a href="../../jsp/shop/blog-details.jsp">Blog Details</a></li>
                                </ul>
                            </li>
                            <li><a href="../../jsp/shop/blog.jsp">Blog</a></li>
                            <li><a href="../../jsp/shop/contact.jsp">Contacts</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-lg-3 col-md-3">
                    <div class="header__nav__option">
                         <a href="#" class="search-switch"><img src="../../Images/icon/search.png" alt=""></a>
                        <a href="../../jsp/shop/wishList.jsp"><img src="../../Images/icon/heart.png" alt=""></a>
                        <a href="../../jsp/shop/shopping-cart.jsp"><img src="../../Images/icon/cart.png" alt=""> <span class="cart-amount" style="display:none;"></span></a>
                        
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
                        <h4>Shopping Cart</h4>
                        
                            <a href="../../home.jsp">Home</a>>
                            <a href="../../shop.jsp">Shop</a>>
                            <span>Shopping Cart</span>
                       
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Breadcrumb Section End -->

    <!-- Shopping Cart Section Begin -->
    <section class="shopping-cart spad">
        <div class="container" id="cart-main-container">
            
        </div>
    </section>
    <!-- Shopping Cart Section End -->

    <!-- Footer Section Begin -->
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="footer__about">
                        <div class="footer__logo">
                            <a href="#"><img src="../../Images/footer-logo.png" alt=""></a>
                        </div>
                        <p>The customer is at the heart of our unique business model, which includes design.</p>
                        <a href="#"><img src="img/payment.png" alt=""></a>
                    </div>
                </div>
                <div class="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                    <div class="footer__widget">
                        <h6>Shopping</h6>
                        <ul>
                            <li><a href="#">Clothing Store</a></li>
                            <li><a href="#">Trending Shoes</a></li>
                            <li><a href="#">Accessories</a></li>
                            <li><a href="#">Sale</a></li>
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
                <div id="search-results" style="height:250px;overflow-y:scroll;display:none">
	            	<ul id="search-list">
	            		
						          	
	            	</ul>
            	
         		</div>
            </form>
           
        </div>
         
    </div>
    <!-- Search End -->

    <!-- Js Plugins -->
    <script src="../../JavaScript/shop/jquery-3.3.1.min.js"></script>
    <script src="../../JavaScript/shop/bootstrap.min.js"></script>
    <script src="../../JavaScript/shop/jquery.nice-select.min.js"></script>
    <script src="../../JavaScript/shop/jquery.nicescroll.min.js"></script>
    <script src="../../JavaScript/shop/jquery.magnific-popup.min.js"></script>
    <script src="../../JavaScript/shop/jquery.countdown.min.js"></script>
    <script src="../../JavaScript/shop/jquery.slicknav.js"></script>
    <script src="../../JavaScript/shop/mixitup.min.js"></script>
    <script src="../../JavaScript/shop/owl.carousel.min.js"></script>
    <script src="../../JavaScript/shop/shopping-cart.js"></script>
</body>

</html>