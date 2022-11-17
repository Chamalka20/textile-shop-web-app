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

<script defer src="../JavaScript/admin/auth.js"></script>
<script defer src="../JavaScript/admin/initialize.js"></script>
</head>
<body>

<div class="outerContainer">
	<div class="navBar">rtyret</div>
	
	<h6 class="sale-header">Sale Items</h6>
	<div id="saleItems">
		
	</div>
	<div class="margin"></div>
	<div class="add-item-main-container" id="add-main-container">
		
		<div id="hideHeader" style="display:none;">
			<h6 id="title" >Select items</h6>
			<label for="selectMonth">Choose by Month</label>
			<select id="selectMonth" onchange="filterByDate()">
				<option>Select</option>
	  			<option value="thisMonth">This Month</option>
	  			<option value="lastMonth">Last Month</option>
	  			<option value="previousMonth">Previous Month</option>
			</select>
			
			<label for="selectSalles">Choose by Salles</label>
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
<script src="../JavaScript/admin/saleItems.js"></script>
</body>
</html>