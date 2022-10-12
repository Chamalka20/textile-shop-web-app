package com.servlet;

import java.io.IOException;
import java.util.ArrayList;

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
		String miniperamount = req.getParameter("miniamount");
		String startdate = req.getParameter("startdate");
		String enddate = req.getParameter("enddate");
	
		product_DB pro = new product_DB(); 
		ArrayList<String> names =pro.add_discount(disname, disvalue, disapply, miniperamount, startdate, enddate);
		
		String[] listnames = new String[names.size()];
		listnames = names.toArray(listnames);
		System.out.println(listnames[3] );
	
	}

}
