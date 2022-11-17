package com.util;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonArrayBuilder;

public class admin_DB {
	
	
	//admin login-----------------------------------------------
	public JsonArray  admin_validation(String name,String password) {
		
		
		JsonArrayBuilder builder = Json.createArrayBuilder();
		JsonArray jarr = null;
		DB_connect db = new DB_connect();
		Connection con = null; 
		String sql1 = "SELECT * FROM admin  WHERE admin.user_name='"+name+"'AND admin.password='"+password+"'";
		
		try {
			con=db.getConnection();
			PreparedStatement stmt1 = con.prepareStatement(sql1);
			
			ResultSet rs = stmt1.executeQuery(sql1);
			
			if(rs.next()) {
				//get admin details------------------------------------
				builder.add(Json.createObjectBuilder()
						.add("userName",rs.getString("user_name"))
						.build());
				
			}else {
				
				
				
			}
			
			jarr = builder.build();
			
		}catch(Exception e) {
		
			e.printStackTrace();
		
		}
		
		
		
		return jarr;
	}
	
	
	
	
	
	
	
	
	
}
