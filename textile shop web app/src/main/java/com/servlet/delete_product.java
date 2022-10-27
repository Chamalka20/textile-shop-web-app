package com.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.util.product_DB;


@WebServlet("/delete_product")
public class delete_product extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   
   
	
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		
		String id = req.getParameter("id");
		
		product_DB pro = new product_DB();
		
		boolean Success =pro.deleteProduct(id);
		
		if(Success ==true) {
			System.out.println("product delete is  success");
		}

		
	}

}
