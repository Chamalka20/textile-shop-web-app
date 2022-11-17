<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Edit Product</title>
<link rel="stylesheet" href="../css/admin/editProduct.css">
<link href='../icons/icon list/all.css' rel='stylesheet'>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>

<script defer src="../JavaScript/admin/auth.js"></script>
<script defer src="../JavaScript/admin/initialize.js"></script>

</head>
<body>

<div class="outerContainer" >
	<div class="navBar">rtyret</div>
		
	<div class="productContainer" >
	
		<h1>Product</h1>
		
	
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


		

<script  src="../JavaScript/admin/editProduct.js"></script>



</body>
</html>