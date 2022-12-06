package com.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.json.JsonArray;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.util.user_DB;




@WebServlet("/get_orders")
public class get_orders extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
	protected void doGet(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		
		user_DB user = new user_DB(); 
		JsonArray jsonpro = (JsonArray) user.getCusOrders();
		PrintWriter out = res.getWriter();
		System.out.println(jsonpro);
		out.print(jsonpro);
		
	}



}
