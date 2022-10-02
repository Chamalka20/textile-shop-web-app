package com.user;



import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;


import com.util.user_DB;


@WebServlet("/user_registration")
public class user_registration extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
   

	
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException {
		
		String fname = req.getParameter("fname");
		String lname = req.getParameter("lname");
		String pass = req.getParameter("pass");
		String email = req.getParameter("email");
		String phone = req.getParameter("phone");
		String addr1 = req.getParameter("addli1");
		String addr2 = req.getParameter("addli2");
		String city = req.getParameter("city");
		

		boolean isTrue;
		
		isTrue=user_DB.user_insert(fname, lname, pass, email, phone, addr1,addr2,city);
		
		
		if(isTrue==true) {
			
			System.out.println("ok");
		}else {
			System.out.println("not success");
		}
		
			
		
	}

	
}
