<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>hnsert title here</title>


	<!-- jquary  -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	
 	<!-- Montserrat Font -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">

    <!-- Material Icons -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
    
    <!-- bootstrap-->
	 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

    <!-- Custom CSS -->
	<link rel="stylesheet" href="../../css/admin/orders.css">
    <link href='../../icons/icon list/all.css' rel='stylesheet'>
    <!-- user validation -->
   <script defer src="../../JavaScript/admin/auth.js"></script>
   <script defer src="../../JavaScript/admin/initialize.js"></script>
</head>
<body>
	<div class="grid-container">
	
		<!-- Header -->
      <header class="header">
        <div class="menu-icon" onclick="openSidebar()">
          <span class="material-icons-outlined">menu</span>
        </div>
        
        <div class="header-left">
           <span class="material-icons-outlined" >account_circle</span>
          	<div id="acc-name"></div>
        </div>
        
        <div class="header-right">
         	<div class="logout" onclick="logOut()">LogOut</div>
        </div>
      </header>
      <!-- End Header -->

      <!-- Sidebar -->
      <aside id="sidebar">
        <div class="sidebar-title">
          <div class="sidebar-brand">
            <span class="material-icons-outlined">inventory</span> Nawara Inventory
          </div>
          <span class="material-icons-outlined" onclick="closeSidebar()">close</span>
        </div>

        <ul class="sidebar-list">
          <li class="sidebar-list-item">
            <a href="adminhome.jsp"><span class="material-icons-outlined">dashboard</span> Dashboard</a>
          </li>
          <li class="sidebar-list-item">
            <a href="products.jsp"><span class="material-icons-outlined">inventory_2</span> Products</a>
          </li>
          <li class="sidebar-list-item"> 
            <a href="saleItems.jsp"><span class="material-icons-outlined">sell</span> sale Items</a>
          </li>
          <li class="sidebar-list-item">
            <a href="orders.jsp"><span class="material-icons-outlined">shopping_cart</span> Sales Orders</a>
          </li>
        
        </ul>
      </aside>
      <!-- end Sidebar -->
		<main class="main-container">
			<div class="main-title1">
          		<p class="font-weight-bold">Orders</p>
        	</div>
			<div class="products-Container">
					<div class="headerContainer">	
					<div class="headerdata">Order Id</div>
					<div class="headerdata">User Name</div>
					<div class="headerdata">Payment Mode</div>
					<div class="headerdata">Order Date</div>
					<div class="headerdata">Action</div>		  
				</div>
				
				<div class="dataContainer" id="dataHolder">	</div>	
						
			</div>	
		</main>
	</div>

	 <!-- Custom JS -->
    <script  src="../../JavaScript/admin/orders.js"></script>

</body>
</html>