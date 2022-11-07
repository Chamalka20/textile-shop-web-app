<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="../css/admin/saleItems.css">
<link href='../icons/icon list/all.css' rel='stylesheet'>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
</head>
<body>

<div class="outerContainer">
	<div class="navBar">rtyret</div>
	
	<div id="saleItems">
	</div>
	<div class="add-item-main-container" id="add-main-container">
		<h6 id="title" style="display:none;">Select items</h6>
		<div class="addNewHolder" id="mainHolder">
			
			<div id="add-new">
				<h6>Click here to sale the product</h6>
				<button type="button" class="btn btn-success" onClick="addNewProduct()">Add</button>
			</div>
			
		</div>
		
	</div>
		
		
</div>


<script src="../JavaScript/admin/saleItems.js"></script>
</body>
</html>