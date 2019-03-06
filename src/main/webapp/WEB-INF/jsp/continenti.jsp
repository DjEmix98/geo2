<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<h1>Continenti:</h1>
<br>
<body>
	<c:forEach items="${lista}" var="continenti">
		<a href="nazioni?continente=${continenti}">${continenti}</a>
	</c:forEach>
	<form action="ricerca">
		<select name="codiceNazione">
			<c:forEach items="${listaNazioni}" var="nazioni">
				<option value="${nazioni.code}">${nazioni.name}</option>
			</c:forEach>
		</select><br> <br> Inserisci nome citta: <input type="text"
			name="nomeCitta"><br> inserisci popolazione: <input
			type="text" name="popolazione"><br> <input type="radio"
			name="operatore" value="maggiore" checked> Maggiore <input
			type="radio" name="operatore" value="minore"> Minore<br>
		<input type="submit" value="Cerca">
	</form>
</body>
</html>