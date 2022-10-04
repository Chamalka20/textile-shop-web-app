package com.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.util.product_DB;


@WebServlet("/add_product")
public class add_product extends HttpServlet {
	private static final long serialVersionUID = 1L;


	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
	
		String name = req.getParameter("name");
		String desc = req.getParameter("desc");
		String price = req.getParameter("price");
		
		product_DB pro = new product_DB();
		
		boolean isSuccess = pro.insert_pro(name, desc, price); 
		
		if(isSuccess==true) {
			
			System.out.println("ok");
		}else {
			
			System.out.println("not");
		}
		
		
		
	}

}
