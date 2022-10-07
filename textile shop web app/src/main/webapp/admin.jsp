<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h2>add products</h2>
	<form action="pro_add" method="post">
	
		Name<input type="text" name="name"><br>
		Description<input type="text" name="desc"><br>
		Price<input type="text" name="price"><br>
		quantity<input type="text" name="quan"><br>
		category<input type="text" name="cate"><br>
		<input type="submit">
	
	
	</form>
	<h2>create Products categorys</h2>
		
	<form action="pro_cat" method="post">	
		cat name<input type="text" name="catname"><br>
		desc<input type="text" name="desc"><br>
		<input type="submit">	
		
	</form>		

</body>
</html>   