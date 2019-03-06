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
	<a href="form?id=0">Inserisci nuova citta</a>
	<a href="continenti"style="color: black;">Torna alla home</a>
	<a href="nazioni">Torna indietro</a>
	<br>
	<c:forEach items="${lista}" var="citta">
		<a>${citta.name}&nbsp;</a>
		<a href="form?id=${citta.id}" style="color:green;">Modifica</a>
		<a href="elimina?id=${citta.id}"style="color: red;">Elimina</a>
		<br>
	</c:forEach>
</body>
</html>