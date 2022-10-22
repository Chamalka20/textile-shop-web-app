package com.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.util.product_DB;

@WebServlet("/getProducts")
public class getProducts extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   
	protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		
		product_DB pro = new product_DB(); 
		
		ArrayList<String> nameList = pro.getProducts();
		
		PrintWriter out = res.getWriter();
		
		for(int i=0; i<nameList.size();i++) {
			
			out.print(nameList.get(i)+" ");
			
		}
		
		
	}

	

}
