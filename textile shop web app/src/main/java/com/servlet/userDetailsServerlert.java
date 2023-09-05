package com.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/userDetailsServerlert")
public class userDetailsServerlert extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    
    public userDetailsServerlert() {
        super();
        
    }

	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		
		String name = req.getParameter("nameInput");
        String message = req.getParameter("messageInput");
        
        res.setContentType("text/html");
        PrintWriter out = res.getWriter();

        
        out.println("<html>");
        out.println("<head>");
        out.println("<title>Response</title>");
        out.println("<style>");
        out.println("body { background-color: red; color: white; }");
        out.println("</style>");
        out.println("</head>");
        out.println("<body>");
        out.println("<h1>Hi "+name+"</h1>");
        out.println("<p> " + message + "</p>");
        out.println("</body>");
        out.println("</html>");

        
        out.close();
        
		
		
	}

}
