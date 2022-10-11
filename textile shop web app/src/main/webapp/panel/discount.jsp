<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
<form action="../dis_add" method="post">
	discount title<input type="text" name="disname"><br>
	value<input type="text" name="disvalue"><br>
	applies to<br>
	<select name="disaddtype">
		<option value="all">All products</option>
		<option value="category">Specific category</option>
		<option value="product">Specific product</option>
	</select><br>	
	Minimum purchase amount<input type="text" name="miniamount"><br>
	Start date<input type="date" name="startdate"><br>
	end date<input type="date" name="enddate"><br>
	<input type="submit">	
</form>
</body>
</html>