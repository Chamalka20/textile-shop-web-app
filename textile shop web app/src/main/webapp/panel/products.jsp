<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import="java.sql.*" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="../css/products.css">
</head>
<body>
<div class="outerContainer">
	<div class="navBar">rtyret</div>
	
	<%
	
	try{
		Class.forName("com.mysql.jdbc.Driver");
		Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/textile","root","root");
		String sql= "SELECT * FROM textile.product;";
		
		PreparedStatement stmt1 = con.prepareStatement(sql);
		
		ResultSet rs = stmt1.executeQuery();
			
		if(rs.next()==false){
			
			out.println("no table records found");
		}else{%>
		
			<div class="tableContainer">
				
					<div class="header"><div class="line"></div>Id</div>
					<div class="header"><div class="line"></div>Product</div>
					<div class="header"><div class="line"></div>Description</div>
					<div class="header"><div class="line"></div>Price</div>
					<div class="header"><div class="line"></div>Stock</div>
					<div class="header"><div class="line"></div>Action</div><%			  
				
				do{%>
					
					
					<div class="data"><%=rs.getInt(1) %></div>
					<div class="data"><img class="proImage"src="../Images/<%=rs.getString(7)%>"><%=rs.getString(2) %></div>
					<div class="data"><%=rs.getString(3) %></div>
					<div class="data"><%=rs.getInt(6) %></div>
					<div class="data"><%=rs.getString(9) %></div>
					<div class="data"><button>Edit</button></div><%
					
				}while(rs.next());%>
				
				
			</div><% 
			
			
			
			
		}
			
		
	}catch(Exception e){
		
		e.getStackTrace();
	}
	
	
	%>
	
		
</div>
</body>
</html>