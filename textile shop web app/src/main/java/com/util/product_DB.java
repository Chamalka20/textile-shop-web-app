package com.util;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;



public class product_DB {

	public  boolean insert_pro(String name,String desc,String price,String quantity,String category ) {
		boolean isSuccess = false;
		int cat_id;
		ResultSet generateKey=null;
		int inven_id;
		
		DB_connect db = new DB_connect();
		Connection con = null; 
		String sql1 ="INSERT INTO `textile`.`product` (`name`, `desc`,`category_id`,`inventory_id`, `price`) VALUES ('"+name+"', '"+desc+"',?,?, '"+price+"');";
		String sql2 ="INSERT INTO `textile`.`inventory` (`quantity`) VALUES ('"+quantity+"');";
		String sql3 ="SELECT * FROM textile.product_category WHERE name='"+category+"'";
		try {
			
			con=db.getConnection();
			PreparedStatement stmt1 = con.prepareStatement(sql1);
			PreparedStatement stmt2 = con.prepareStatement(sql2,Statement.RETURN_GENERATED_KEYS);
			Statement stmt3 = con.createStatement();
			
			
			ResultSet rs = stmt3.executeQuery(sql3);
			if(rs.next()) {
				
				cat_id =rs.getInt("id");
				System.out.println(cat_id);
				stmt1.setInt(1, cat_id);
				
			}else {
				
				System.out.println("category id not get");
			}
			//Insert in to inventory
			int rs2 = stmt2.executeUpdate();
			generateKey = stmt2.getGeneratedKeys();
			if(generateKey.next()) {
				
				inven_id = generateKey.getInt(1);
				System.out.println(inven_id);
				stmt1.setInt(2,inven_id );
			}else {
				
				System.out.println("Not generatekeys");
			}
			
			
			
			int rs1 = stmt1.executeUpdate();
			int totalrs = rs1+rs2;
			
			if(totalrs==2){
				
				System.out.println("product insert is success");
				isSuccess=true;
			}else {
				System.out.println("product insert is not success");
			}
			
			
		}catch(Exception e) {
			
			e.printStackTrace();
		}
		
		
		return isSuccess;
	}
	
	public static boolean pro_category(String name,String desc ) {
		boolean isSuccess = false;
		
		DB_connect db = new DB_connect();
		Connection con = null;
		
		String sql ="INSERT INTO `textile`.`product_category` (`name`, `desc`) VALUES ('"+name+"', '"+desc+"');";
		
		try {
			
			con=db.getConnection();
			PreparedStatement stmt = con.prepareStatement(sql);
			int rs = stmt.executeUpdate();
			
			if(rs>0) {
				System.out.println("category update is success");
				isSuccess=true;
			}else {
				System.out.println("category update is not success");
			}
		
		}catch(Exception e) {
			e.printStackTrace();
			
		}
		
		
		return isSuccess;
	}
	
	
	public  boolean add_discount(String disname,String disvalue,String disapply,String miniperamount,String startdate,String enddate) {
		boolean isSuccess = false;
		ResultSet generateKey=null;
		int disid = 0;
		
		DB_connect db = new DB_connect();
		Connection con = null;
		String sql1 = "INSERT INTO `textile`.`discount` (`name`, `discount percent`, `start_date`, `end_date`, `minimum_order_value`) VALUES ('"+disname+"', '"+disvalue+"', '"+startdate+"', '"+enddate+"', '"+miniperamount+"');";
		String sql2 = "UPDATE `textile`.`product` SET `discount_id` = ? ;";
		//String sql3 = "SELECT name FROM textile.product_category;";
		
		try {
			
			con=db.getConnection();
			//insert discount table---------------
			PreparedStatement stmt1 = con.prepareStatement(sql1,Statement.RETURN_GENERATED_KEYS);
			PreparedStatement stmt2 = con.prepareStatement(sql2);
			int rs =stmt1.executeUpdate();
			generateKey = stmt1.getGeneratedKeys();
			
			if(rs>0) {
				
				System.out.println("discount add is success");

			}else {
				System.out.println("discount add is not success");
			}
			
			//get discount table id primary key------------------
			if(generateKey.next()) {
				 disid = generateKey.getInt(1);
				
			}else {
				
				System.out.println("Not generatekeys");
			}
			
			//set discount to all products-------------
			if(disapply.equals("all")) {
				
				stmt2.setInt(1,disid);
				stmt2.executeUpdate();
				
			}else {
				System.out.println("not equal all");
			}
			
			
			
		}catch(Exception e) {
			
			e.printStackTrace();
		}
		
		
		
		return isSuccess;
	}
	
	
	
}
