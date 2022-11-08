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
		String image = req.getParameter("imageUp");
		String date = req.getParameter("date");
		String small = req.getParameter("small");
		String medium = req.getParameter("medium");
		String large = req.getParameter("large");
		String xl = req.getParameter("xl");
		String category = req.getParameter("cate");
		product_DB pro = new product_DB();
		
		boolean isSuccess = pro.insert_pro(name, desc, price,image,date,small,medium,large,xl,category); 
		
		if(isSuccess==true) {
			
			System.out.println("ok");
		}else {
			
			System.out.println("not");
		}
		
		
		
	}




}
