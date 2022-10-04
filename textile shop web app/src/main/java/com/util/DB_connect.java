package com.util;

import java.sql.Connection;
import java.sql.DriverManager;

public class DB_connect {

	private String url = "jdbc:mysql://localhost:3306/textile";
	private String userName ="root";
	private String pass ="root";
	
	public Connection getConnection() {
		
		Connection con = null;
		
		try {
			Class.forName("com.mysql.jdbc.Driver");
			con = DriverManager.getConnection(url,userName,pass);
			
		}catch(Exception e){
			
			System.out.println("DB connection is not success");
			
		}
		
			
		return con;
	}
	
	
	
	
}
