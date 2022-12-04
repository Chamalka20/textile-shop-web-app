package com.util;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Arrays;

import javax.json.JsonArray;

import org.json.JSONArray;
import org.json.JSONObject;

import com.models.user;



public class user_DB {

	public  boolean user_insert(String first_name,String last_name,String password,String email,String telephone,String isTemporaty,String ZIP,String country,String address_line1,String address_line2,String city,String date,String isOrder,String total,String [] selectItems,String payType ){ 	
		
		boolean isSuccess = false;
		
		JSONArray arr = new JSONArray(Arrays.toString(selectItems));
		JSONArray itemArr = arr.getJSONObject(0).getJSONArray("basket");
		
		ResultSet generatedkeys1=null;
		ResultSet generatedkeys2=null;
		ResultSet generatedkeys3=null;
		int user_id = 0;
		int pay_id = 0;
		int order_id = 0;
		DB_connect db = new DB_connect();
		Connection con = null; 
		
		
		String sql1 ="INSERT INTO `textile`.`user` (`first_name`, `last_name`, `password`, `email`, `telephone`,`isTemporaty`,`ceated_at`) VALUES ('"+first_name+"','"+last_name+"','"+password+"','"+email+"','"+telephone+"','"+isTemporaty+"','"+date+"')";
		String sql2 ="INSERT INTO `textile`.`user_address` (`user_id` ,`ZIP`,`country`,`address_line1`, `address_line2`, `city`) VALUES (?,'"+ZIP+"','"+country+"','"+address_line1+"','"+address_line2+"', '"+city+"')";
		String sql3 ="INSERT INTO `textile`.`user_payment` (`user_id`, `payment_type` ) VALUES (?,'CashOnDelivery');";
		String sql4 ="INSERT INTO `textile`.`order_details` (`user_id`, `total`, `payment_id`) VALUES (?, '"+total+"', ?);";
		String sql5 ="INSERT INTO `textile`.`order_items` (`order_id`, `product_id`, `pro_size`, `quantity`) VALUES (?, ?, ?, ?);";
		
		
		try {
			
			// if customer pace the order------------------------
			if(isOrder.equals("true")) {
				
				con=db.getConnection();
				PreparedStatement stmt1 = con.prepareStatement(sql1,Statement.RETURN_GENERATED_KEYS );
				//insert data user table--------------------
				int rs =stmt1.executeUpdate();
				generatedkeys1 = stmt1.getGeneratedKeys();
				
				if(rs>0) {
					isSuccess = true;
				}else {
					isSuccess = false;
				}
				
				
				if(generatedkeys1.next()) {
					// get user id ---------------------
					user_id = generatedkeys1.getInt(1);
					System.out.println(user_id); 
					
				
				}else {
					
					System.out.println("no generatedkeys");
				}
				
				//insert data user_address table--------------------
				try {
					PreparedStatement stmt2 = con.prepareStatement(sql2);
					stmt2.setInt(1,user_id);
					System.out.println(user_id);
					int rs2=stmt2.executeUpdate();
					
					
					if(rs2>0) {
						
						System.out.println("user_address succesfuly insert");
					}else{
						System.out.println("user_address insert is not success");
						
					}
					
					
					
					
				}catch(Exception e){
					
					e.printStackTrace();
				}
				
				//insert data user_payment table--------------------
				PreparedStatement stmt3 = con.prepareStatement(sql3,Statement.RETURN_GENERATED_KEYS);
				stmt3.setInt(1,user_id);
				stmt3.executeUpdate();
				
				generatedkeys2 = stmt3.getGeneratedKeys();
				
				if(generatedkeys2.next()) {
					// get payment id ---------------------
					pay_id = generatedkeys2.getInt(1);
					System.out.println("pay_id is "+pay_id); 
					
				
				}else {
					
					System.out.println("no generatedkeys userpayment table");
				}
				
				//insert data order_details table--------------------
				PreparedStatement stmt4 = con.prepareStatement(sql4,Statement.RETURN_GENERATED_KEYS);
				stmt4.setInt(1,user_id);
				stmt4.setInt(2,pay_id);
				stmt4.executeUpdate();
				
				generatedkeys3 = stmt4.getGeneratedKeys();
				
				if(generatedkeys3.next()) {
					// get payment id ---------------------
					order_id = generatedkeys3.getInt(1);
					System.out.println("order_id is "+order_id); 
					
				
				}else {
					
					System.out.println("no generatedkeys userpayment table");
				}
				
				
				//insert data order_items table--------------------
				PreparedStatement stmt5 = con.prepareStatement(sql5);
				
				for(int i=0;i<itemArr.length();i++) {
					
					stmt5.setInt(1,order_id);
					stmt5.setInt(2,itemArr.getJSONObject(i).getInt("id"));
					stmt5.setString(3, itemArr.getJSONObject(i).getString("size"));
					stmt5.setInt(4,itemArr.getJSONObject(i).getInt("item"));
					
					stmt5.executeUpdate();
				}
				
				
				
			//----------------------------------------------------------------------------------------------------------	
			}else {
				
				con=db.getConnection();
				PreparedStatement stmt1 = con.prepareStatement(sql1,Statement.RETURN_GENERATED_KEYS );
				
				int rs =stmt1.executeUpdate();
				generatedkeys1 = stmt1.getGeneratedKeys();
				
				if(rs>0) {
					isSuccess = true;
				}else {
					isSuccess = false;
				}
				
				
				if(generatedkeys1.next()) {
					
					user_id = generatedkeys1.getInt(1);
					System.out.println(user_id); 
					
				
				}else {
					
					System.out.println("no generatedkeys");
				}
				
				try {
					PreparedStatement stmt2 = con.prepareStatement(sql2);
					stmt2.setInt(1,user_id);
					System.out.println(user_id);
					int rs2=stmt2.executeUpdate();
					
					
					if(rs2>0) {
						
						System.out.println("user_address succesfuly insert");
					}else{
						System.out.println("user_address insert is not success");
						
					}
					
					
					
					
				}catch(Exception e){
					
					e.printStackTrace();
				}
				
				
			}
			
			
			
			
		}
		catch(Exception e){
			
			e.printStackTrace();
		}
		
		
		
		return isSuccess;
		
	}

		
	public  user user_validation(String name,String password){
	
		user us =new user();
		DB_connect db = new DB_connect();
		Connection con = null; 
		
		try {
			
			con=db.getConnection();
			Statement stmt = con.createStatement();
			
			String sql = "SELECT * FROM user,user_address WHERE (user.first_name='"+name+"' OR user.email='"+name+"')AND user.password='"+password+"'";
			ResultSet rs = stmt.executeQuery(sql);
			System.out.println(name);
			if(rs.next()) {
				us.setUser_id(rs.getInt("user_id"));
				us.setFirst_name(rs.getString("first_name"));
				us.setLast_name(rs.getString("last_name"));
				us.setEmail(rs.getString("email"));
				us.setTelephone(rs.getInt("telephone"));
				us.setAddress_line1(rs.getString("address_line1"));
				us.setAddress_line2(rs.getString("address_line2"));
				us.setCity(rs.getString("city"));
			}
			
		}
		catch(Exception e) {
		
			e.printStackTrace();
		
		}
	
		return us;
	
	}	
	
	
}
