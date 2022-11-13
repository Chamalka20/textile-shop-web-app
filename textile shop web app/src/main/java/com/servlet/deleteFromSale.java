package com.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.util.product_DB;


@WebServlet("/deleteFromSale")
public class deleteFromSale extends HttpServlet {
	private static final long serialVersionUID = 1L;
       

	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		product_DB pro = new product_DB();
		String id = req.getParameter("id");
		
		boolean isSuccess = pro.deletefromsale(id);
		System.out.println(isSuccess);
		
	}

}
