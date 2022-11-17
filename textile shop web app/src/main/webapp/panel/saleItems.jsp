<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<!-- jquary  -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	
 	<!-- Montserrat Font -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">

    <!-- Material Icons -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
    
	 <!-- bootstrap-->
	 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
	 
    <!-- Custom CSS -->
	<link rel="stylesheet" href="../css/admin/saleItems.css">
    <link href='../icons/icon list/all.css' rel='stylesheet'>
    
    <!-- user validation -->
   <script defer src="../JavaScript/admin/auth.js"></script>
   <script defer src="../JavaScript/admin/initialize.js"></script>
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
            <span class="material-icons-outlined">fact_check</span> Inventory
          </li>
          <li class="sidebar-list-item"> 
            <a href="saleItems.jsp"><span class="material-icons-outlined">sell</span> sale Items</a>
          </li>
          <li class="sidebar-list-item">
            <span class="material-icons-outlined">shopping_cart</span> Sales Orders
          </li>
        
        </ul>
      </aside>
      <!-- end Sidebar -->
	
	  <!-- Main -->
	 <div class="main-container" >
	
		<div class="main-title">
          		<p class="font-weight-bold">Sale Items</p>
        	</div>
		<div id="saleItems">
			
		</div>
		<div class="center-margin"></div>
		<div class="add-item-main-container" id="add-main-container">
			
			<div id="hideHeader" style="display:none;">
				<h6 id="title" >Select items</h6>
				<label for="selectMonth"> Month</label>
				<select id="selectMonth" onchange="filterByDate()">
					<option>Select</option>
		  			<option value="thisMonth">This Month</option>
		  			<option value="lastMonth">Last Month</option>
		  			<option value="previousMonth">Previous Month</option>
				</select>
				
				<label for="selectSalles"> Salles</label>
				<select id="selectSalles" onchange="filterBySalles()">
					<option>Select</option>
		  			<option value="less10">Less than 10</option>
		  			<option value="less20">Less than 20</option>
				</select>
			</div>
			<div class="addNewHolder" id="mainHolder">
				
				<div id="add-new">
					<h6>Click here to sale the product</h6>
					<button type="button" class="btn btn-success" onClick="showProductList()">Add</button>
				</div>
				
			</div>
			<div id="pro-Sale-Details-Holder" style="display:none;">
				
			</div>
		</div>
		
		
	</div>

	<div id="popup1" >
		<div id="popUp-sub-container">
		
		</div>
		<i class="fas fa-times" id="close" onClick="closePop()"></i>
	</div>
	  <!-- End Main -->
	
	
	
	
	
	
  </div>





<script src="../JavaScript/admin/saleItems.js"></script>
</body>
</html>