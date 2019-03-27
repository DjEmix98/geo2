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
		tagDiv.html("<div class='col-12'><h1 class='blu row justify-content-center'>Continenti</h1></div>");
		for (var continente of continenti) {
			var idContinente = continente.split(" ");
			if (idContinente.length > 1) {
				idContinente = continente.replace(continente, idContinente[0] + idContinente[1]);
			}
			console.log("continente: " + continente);
			tagDiv.append("<div class='offset-lg-4 col-lg-4 col-md-12'><p id='" + idContinente + "' name = '" + continente 
			+ "' class= 'pointer col btn btn-success'>" + continente + "</p></div>");

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
		tagDiv.html("<div class='col-12'><h1 class='blu row justify-content-center'>Nazioni</h1>");
		for (nazione of nazioni) {

			tagDiv.append("<div class='col-sm-6 col-lg-3 col-md-6 text-center'><div class=' card mb-4 box-shadow'>" +
				"<div class='card-body'>" + "<h5 class='card-title '>" + nazione.name + "</h5>"
				+ "<p class='card-text'>Popolazione: " + nazione.population + "</p>" +
				"<a id='" + nazione.code + "' class='btn btn-info'>Esplora nazione!</a>" +
				"</div>" + "</div>"+"</div>");
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
			tagSelectModifica.append("<option name='" + nazione.name + "' class= 'btn btn-info dropdown-toggle' id='" + nazione.code + "'>" +
				nazione.name + "</option>");
			tagSelectRicerca.append("<option name='" + nazione.name + "' class= 'btn btn-info dropdown-toggle' id='" + nazione.code + "'>" +
				nazione.name + "</option>");
		}
	});
}

