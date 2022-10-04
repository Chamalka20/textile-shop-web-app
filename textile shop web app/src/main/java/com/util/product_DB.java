package com.util;

import java.sql.Connection;
import java.sql.PreparedStatement;

public class product_DB {

	public  boolean insert_pro(String name,String desc,String price) {
		boolean isSuccess = false; 
		
		DB_connect db = new DB_connect();
		Connection con = null; 
		String sql ="INSERT INTO `textile`.`product` (`name`, `desc`, `price`) VALUES ('"+name+"', '"+desc+"', '"+price+"');";
		
		try {
			
			con=db.getConnection();
			PreparedStatement stmt = con.prepareStatement(sql);
			int rs = stmt.executeUpdate();
			
			if(rs>0) {
				
				System.out.println("success");
				isSuccess=true;
			}else {
				System.out.println("not success");
			}
			
		}catch(Exception e) {
			
			e.printStackTrace();
		}
		
		
		return isSuccess;
	}
		
}
