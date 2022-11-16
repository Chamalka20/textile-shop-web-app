package com.util;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class admin_DB {
	
	
	//admin login-----------------------------------------------
	public boolean  admin_validation(String name,String password) {
		boolean isSuccess=false;
		
		DB_connect db = new DB_connect();
		Connection con = null; 
		String sql1 = "SELECT * FROM admin  WHERE admin.user_name='"+name+"'AND admin.password='"+password+"'";
		
		try {
			con=db.getConnection();
			PreparedStatement stmt1 = con.prepareStatement(sql1);
			
			ResultSet rs = stmt1.executeQuery(sql1);
			
			if(rs.next()) {
				
				isSuccess=true;
				
			}else {
				
				isSuccess=false;
				
			}
			
		}catch(Exception e) {
		
			e.printStackTrace();
		
		}
		
		
		
		return isSuccess;
	}
	
	
	
	
	
	
	
	
	
}
