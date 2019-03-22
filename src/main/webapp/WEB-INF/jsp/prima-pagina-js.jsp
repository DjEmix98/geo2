<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<script type="text/javascript" src="/js/nazioni.js"></script>
<script type="text/javascript" src="/js/citta.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<link rel="stylesheet" type="text/css" href="/css/style.css">
</head>
<body>
	<input type="hidden" id="continente">
	<p id="indietroContinenti" onclick="showContinenti()" class="underline">Torna indietro</p>
	<p id="indietroNazioni" onclick="showNazioni()" class="underline">Torna indietro</p>
	<p id="inserisciCitta" onclick ="infoCitta(0)" class="underline">Inserisci citta</p>
	<div id="content">
	</div>
	<div id="formRicerca" class="bordo-verde">
		<form>
			<p>Da qui inserisci la tua citta:</p>
			<select id="listaNazioniRicerca">
			</select><br> Inserisci citta: <input type="text" id="textRicercaCitta"><br>
			Inserisci popolazione max: <input type="text" id="popolazioneMax"><br>
			Inserisci popolazione min: <input type="text" id="popolazioneMin"><br>
		</form>
		<button onclick="ricercaCitta()" id="bottoneRicerca" class="nero-azzurro">CercaCitta!</button>
	
	</div>

	<div id="formModifica">
		<form id="inserisciModifica">
			<p>Da qui inserisci la tua citta:</p>
			<p id = "indietroModifica" onclick="showCitta()" class="underline">Torna indietro</p>
			<select id="listaNazioniModifica">
			</select><br> Inserisci Regione: <input type="text" id="textRegione"><br>
			Inserisci citta: <input type="text" id="textCitta"><br>
			Inserisci popolazione: <input type="text" id="textPopolazione"><br>
			<input type="hidden" id="idCitta">
			<input type="hidden" id="codiceNazioneHidden">
		</form>
		<button  id="bottoneModifica" onclick=" modificaCitta()" class="neroAzzurro">Modifica</button>
		<button id="bottoneInserisci" onclick=" inserisciCitta()" class="neroAzzurro">Inserisci</button>
	</div>


</body>
<script>
	showContinenti();
	getAllNazioni();
</script>
</html>