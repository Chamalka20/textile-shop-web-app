package com.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.util.product_DB;


@WebServlet("/Edit_product")
public class Edit_product extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
  
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		
		String id = req.getParameter("id");
		String name = req.getParameter("name");
		String desc = req.getParameter("desc");
		String price= req.getParameter("price");
		String image = req.getParameter("image");
		String small = req.getParameter("small");
		String medium = req.getParameter("medium");
		String large = req.getParameter("large");
		String xl = req.getParameter("xl");
		String categorie = req.getParameter("categorie");
		
		product_DB pro = new product_DB();
		
		boolean Success = pro.editProduct(id,name,desc,price,image,small,medium,large,xl,categorie);
		
		System.out.println(Success);
		
		
	}

}
