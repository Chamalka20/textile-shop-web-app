<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1" %>

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Inventory</title>


	<!-- jquary  -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	
 	<!-- Montserrat Font -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">

    <!-- Material Icons -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
    
    <!-- bootstrap-->
	 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

    <!-- Custom CSS -->
	<link rel="stylesheet" href="../../css/admin/productStyle.css">
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
	  <!-- Main -->
     	<main class="main-container">
			<div class="main-title1">
          		<p class="font-weight-bold">Products</p>
        	</div>
			<div class="products-Container">
					
				<div class="headerContainer">	
					<div class="headerdata">Id</div>
					<div class="headerdata">Product</div>
					<div class="headerdata">Price</div>
					<div class="headerdata">Action</div>		  
				</div>
				
				<div class="dataContainer" id="dataHolder">	</div>	
						
			</div>
			<div class="main-title2">
          		<p class="font-weight-bold">New Product</p>
        	</div>	
			<div class="new-product-container">
				<div class="table-container">
					<div class="ImageWrapper" id="img"></div>
					<table>
						<tr>
							<td>Name</td>
							<td><input type="text" id="name" value=""></td>
						</tr>
						<tr>
							<td>Description</td>
							<td><input type="text" id="desc" value=""></td>
						</tr>
						<tr>
							<td>Price</td>
							<td><input type="text" id="price" value=""></td>
						</tr>
						<tr>
							<td>Product Size:</td>
							
						</tr>
						<tr>
							<td>Small</td>
							<td><input type="text" id="small" placeHolder="Enter quantity"></td>
						</tr>
						<tr>
							<td>Medium</td>
							<td><input type="text" id="medium"  placeHolder="Enter quantity"></td>
						</tr>
						<tr>
							<td>Large</td>
							<td><input type="text" id="large"  placeHolder="Enter quantity"></td>
						</tr>
						<tr>
							<td>XL</td>
							<td><input type="text" id="xl"  placeHolder="Enter quantity"></td>
						</tr>
						<tr>
							<td>Category</td>
							<td><input type="text"  id="searchCate"onclick="search_category()"><ul id="someul" style="display:none; list-style-type: none; cursor: context-menu;"></ul></td>
						</tr>
						<tr>
							<td><div id="loginFailure" style="color:red; position:absolute;"><p></p></div></td>
							
						</tr>
					
					</table>
					
					<button type="button" class="btn btn-primary" onClick="productAdd()">Add</button>
					
					
				</div>	
			</div>
		
		</main>
      <!-- End Main -->
	
	</div>
		
			
			
<script src="../../JavaScript/admin/product.js"></script>			


</body>
</html>