package com.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.util.product_DB;

@WebServlet("/get_categories/*")
public class get_categories extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	
	try {
		product_DB pro = new product_DB();
		List<String> names = pro.getpro_category();
				for(int i=0;i<names.size();i++) {
			
			PrintWriter out = response.getWriter();
			out.print(names.get(i)+" ");
			System.out.println(names.get(i));
		}
		
		
	}catch(Exception e)	{
		
		e.printStackTrace();
	}
		
		
		
		
			
			
		}
		
		
		
		
	
	


}
