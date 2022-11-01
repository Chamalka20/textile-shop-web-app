package com.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.json.JsonArray;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.util.product_DB;


@WebServlet("/getProductDetails")
public class getProductDetails extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   
	protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		
		String id = req.getParameter("id");
		
		product_DB pro = new product_DB();
		
		JsonArray proDetails = (JsonArray) pro.editProduct(id);
		
		PrintWriter out = res.getWriter();
		out.print(proDetails);
		
		
		
		
		
	}

	

}
