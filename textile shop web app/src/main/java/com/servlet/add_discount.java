package com.servlet;

import java.io.IOException;


import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.util.product_DB;


@WebServlet("/add_discount")
public class add_discount extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
  
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		
		String disname = req.getParameter("disname");
		String disvalue = req.getParameter("disvalue");
		String disapply = req.getParameter("disaddtype");
		String userSelect = req.getParameter("userSelect");
		String miniperamount = req.getParameter("miniamount");
		String startdate = req.getParameter("startdate");
		String enddate = req.getParameter("enddate");
	
		product_DB pro = new product_DB(); 
		pro.add_discount(disname, disvalue,userSelect, disapply, miniperamount, startdate, enddate);
		
	}

}
