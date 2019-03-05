<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<h1>Nazioni:</h1><br>
<body>
	<c:forEach items="${lista}" var="nazioni">
		<a href="citta/${nazioni.code}">${nazioni.name}</a>
	</c:forEach>
</body>
</html>