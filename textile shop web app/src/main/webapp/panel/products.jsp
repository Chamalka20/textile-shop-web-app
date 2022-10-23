<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import="java.sql.*" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
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
	
		<table border="1" cellspacing="0" width="500px" height="200px">
			<tr bgcolor="">
			<th>Id</th>
			<th>Name</th>
			<th>description</th>
			<th>Price</th>
			<th>Stock</th>
			<th>Action</th>			  
			</tr><%
			do{%>
				
				<tr>
				<td><%=rs.getInt(1) %></td>
				<td><%=rs.getString(2) %></td>
				<td><%=rs.getString(3) %></td>
				<td><%=rs.getInt(6) %></td>
				<td><%=rs.getString(8) %></td>
				<td><button>Edit</button></td>
				</tr><% 
			}while(rs.next());%>
			
		
		</table><% 
		
		
		
		
	}
		
	
}catch(Exception e){
	
	e.getStackTrace();
}


%>
</body>
</html>