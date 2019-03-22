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
		tagDiv.html("<h1 class='intestazioni'>Citta</h1>");
		for (citta of city) {

			tagDiv.append("<p class= 'bottoni viola'>" + citta.name +
				"<a id='modifica" + citta.id + "'class='bianco' name='" + citta.id + "'>&nbsp;&nbsp;Modifica</a>"
				+ "<a id='elimina" + citta.id + "'class='rosso'name='" + citta.id + "'>&nbsp;&nbsp;Elimina</a>" + "</p>");
			$("#elimina" + citta.id).click(function () {
				eliminaCitta($(this).attr("name"));
			});
			$("#modifica" + citta.id).click(function () {
				infoCitta($(this).attr("name"));
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
	document.getElementById("indietroContinenti").style.display = "block";
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
			//xmlhttp.onreadystatechange = function(){
			//	if(this.readyState==4 && this.status==200){
			//	var citta = JSON.parse(this.responseText);
			console.log("data: " + citta);
			var tagDiv = $("#content");
			$("#formRicerca").hide();
			tagDiv.html("<h1 class='intestazioni'>Citta trovate</h1>");
			for (var city of citta) {
				tagDiv.append("<p class= 'bottoni verde' >" + city.name + " Popolazione: " + city.population + "</p>");
			}
		}
	});
	//}
	//};
	/*xmlhttp.open("POST","/api/citta/ricerca");
	xmlhttp.setRequestHeader("Content-Type", "application/json");
	xmlhttp.send(jsonCitta);*/
}

function eliminaCitta(id, codiceNazione) {

	$.post("/api/citta/" + id + "/elimina", function () {
		showCitta(codiceNazione);
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
	tagDiv.html("");
	if (id != 0) {

		var inputHiddenId = $("#idCitta");

		$.get("/api/citta/" + id + "/find", function (jsonCity) {
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

				alert("Inserito con successo!")
			}
			else {
				alert("Errore, inserimento non riuscito");
			}
			showCitta();
		}
	});
}