package com.util;

import java.sql.Connection;
import java.sql.PreparedStatement;

public class product_DB {

	public  boolean insert_pro(String name,String desc,String price,String quantity) {
		boolean isSuccess = false; 
		
		DB_connect db = new DB_connect();
		Connection con = null; 
		String sql1 ="INSERT INTO `textile`.`product` (`name`, `desc`, `price`) VALUES ('"+name+"', '"+desc+"', '"+price+"');";
		String sql2 ="INSERT INTO `textile`.`inventory` (`quantity`) VALUES ('"+quantity+"');";
		try {
			
			con=db.getConnection();
			PreparedStatement stmt1 = con.prepareStatement(sql1);
			PreparedStatement stmt2 = con.prepareStatement(sql2);
			int rs1 = stmt1.executeUpdate();
			int rs2 = stmt2.executeUpdate();
			int totalrs = rs1+rs2;
			
			if(totalrs==2){
				
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
