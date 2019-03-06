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
	<p>${error}</p>
	<a href="continenti">Torna alla home</a>
	<c:forEach items="${list}" var="citta">
		<p>Nome citta: ${citta.name} popolazione: ${citta.population}</p>
	</c:forEach>
</body>
</html>