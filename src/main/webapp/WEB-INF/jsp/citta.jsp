<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h1>Citta:</h1>
	<br>
	<c:forEach items="${lista}" var="citta">
		<a>${citta.name}&nbsp;</a><br>
	</c:forEach>
</body>
</html>