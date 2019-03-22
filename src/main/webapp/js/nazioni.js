/**
 * 
 */
function showContinenti() {

	$("#formRicerca").show();
	$("#formModifica").hide();
	$("#indietroContinenti").hide();
	$("#indietroNazioni").hide();
	$("#inserisciCitta").hide();
	$.get("/api/nazioni/continenti", function (continenti, status) {
		var inputHidden = $("#continente");//document.getElementById("continente");
		var tagDiv = $("#content");
		tagDiv.html("<h1 class='intestazioni'>Continenti</h1>");
		for (var continente of continenti) {
			var idContinente = continente.split(" ");
			if (idContinente.length > 1) {
				idContinente = continente.replace(continente, idContinente[0] + idContinente[1]);
			}
			console.log("continente: " + continente);
			tagDiv.append("<p id='" + idContinente + "' name = '" + continente + "' class= 'bottoni verde'>" + continente + "</p>");
			$("#" + idContinente).click(function () {

				console.log("continente: " + $(this).attr("name"));
				inputHidden.val($(this).attr("name"));
				showNazioni();
			});

		}
	});
}

function showNazioni() {

	var continente = $("#continente").val();
	$("#formRicerca").hide();
	$("#indietroContinenti").show();
	$("#indietroNazioni").hide();
	$("#inserisciCitta").hide();

	$.get("/api/nazioni/by-continent?continente=" + continente, function (nazioni, status) {

		var tagDiv = $("#content")
		var codiceNazione = $("#codiceNazioneHidden");
		tagDiv.html("<h1 class='intestazioni'>Nazioni</h1>");
		var contatoreId = 0;
		for (nazione of nazioni) {

			tagDiv.append("<p id=" + nazione.code + " class= 'bottoni giallo'>" + nazione.name +
				"Popolazione: " + nazione.population + "</p>");
			$("#" + nazione.code).click(function () {
				codiceNazione.val($(this).attr("id"));
				showCitta();
			});
		}
	});
}
function getAllNazioni() {

	$.get("/api/nazioni/list-all", function (nazioni, status) {

		var tagSelectRicerca = $("#listaNazioniRicerca");
		var tagSelectModifica = $("#listaNazioniModifica");
		for (var nazione of nazioni) {
			tagSelectModifica.append("<option name='" + nazione.name + "' id='" + nazione.code + "'>" +
				nazione.name + "</option>");
			tagSelectRicerca.append("<option name='" + nazione.name + "' id='" + nazione.code + "'>" +
				nazione.name + "</option>");
		}
	});
}

