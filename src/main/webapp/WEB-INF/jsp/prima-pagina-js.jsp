<head>
	<meta charset="ISO-8859-1">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<title>Insert title here</title>
	<script type="text/javascript" src="/js/nazioni.js"></script>
	<script type="text/javascript" src="/js/citta.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
	<link rel="stylesheet" type="text/css" href="/css/style.css">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
		integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>

<body>
	<input type="hidden" id="continente">
	<p id="indietroContinenti" onclick="showContinenti()" class="btn btn-secondary">Torna indietro</p>
	<p id="indietroNazioni" onclick="showNazioni()" class="btn btn-secondary">Torna indietro</p>
	<p id="inserisciCitta" onclick="infoCitta(0)" class="btn btn-info">Inserisci citta</p>
	<div class="container">
		<div id="content" class="row">
		</div>
		<div class="form-group">
			<div id="formRicerca" class="col-lg-8">
				<h4><span class="badge badge-primary">Da qui inserisci la tua citta!</span></h4>
				<select id="listaNazioniRicerca" class="form-control btn btn-info dropdown-toggle">
				</select><br>
				<h4><span class="badge badge-primary">Inserisci citta:</span></h4><input type="text"
					id="textRicercaCitta" class="form-control" placeholder="Nome citta"><br>
				<h4><span class="badge badge-primary">Inserisci popolazione Max:</span></h4><input type="number"
					id="popolazioneMax" class="form-control" placeholder="Popolazione Max"><br>
				<h4><span class="badge badge-primary"> Inserisci popolazione min:</span></h4><input type="number"
					id="popolazioneMin" class="form-control" placeholder="Popolazione Min"><br>
				<button onclick="ricercaCitta()" id="bottoneRicerca"
					class="pointer offset-lg-4 col-lg-4 col-md-12 btn btn-info">CercaCitta!</button>
			</div>
		</div>
		<div id="formModifica" class="form-group">
			<div id="inserisciModifica" class="col-lg-8">
				<h4><span class="badge badge-primary">Da qui inserisci la tua citta!</span></h4>
				<select id="listaNazioniModifica" class="form-control class= 'btn btn-info dropdown-toggle'">
				</select><br>
				<h4><span class="badge badge-primary">Inserisci regione:</span></h4><input type="text" id="textRegione"
					class="form-control"><br>
				<h4><span class="badge badge-primary">Inserisci citta:</span></h4><input type="text" id="textCitta"
					class="form-control">
				<br>
				<h4><span class="badge badge-primary">Inserisci popolazione:</span></h4><input type="number"
					id="textPopolazione" class="form-control"><br>
				<input type="hidden" id="idCitta">
				<input type="hidden" id="codiceNazioneHidden">
				<div class="row justify-content-around">
					<p id="bottoneModifica" onclick=" modificaCitta()" class="col-lg-4  btn btn-info">Modifica</p>
					<p id="bottoneInserisci" onclick=" inserisciCitta()" class="col-lg-4  btn btn-info">Inserisci</p>
					<p button id="indietroModifica" onclick="showCitta()" class="col-lg-4  btn btn-dark">Torna indietro</p>
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