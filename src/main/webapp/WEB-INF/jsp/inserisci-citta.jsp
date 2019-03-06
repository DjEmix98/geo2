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
	<form action="insert">
		<a href="citta">Torna indietro</a> <a href="continenti">Torna alla
			home</a> <br> <select name="codiceNazione">
			<c:forEach items="${list}" var="nazioni">
				<c:if test="${nazioni.code==codiceNazione}">
					<option value="${nazioni.code}" selected>${nazioni.name}</option>
				</c:if>
				<c:if test="${nazioni.code!=codiceNazione}">
					<option value="${nazioni.code}">${nazioni.name}</option>
				</c:if>
			</c:forEach>
		</select><br> Inserisci Regione: <input type="text" name="regione"
			value="${citta.district}"><br> Inserisci Citta: <input
			type="text" name="cittaNome" value="${citta.name}"><br>
			<c:if test="${citta.population==0}">Inserisci Popolazione: <input type="text" name="popolazione"
			value=""><br></c:if>
			<c:if test="${citta.population!=0}">
		Inserisci Popolazione: <input type="text" name="popolazione"
			value="${citta.population}"></c:if><br> <input type="submit"
			value="Esegui"> <input type="hidden" name="id"
			value="${citta.id}">
	</form>
</body>
</html>