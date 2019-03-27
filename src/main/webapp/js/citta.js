/**
 * aaaa
 */
function showCitta() {

	var codiceNazione = $("#codiceNazioneHidden").val();
	$("#formRicerca").hide();
	$("#formModifica").hide();
	$("#indietroContinenti").hide();
	$("#indietroNazioni").show();
	$("#inserisciCitta").show();

	$.get("/api/citta/" + codiceNazione + "/list", function (city, status) {

		var tagDiv = $("#content");
		tagDiv.html("<div class='col-12'><h1 class='blu row justify-content-center'>Nazioni</h1>");
		for (citta of city) {

			tagDiv.append("<div class='col-sm-6 col-lg-3 col-md-6 text-center'><div class=' card mb-4 box-shadow'>" +
				"<div class='card-body'>" + "<h5 class='card-title '>" + citta.name + "</h5>" +
				"<p class='card-text'>Popolazione: " + citta.population + "</p>" +
				"<a id='modifica" + citta.id + "' class='btn btn-warning'>Modifica</a>" +
				"<a id='elimina" + citta.id + "' class='btn btn-danger'>Elimina</a>" +
				"</div>" + "</div>" + "</div>");
			$("#elimina" + citta.id).click(function () {
				eliminaCitta($(this).attr("id"));
			});
			$("#modifica" + citta.id).click(function () {
				infoCitta($(this).attr("id"));
			});
		}
	});
}

function ricercaCitta() {
	var xmlhttp = new XMLHttpRequest();
	var campoCity = $("#textRicercaCitta").val();
	var popolazioneMax = $("#popolazioneMax").val();
	var popolazioneMin = $("#popolazioneMin").val();

	var ricercaCittaObj = new Object();
	$("#indietroContinenti").show();
	ricercaCittaObj.name = campoCity;
	ricercaCittaObj.populationMax = popolazioneMax;
	ricercaCittaObj.populationMin = popolazioneMin;
	ricercaCittaObj.countryCode = $("#listaNazioniRicerca option:selected").attr("id");

	var jsonCitta = JSON.stringify(ricercaCittaObj);
	$.ajax({
		url: "/api/citta/ricerca",
		type: "POST",
		data: jsonCitta,
		contentType: "application/json",
		dataType: "json",
		success: function (citta) {
			console.log("data: " + citta);
			var tagDiv = $("#content");
			$("#formRicerca").hide();
			tagDiv.html("<div class='col-12'><h1 class='blu row justify-content-center'>Citta Trovate</h1>");
			for (var city of citta) {
				tagDiv.append("<div class='col-sm-6 col-lg-3 col-md-6 text-center'><div class=' card mb-4 box-shadow'>" +
				"<div class='card-body'>" + "<h5 class='card-title '>" + city.name + "</h5>" +
				"<p class='card-text'>Popolazione: " + city.population + "</p>");
			}
		}
	});
}

function eliminaCitta(id) {

	if (id.search("elimina") != -1) {

		id = id.slice(7, id.length);
	}
	$.post("/api/citta/" + id + "/elimina", function () {
		showCitta();
	});
}

function infoCitta(id) {

	var tagDiv = $("#content");
	var campoRegione = $("#textRegione");
	var campoCitta = $("#textCitta")
	var campoPopolazione = $("#textPopolazione");
	var bottoneModifica = $("#bottoneModifica");
	var bottoneInserisci = $("#bottoneInserisci");

	$("#formModifica").show();
	$("#inserisciCitta").hide();
	$("#formRicerca").hide();
	$("#indietroNazioni").hide();
	id=id.toString();
	if (id.search("modifica") != -1) {

		id = id.slice(8, id.length);
	}
	if (id != 0) {

		var inputHiddenId = $("#idCitta");

		$.get("/api/citta/" + id + "/find", function (jsonCity) {
			tagDiv.html("<div class='col-12'><h1 class ='blu row justify-content-center'> modifica di: " + jsonCity.name + "<h1>");
			bottoneModifica.show();
			bottoneInserisci.hide();
			campoRegione.val(jsonCity.district);
			campoCitta.val(jsonCity.name);
			campoPopolazione.val(jsonCity.population);
			$("#listaNazioniModifica option[id=" + jsonCity.countryCode + "]").attr("selected", "selected");
			inputHiddenId.val(id);
		});
	}
	else {
		tagDiv.html("<div class='col-12'><h1 class ='blu row justify-content-center'>Inserisci<h1></div>");
		bottoneModifica.hide();
		bottoneInserisci.show();
		campoPopolazione.val("");
		campoCitta.val("");
		campoRegione.val("");
		$("#listaNazioniModifica option[id='ABW']").attr("selected", "selected");

	}

}

function modificaCitta() {

	var campoCitta = $("#textCitta").val();
	var campoPopolazione = $("#textPopolazione").val();
	var campoRegione = $("#textRegione").val();
	var inputHiddenId = $("#idCitta").val();
	var jsonCitta = new Object();
	jsonCitta.population = campoPopolazione;
	jsonCitta.district = campoRegione;
	jsonCitta.name = campoCitta;
	jsonCitta.countryCode = $("#listaNazioniModifica option:selected").attr("id");
	jsonCitta.id = inputHiddenId;
	$("#codiceNazioneHidden").val(jsonCitta.countryCode);
	var jsonDaInserire = JSON.stringify(jsonCitta);

	$.ajax({
		url: "/api/citta/modifica",
		type: "POST",
		data: jsonDaInserire,
		contentType: "application/json",
		dataType: "json",
		success: function (successModify) {
			if (successModify != 0) {

				alert("modificato con successo!")
			}
			else {
				alert("Errore, modifica non riuscita");
			}
			showCitta();
		}
	});


}

function inserisciCitta() {


	var jsonCitta = new Object();
	var campoCitta = $("#textCitta").val();
	var campoPopolazione = $("#textPopolazione").val()
	var campoRegione = $("#textRegione").val();
	jsonCitta.population = campoPopolazione;
	jsonCitta.district = campoRegione;
	jsonCitta.name = campoCitta;
	jsonCitta.countryCode = $("#listaNazioniModifica option:selected").attr("id");
	$("#codiceNazioneHidden").val(jsonCitta.countryCode);

	var jsonDaInserire = JSON.stringify(jsonCitta);

	$.ajax({
		url: "/api/citta/insert",
		type: "POST",
		data: jsonDaInserire,
		contentType: "application/json",
		dataType: "json",
		success: function (successModify) {
			if (successModify != 0) {

				alert("Inserito con successo!");
			}
			else {
				alert("Errore, inserimento non riuscito");
			}
			showCitta();
		}
	});
}