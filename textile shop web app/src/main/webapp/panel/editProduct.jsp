<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Edit Product</title>
<!-- jquary  -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	
 	<!-- Montserrat Font -->
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">

    <!-- Material Icons -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
    
	 <!-- bootstrap-->
	 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
	 
    <!-- Custom CSS -->
	<link rel="stylesheet" href="../css/admin/editProduct.css">
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
          		<p class="font-weight-bold">Product</p>
        	</div>
			<div class="productContainer" >

				<div class="proDetails" id="container">
					
				</div>
				<div class="update-container">
					<div class="editPro">
									<div class="ImageWrapper2" id="img"></div>
						<table>
						<tr>
							<td><h6>Edit product</h6></td>
							
						</tr>	
						<tr>
							<td>Product Name</td>
							<td><input type="text" id="name"></td>
						</tr>		
						<tr>
							<td>Product Descreiption</td>
							<td><input type="text" id="desc"></td>
						</tr>		
						<tr>
							<td>price</td>
							<td><input type="text" id="price"></td>
						</tr>
						<tr>
							<td>In Stock:</td>
							
						</tr>
						<tr>
							<td>Small</td>
							<td><input type="text" id="small"></td>
							
						</tr>
						<tr>
							<td>Medium</td>
							<td><input type="text" id="medium" value=""></td>
							
						</tr>
						<tr>
							<td>Large</td>
							<td><input type="text" id="large"></td>
							
						</tr>
						<tr>
							<td>XL</td>
							<td><input type="text" id="xl"></td>
							
						</tr>
						<tr></tr>
						<tr>
							<td>Categorie</td>
							<td><div><input type="text" id="categorie" onclick="search_category()"><ul id="someul" style="display:none; list-style-type: none; cursor: context-menu;">
									
									</ul></div></td>
						</tr>
						
						<tr>
							<td></td>
							<td><button type="button" class="btn btn-success" style="margin-top:20px"onClick="updateProduct()">Update</button></td>
							
						</tr>
						
					
						</table>			
								
						
					</div>
					
					<div class="discountAdd" id="disHolser">
					
						<div class="no-discount" id="no-dis">
						
							<p>This product has not been added to the sale items</p>
						
							<button type="button" class="btn btn-link" onClick="addDiscount()">Add to the sale</button>
						
						</div>
					
					</div>
				</div>
			
			</div>
	

		</div>
	 	
	
	  <!-- End Main -->
	
	
	</div>



		

<script  src="../JavaScript/admin/editProduct.js"></script>



</body>
</html>