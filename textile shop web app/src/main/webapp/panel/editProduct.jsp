<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Edit Product</title>
<link rel="stylesheet" href="../css/editProduct.css">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>

<div class="outerContainer" >
	<div class="navBar">rtyret</div>
		
	<div class="productContainer" >
	
		<h1>Product</h1>
		
	
		<div class="proDetails" id="container">
			
		</div>
	
		<div class="editPro">
						<div class="ImageWrapper2" id="img"></div>
			Product Name<input type="text" id="name"><br>
			Product Descreiption<input type="text" id="desc"><br><br>
			In Stock<br>
				Small<input type="text" id="small"><br>
				Medium<input type="text" id="medium" value=""><br>
				Large<input type="text" id="large"><br>
				XL<input type="text" id="xl"><br><br>
				
			Categorie<input type="text" id="categorie" onclick="search_category()"> <br>
						<ul id="someul" style="display:none; list-style-type: none; cursor: context-menu;">
						
						</ul>
						<br><br>
						
					<button type="submit" onclick="updateProduct()" >Update</button>	
				
			
			
			
			
		</div>
	
	</div>
	
	
	
</div>


<script src="../JavaScript/editProduct.js"></script>		





</body>
</html>