package com.servlet;



import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.util.product_DB;
import com.util.user_DB;


@WebServlet("/user_registration")
public class user_registration extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   

	
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException {
		
		String fname = req.getParameter("fname");
		String lname = req.getParameter("lname");
		String pass = req.getParameter("pass");
		String email = req.getParameter("email");
		String ZIP = req.getParameter("ZIP");
		String country = req.getParameter("country");
		String phone = req.getParameter("phone");
		String addr1 = req.getParameter("addli1");
		String addr2 = req.getParameter("addli2");
		String city = req.getParameter("city");
		
		user_DB us = new user_DB();
		
		
		boolean isTrue= us.user_insert(fname, lname, pass, email, phone,ZIP,country, addr1,addr2,city);
		
		
		if(isTrue==true) {
			
			System.out.println("ok");
		}else {
			System.out.println("not success");
		}
		
			
		
	}

	
}
