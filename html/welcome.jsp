<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <title>Welcome Page</title>
</head>
<body>
    <% 
        // Retrieving data using the 'request' implicit object
        String name = request.getParameter("userName");
        String age = request.getParameter("userAge");
    <%-- Displaying the output using JSP Expressions --%>
    <h1>Hello <%= name %>, you are <%= age %> years old!</h1>
    
    <br>
    <a href="index.jsp">Go Back</a>
</body>
</html>