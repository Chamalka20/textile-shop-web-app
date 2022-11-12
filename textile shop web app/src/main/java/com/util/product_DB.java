package com.util;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Arrays;

import javax.json.Json;
import javax.json.JsonArray;
import javax.json.JsonArrayBuilder;


;
public class product_DB {

	public  boolean insert_pro(String name,String desc,String price,String image,String date,String small,String medium,String large,String xl,String category ) {
		boolean isSuccess = false;
		int cat_id;
		ResultSet generateKey1=null;
		ResultSet generateKey2=null;
		int inven_id;
		int size_id;
		int proQuantity;
		
	
		DB_connect db = new DB_connect();
		Connection con = null; 
		String sql1 ="INSERT INTO `textile`.`product` (`name`, `desc`,`category_id`,`inventory_id`,`size_id`, `price`,`image`,`sale_id`,`in_stock`,`salles`,`add_date`) VALUES ('"+name+"', '"+desc+"',?,?,?, '"+price+"','"+image+"',0,'true',0,'"+date+"');";
		String sql2 ="INSERT INTO `textile`.`inventory` (`quantity`) VALUES (?);";
		String sql3 ="SELECT * FROM textile.product_category WHERE cat_name='"+category+"'";
		String sql4 = "INSERT INTO `textile`.`product_sizes` (`small`, `medium`, `large`, `XL`) VALUES ('"+small+"', '"+ medium+"', '"+large+"', '"+xl+"');";
		try {
			
			con=db.getConnection();
			PreparedStatement stmt1 = con.prepareStatement(sql1);
			PreparedStatement stmt2 = con.prepareStatement(sql2,Statement.RETURN_GENERATED_KEYS);
			Statement stmt3 = con.createStatement();
			PreparedStatement stmt4 = con.prepareStatement(sql4,Statement.RETURN_GENERATED_KEYS);
			
	
			//Insert in to product_sizes table------------------------------------------------------------
			int rs3 = stmt4.executeUpdate();
				if(rs3>0) {
					
					generateKey1 = stmt4.getGeneratedKeys();
					if(generateKey1.next()) {
						
						size_id = generateKey1.getInt(1);
						stmt1.setInt(3,size_id);
						
					}					
					
				}
			
			//get category id from category table----------------------------------------------------------
			ResultSet rs = stmt3.executeQuery(sql3);
			if(rs.next()) {
				
				cat_id =rs.getInt("id");
				System.out.println(cat_id);
				stmt1.setInt(1, cat_id);
				
			}else {
				
				System.out.println("category id not get");
			}
			
			//All sizes products are Insert in to inventory------------------------------------------------------------
			
			proQuantity =Integer.parseInt(small)+Integer.parseInt(medium)+Integer.parseInt(large)+Integer.parseInt(xl);
			stmt2.setInt(1, proQuantity);
			int rs2 = stmt2.executeUpdate();
			generateKey2 = stmt2.getGeneratedKeys();
			if(generateKey2.next()) {
				
				inven_id = generateKey2.getInt(1);
				System.out.println("inventory id is "+inven_id);
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
	


	public static boolean setpro_category(String name,String desc ) {
		boolean isSuccess = false;
		
		DB_connect db = new DB_connect();
		Connection con = null;
		
		String sql ="INSERT INTO `textile`.`product_category` (`cat_name`, `desc`) VALUES ('"+name+"', '"+desc+"');";
		
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
	
	public ArrayList<String> getpro_category(){
		ArrayList<String> names = new ArrayList<String>();
		
		DB_connect db = new DB_connect();
		Connection con = null;
		String sql1 = "SELECT cat_name FROM textile.product_category;";
		
		try {
			
			con=db.getConnection();
			PreparedStatement stmt1 = con.prepareStatement(sql1);
			
			ResultSet rs = stmt1.executeQuery();
			
			while(rs.next()) {
				
				 names.add(rs.getString("cat_name"));
			}
			
			System.out.println(names );
			
		}catch(Exception e) {
			
			e.printStackTrace();
		}
		
		
		
		return names;
	}
	
	
	public boolean add_discount(String disname,String disvalue,String userSelect,String disapply,String miniperamount,String startdate,String enddate) {
		boolean isSuccess=false;
		ResultSet generateKey=null;
		int disid = 0;
		
		DB_connect db = new DB_connect();
		Connection con = null;
		String sql1 = "INSERT INTO `textile`.`discount` (`name`, `discount percent`, `start_date`, `end_date`, `minimum_order_value`) VALUES ('"+disname+"', '"+disvalue+"', '"+startdate+"', '"+enddate+"', '"+miniperamount+"');";
		String sql2 = "UPDATE `textile`.`product` SET `discount_id` = ? WHERE (`name` = '"+userSelect+"');";
		try {
			
			con=db.getConnection();
			//insert discount table------------------
			PreparedStatement stmt1 = con.prepareStatement(sql1,Statement.RETURN_GENERATED_KEYS);
			PreparedStatement stmt2 = con.prepareStatement(sql2);
			
			int rs =stmt1.executeUpdate();
			generateKey = stmt1.getGeneratedKeys();
			
			if(rs>0) {
				
				System.out.println("discount details add is success to the discount table");

			}else {
				System.out.println("discount details add is not success to the discount table");
			}
			
			//get discount table id primary key------------------
			if(generateKey.next()) {
				 disid = generateKey.getInt(1);
				
			}else {
				
				System.out.println("Not generatekeys");
			}
			
			
			
			//set discount to specific product------------------------
			if(disapply.equals("product")) {
				stmt2.setInt(1, disid);
				stmt2.executeUpdate();
				
			}else {
				
				System.out.println("not equal products");
			}
			
			
			
		}catch(Exception e) {
			
			e.printStackTrace();
		}
		
		
		
		return isSuccess;
	}
	
	public JsonArray getProducts(){
		
		JsonArrayBuilder builder = Json.createArrayBuilder();
		JsonArray jarr = null;
		DB_connect db = new DB_connect();
		Connection con = null;
		String sql1 = "SELECT * FROM textile.product,textile.sale WHERE product.sale_id=sale.saleid;";
		
		try {
			
			con=db.getConnection();
			PreparedStatement stmt1 = con.prepareStatement(sql1);
			
			ResultSet rs = stmt1.executeQuery();
			
			while(rs.next()) {
				
				builder.add(Json.createObjectBuilder()
				 	.add("id",rs.getInt(1))
				 	.add("name",rs.getString(2))
				 	.add("desc",rs.getString(3))
					.add("price",rs.getInt(7))
					.add("image",rs.getString(8))
					.add("stock",rs.getString(10))
					.add("salles",rs.getString(11))
					.add("add_date",rs.getString(12))
					.add("saleActive",rs.getString("saleActive"))
					.build());
				
				 
			}
			
			jarr = builder.build();
			
			
			
		}catch(Exception e) {
			
			e.printStackTrace();
		}
		
		
		
		
		return jarr;
	}
	
	public boolean deleteProduct(String id) {
		boolean isSuccess=false;
		DB_connect db = new DB_connect();
		Connection con = null;
		String sql= "DELETE FROM `textile`.`product` WHERE (`pro_id` = '"+id+"');";
		
		try {
			
			con=db.getConnection();
			PreparedStatement stmt1 = con.prepareStatement(sql);
			int rs =stmt1.executeUpdate();
			
			if(rs==1) {
				
				isSuccess=true;
			}else {
				
				System.out.println("product delete is not success");
			}
			
		}catch(Exception e){
			
			e.printStackTrace();
		}
		
		
		
		
		return isSuccess;
	}
	
	
	public JsonArray getSelectedProduct (String id) {
		JsonArrayBuilder builder = Json.createArrayBuilder();
		JsonArray jarr = null;
		DB_connect db = new DB_connect();
		Connection con = null;
		
		String sql1 = "SELECT * FROM `textile`.`product`,"
				+ "			`textile`.`sale`,\r\n"
				+ "			`textile`.`product_sizes`,\r\n"
				+ "         `textile`.`product_category`,\r\n"
				+ "            `textile`.`inventory` WHERE\r\n"
				+ "					`product`.`sale_id`=`sale`.`saleid` AND\r\n"
				+ "					`product`.`size_id`=`product_sizes`.`siz_id`  AND \r\n"
				+ "                 `product`.`category_id`=`product_category`.`id` AND  \r\n"
				+ "                 `product`.`inventory_id`=`inventory`.`inven_id` AND\r\n"
				+ "				    `pro_id` = '"+id+"';";
		
		
		
		try {
			con=db.getConnection();
			PreparedStatement stmt1 = con.prepareStatement(sql1);
			
			ResultSet rs1 =stmt1.executeQuery();
			
			
			if(rs1.next()) {
				
				builder.add(Json.createObjectBuilder()
					.add("id",rs1.getString("pro_id"))
					.add("name",rs1.getString("name"))
					.add("desc",rs1.getString("desc"))
					.add("price",rs1.getString("price"))
					.add("image",rs1.getString("image"))
					.add("salles",rs1.getString("salles"))
					.add("saleActive",rs1.getString("saleActive"))
					.add("saleName",rs1.getString("saleName"))
					.add("salePercentage",rs1.getString("salePercentage"))
					.add("quantity",rs1.getString("quantity"))
					.add("categorie",rs1.getString("cat_name"))
					.add("small",rs1.getString("small"))
					.add("medium",rs1.getString("medium"))
					.add("large",rs1.getString("large"))
					.add("xl",rs1.getString("XL"))
					.add("addDate",rs1.getString("add_date"))
					.build());
				
				
			}
			
		
			jarr = builder.build();
			
			System.out.println(jarr);
			
		}catch(Exception e){
			
			e.printStackTrace();
		}
		
		
		
		
		
		return jarr;
	}
	


//------------------------------------------------------------------------------------------
	public boolean editProduct(String id, String name, String desc,String price, String image, String small, String medium, String large, String xl, String categorie) {
		boolean isSuccess=false;
		DB_connect db = new DB_connect();
		Connection con = null;
		int cat_id = 0;
		int quantity = 0;
		
		String sql1 = "UPDATE `textile`.`product` SET `name` = '"+name+"', `desc` = '"+desc+"',`category_id`=?,`image`='"+image+"' WHERE (`pro_id` = '"+id+"');";
		String sql2 = "SELECT id FROM textile.product_category WHERE cat_name='"+categorie+"'";
		String sql3 = "UPDATE `textile`.`product_sizes`,`textile`.`product`\r\n"
						+ "SET `small`='"+small+"',`medium`='"+medium+"',`large`='"+large+"',`XL`='"+xl+"' \r\n"
						+ "WHERE `siz_id`=`product`.`size_id` AND`product`.`pro_id` = '"+id+"';";
		
		String sql4 = "UPDATE `textile`.`inventory`,`textile`.`product` \r\n"
							+ "		SET `quantity` = ? \r\n"
							+ "		WHERE `inven_id` = `product`.`inventory_id` AND `product`.`pro_id` ='"+id+"';";
		
		try {
			con=db.getConnection();
			PreparedStatement stmt1 = con.prepareStatement(sql1);
			PreparedStatement stmt2 = con.prepareStatement(sql2);
			PreparedStatement stmt3 = con.prepareStatement(sql3);
			PreparedStatement stmt4 = con.prepareStatement(sql4);
			
			//find category id from category table-----------------------------
			ResultSet rs1 =stmt2.executeQuery();
			if(rs1.next()) {
				
				cat_id = rs1.getInt(1);
			}	
			stmt1.setInt(1, cat_id);
			

			//update product table----------------------------------------
			int rs2 =stmt1.executeUpdate();
			
			if(rs2>0) {
				
				isSuccess=true;
			}
			
			//update product_sizes table-------------------------------------------
			int rs3 =stmt3.executeUpdate();
			
			if(rs3>0) {
				
				System.out.println("update product_sizes table");
			}
			
			//add all sizes nto the inventory-----------------------------------------
			quantity =Integer.parseInt(small)+Integer.parseInt(medium)+Integer.parseInt(large)+Integer.parseInt(xl); 
			stmt4.setInt(1, quantity);
			
			//update inventory table----------------------------------------------
			int rs4 =stmt4.executeUpdate();
			if(rs4>0) {
				
				System.out.println("update inventory table");
			}
			
			
		}catch(Exception e){
			
			e.printStackTrace();
		}
		
		
		
		
		return isSuccess;
	}
	
//-------------------------------------------------------------------------------------------------------------
	public boolean addToSale(String [] productIds,String percentage) {
		
		boolean isSuccess=false;
		DB_connect db = new DB_connect();
		Connection con = null;
		ResultSet generateKey = null;
		int proId = 0;
		int saleId = 0;
		
		String sql1 ="INSERT INTO `textile`.`sale` (`saleName`,`salePercentage`,`saleActive`) VALUES ('','"+percentage+"','true');";
		String sql2 = "UPDATE `textile`.`product` SET `sale_id` = ? WHERE (`pro_id` = ?);";
		
		
		try {
			con=db.getConnection();
			PreparedStatement stmt1 = con.prepareStatement(sql1,Statement.RETURN_GENERATED_KEYS);
			PreparedStatement stmt2 = con.prepareStatement(sql2);
			
			int rs=stmt1.executeUpdate();
			
			if(rs>0) {
				
				System.out.println("sale table uptade");
				
			}
			//get sale table generatekey--------------------------------------- 
			generateKey = stmt1.getGeneratedKeys();
			
			if(generateKey.next()) {
				 saleId = generateKey.getInt(1);
				 System.out.println(saleId);
			}else {
				
				System.out.println("Not generatekeys");
			}
			
			//add one by one products to sale------------------------------------
			for(int i=0; i<productIds.length;i++) {
				
				
				stmt2.setInt(1,saleId );
				proId =Integer.parseInt(productIds[i]);
				stmt2.setInt(2,proId );
				int rs2=stmt2.executeUpdate();
				
				if(rs2>0) {
					
					System.out.println("true");
				}else {
					
					System.out.println("not");
				}
			}
			
			
			
			
		}catch(Exception e){
			
			e.printStackTrace();
		}
		
		
		
		return isSuccess;
	}

}
