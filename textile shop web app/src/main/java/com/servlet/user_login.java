package com.servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.models.user;
import com.util.user_DB;


@WebServlet("/user_login")
public class user_login extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
	
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		
		String uname = req.getParameter("uname");
		String pass = req.getParameter("pass");
	
		user_DB ud = new user_DB();
		user s1 = ud.user_validation(uname,pass);
		req.setAttribute("user", s1);
		
	
		RequestDispatcher rd = req.getRequestDispatcher("show_user.jsp");
		rd.forward(req, res);
		
			
	}

		
}
