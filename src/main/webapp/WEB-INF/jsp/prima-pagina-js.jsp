<head>
	<meta charset="ISO-8859-1">
	<title>Insert title here</title>
	<script type="text/javascript" src="/js/nazioni.js"></script>
	<script type="text/javascript" src="/js/citta.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<link rel="stylesheet" type="text/css" href="/css/style.css">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
	</head>
	<body>
		<input type="hidden" id="continente">
		<p id="indietroContinenti" onclick="showContinenti()" class="btn btn-outline-secondary">Torna indietro</p>
		<p id="indietroNazioni" onclick="showNazioni()" class="btn btn-outline-secondary">Torna indietro</p>
		<p id="inserisciCitta" onclick ="infoCitta(0)" class="btn btn-outline-primary">Inserisci citta</p>
		<div class= "container">
			<div class="row justify-content-around col-12">
			<div id="content"class= "btn btn-secondary btn-sm col-3">
			</div>
			<div id="formRicerca" class="col-sm-4">
				<p>Da qui inserisci la tua citta:</p>
				<select id="listaNazioniRicerca"class="col">
				</select><br>Inserisci citta:<input type="text" id="textRicercaCitta" class="form-control form-control-sm"><br>
				Inserisci popolazione max: <input type="number" id="popolazioneMax" class="form-control form-control-sm"><br>
				Inserisci popolazione min: <input type="number" id="popolazioneMin" class="form-control form-control-sm"><br>
			<button onclick="ricercaCitta()" id="bottoneRicerca" class="btn btn-info">CercaCitta!</button>
		</div>
	
		<div id="formModifica" class="col-10 row justify-content-center co-12">
			<div id="inserisciModifica" class="col-4">
				<p>Da qui inserisci la tua citta:</p>
				<select id="listaNazioniModifica" class="col">
				</select><br> Inserisci Regione: <input type="text" id="textRegione" class="col"><br>
				Inserisci citta: <input type="text" id="textCitta" class="col"><br>
				Inserisci popolazione: <input type="text" id="textPopolazione" class="col"><br>
				<input type="hidden" id="idCitta">
				<input type="hidden" id="codiceNazioneHidden">
				<div class="row justify-content-around">
			<button  id="bottoneModifica" onclick=" modificaCitta()" class=" btn btn-info">Modifica</button>
			<button id="bottoneInserisci" onclick=" inserisciCitta()" class="btn btn-info">Inserisci</button>
			<button id = "indietroModifica" onclick="showCitta()" class=" btn btn-dark">Torna indietro</button>
			</div>
		</div>
		</div>
	</div>
		</div>
	
	</body>
	<script>
		showContinenti();
		getAllNazioni();
	</script>
	</html>