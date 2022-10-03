package com.util;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;


import com.models.user;


public class user_DB {

	public static boolean user_insert(String first_name,String last_name,String password,String email,String telephone,String address_line1,String address_line2,String city ){ 	
		
		boolean isSuccess = false;
		ResultSet generatedkeys=null;
		int user_id = 0; 
		
		String url = "jdbc:mysql://localhost:3306/textile";
		String userName ="root";
		String pass ="root";
		
		String sql1 ="INSERT INTO `textile`.`user` (`first_name`, `last_name`, `password`, `email`, `telephone`) VALUES ('"+first_name+"','"+last_name+"','"+password+"','"+email+"','"+telephone+"')";
		String sql2 ="INSERT INTO `textile`.`user_address` (`user_id` ,`address_line1`, `address_line2`, `city`) VALUES (?,'"+address_line1+"','"+address_line2+"', '"+city+"')";
		
		try {
			
			Class.forName("com.mysql.jdbc.Driver");
			Connection con = DriverManager.getConnection(url,userName,pass);
			PreparedStatement stmt1 = con.prepareStatement(sql1,Statement.RETURN_GENERATED_KEYS );
			
			int rs =stmt1.executeUpdate();
			generatedkeys = stmt1.getGeneratedKeys();
			
			if(rs>0) {
				isSuccess = true;
			}else {
				isSuccess = false;
			}
			
			
			if(generatedkeys.next()) {
				
				user_id = generatedkeys.getInt(1);
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
		catch(Exception e){
			
			e.printStackTrace();
		}
		
		
		
		return isSuccess;
		
	}

		
	public static user user_validation(String name,String email,String password){
	
		user us =new user();
	
		String url = "jdbc:mysql://localhost:3306/textile";
		String userName ="root";
		String pass ="root";
	
		try {
			Class.forName("com.mysql.jdbc.Driver");
			Connection con = DriverManager.getConnection(url,userName,pass);
			Statement stmt = con.createStatement();
			
			String sql = "SELECT * FROM user,user_address WHERE (user.first_name='"+name+"' OR user.email='"+email+"')AND user.password='"+password+"'";
			ResultSet rs = stmt.executeQuery(sql);
			
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
