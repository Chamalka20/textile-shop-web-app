package com.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.util.product_DB;


@WebServlet("/addProCategory")
public class addProCategory extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		
		String catname = req.getParameter("catname");
		String desc = req.getParameter("desc");
		
		boolean ok = product_DB.pro_category(catname,desc);
		
		System.out.println(ok);
		
	}

}
