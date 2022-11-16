package com.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.util.admin_DB;



@WebServlet("/admin_login")
public class admin_login extends HttpServlet {
	private static final long serialVersionUID = 1L;
   
	
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		
		String name = req.getParameter("username");
		String password = req.getParameter("password");
		
		admin_DB adm = new admin_DB();
		PrintWriter out = res.getWriter();
		
		boolean isSuccess = adm.admin_validation(name, password);
		out.print(isSuccess);
	
		
	}

}
