/**
 * aaaa
 */
function showCitta(codiceNazione){

	var xmlhttp = new XMLHttpRequest();
	document.getElementById("formRicerca").style.display="none";
	document.getElementById("formModifica").style.display="none";
	document.getElementById("content").style.display="block";
	document.getElementById("codiceNazione").value = codiceNazione;
	xmlhttp.onreadystatechange = function(){
		if(this.readyState==4 && this.status==200){

			var city = JSON.parse(this.responseText);
			var tagDiv = document.getElementById("content");
			var tastoIndietro = document.createElement("p");
			var inputHidden = document.getElementById("continente");
			var TastoInserisciCitta = document.createElement("p");
			TastoInserisciCitta.setAttribute("class","tastoInserisciCitta");
			tastoIndietro.style.color="blue";
			tastoIndietro.setAttribute("class","tastoIndietro");
			tastoIndietro.addEventListener("click", function(){
				showNazioni(showNazioni(inputHidden.getAttribute("value")));
			});
			TastoInserisciCitta.addEventListener("click", function(){
				infoCitta (0);
			})
			tastoIndietro.innerHTML="Torna indietro";
			TastoInserisciCitta.innerHTML="Inserisci citta";
			tagDiv.innerHTML = "<h1>Citta</h1>";
			tagDiv.appendChild(tastoIndietro);
			tagDiv.appendChild(TastoInserisciCitta);
			for(citta of city){
				var tastoModifica = document.createElement("a");
				var tastoElimina = document.createElement("a");
				var tagP = document.createElement("p");
				tagP.setAttribute("name",citta.name);
				tagP.setAttribute("class","citta");
				tagP.innerHTML=citta.name+"&nbsp;&nbsp;&nbsp;&nbsp; Popolazione: "+citta.population+
				"&nbsp;&nbsp;&nbsp;&nbsp; Regione: "+citta.district;
				tastoElimina.innerHTML="&nbsp;&nbsp;&nbsp;&nbsp; Elimina";
				tastoElimina.setAttribute("id",citta.id);
				tastoElimina.setAttribute("class","elimina");
				tastoElimina.addEventListener("click", function(){

					eliminaCitta(this.getAttribute("id"),codiceNazione);
				});
				tastoModifica.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp; Modifica";
				tastoModifica.setAttribute("id",citta.id);
				tastoModifica.setAttribute("class","modifica");
				tastoModifica.addEventListener("click", function(){
					infoCitta(this.getAttribute("id"), codiceNazione);
				});
				tagP.appendChild(tastoModifica);
				tagP.appendChild(tastoElimina);
				tagDiv.appendChild(tagP);
			}
		}
	};
	xmlhttp.open("GET","/api/citta/"+codiceNazione+"/list",true);
	xmlhttp.send();
}

function ricercaCitta(){
	var xmlhttp = new XMLHttpRequest();
	var campoCity = document.getElementById("textRicercaCitta");
	var popolazioneMax = document.getElementById("popolazioneMax").value;
	var popolazioneMin = document.getElementById("popolazioneMin").value;
	var tagOption = document.getElementsByTagName("option");
	var ricercaCittaObj = new Object();
	ricercaCittaObj.name = campoCity.value;
	ricercaCittaObj.populationMax = popolazioneMax;
	ricercaCittaObj.populationMin = popolazioneMin;
	for(var i=0;i<tagOption.length;i++){

		if(tagOption[i].selected==true){

			ricercaCittaObj.countryCode=tagOption[i].getAttribute("id");
			break;
		}
	}
	var jsonCitta = JSON.stringify(ricercaCittaObj);
	xmlhttp.onreadystatechange = function(){
		if(this.readyState==4 && this.status==200){
			var citta = JSON.parse(this.responseText);
			var tagDiv = document.getElementById("content");
			var tastoIndietro = document.createElement("p");
			var inputHidden = document.getElementById("continente").value;
			tastoIndietro.style.color="blue";
			tastoIndietro.addEventListener("click", function(){
				showContinenti();
			});
			tastoIndietro.innerHTML="Torna indietro";
			tastoIndietro.setAttribute("class","tastoIndietro");
			document.getElementById("formRicerca").style.display="none";
			tagDiv.innerHTML = "<h1>Citta trovate</h1>";
			tagDiv.appendChild(tastoIndietro);
			for(var city of citta){
				var tagP = document.createElement("p");
				tagP.setAttribute("class","citta");
				tagP.innerHTML = city.name+"&nbsp;&nbsp;&nbsp;&nbsp; Popolazione: "+city.population;
				tagDiv.appendChild(tagP);
			}

		}
	};
	xmlhttp.open("POST","/api/citta/ricerca");
	xmlhttp.setRequestHeader("Content-Type", "application/json");
	xmlhttp.send(jsonCitta);
}

function eliminaCitta(id, codiceNazione){

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){

		if(this.readyState==4 && this.status==200){

			showCitta(codiceNazione);
		}
	}
	xmlhttp.open("POST","/api/citta/"+id+"/elimina",true);
	xmlhttp.send();
}

function infoCitta(id){
	var formModifica = document.getElementById("formModifica");
	formModifica.style.display="block";
	document.getElementById("formRicerca").style.display="none";
	document.getElementById("content").style.display="none";
	var campoRegione = document.getElementById("textRegione");
	var campoCitta = document.getElementById("textCitta");
	var campoPopolazione = document.getElementById("textPopolazione");
	var tagSelect = document.getElementById("listaNazioniModifica");
	var tagOption = tagSelect.getElementsByTagName("option");
	var bottoneModifica = document.getElementById("bottoneModifica");
	var bottoneInserisci = document.getElementById("bottoneInserisci");
	var bottoneIndietro = document.getElementById("indietroModifica");
	var inputHiddenCodiceNazione = document.getElementById("codiceNazione");
	bottoneIndietro.addEventListener("click", function(){
		showCitta(inputHiddenCodiceNazione);
	});
	if(id!=0){

		var xmlhttp = new XMLHttpRequest();
		var inputHiddenId = document.getElementById("idCitta");
		xmlhttp.onreadystatechange = function(){

			if(this.readyState==4 && this.status == 200){

				var jsonCity = JSON.parse(this.responseText);
				bottoneModifica.style.display="block";
				bottoneInserisci.style.display = "none";
				campoRegione.value = jsonCity.district;
				campoCitta.value = jsonCity.name;
				campoPopolazione.value = jsonCity.population;
				for(var i=0;i<tagOption.length;i++){
					if(tagOption[i].getAttribute("id")==jsonCity.countryCode){
						tagOption[i].selected=true;
						break;
					}
				}
				inputHiddenId.value = id;
			}
		};

		xmlhttp.open("GET","/api/citta/"+id+"/find",true);
		xmlhttp.send();
	}
	else{

		bottoneModifica.style.display="none";
		bottoneInserisci.style.display = "block";
		campoPopolazione.value="";
		campoCitta.value="";
		campoRegione.value="";
		tagOption[0].selected=true;

	}

}

function modificaCitta(){

	var xmlhttp = new XMLHttpRequest();
	var bottoneModifica = document.getElementById("bottoneModifica");
	var campoCitta = document.getElementById("textCitta");
	var campoPopolazione = document.getElementById("textPopolazione");
	var campoRegione = document.getElementById("textRegione");
	var campoNazione = document.getElementById("listaNazioniModifica");
	var tagSelect = document.getElementById("listaNazioniModifica");
	var tagOption = tagSelect.getElementsByTagName("option");
	var inputHiddenId = document.getElementById("idCitta").value;
	var jsonCitta = new Object();
	jsonCitta.population = campoPopolazione.value;
	jsonCitta.district = campoRegione.value;
	jsonCitta.name = campoCitta.value;
	for(var i=0;i<tagOption.length;i++){

		if(tagOption[i].selected==true){
			jsonCitta.countryCode =	tagOption[i].getAttribute("id");
			break;
		}
	}
	jsonCitta.id = inputHiddenId;		
	var jsonDaInserire = JSON.stringify(jsonCitta);
	xmlhttp.onreadystatechange = function(){

		if(this.readyState==4 && this.status == 200){

			var successModify = JSON.parse(this.responseText);
			if(successModify!=0){

				alert("modificato con successo!")
			}
			else{
				alert("Errore, modifica non riuscita");
			}
			showCitta(jsonCitta.countryCode);
		}
	};

	xmlhttp.open("POST","/api/citta/modifica",true);
	xmlhttp.setRequestHeader("Content-Type", "application/json");
	xmlhttp.send(jsonDaInserire);

}

function inserisciCitta(){

	var xmlhttp = new XMLHttpRequest();
	var jsonCitta = new Object();
	var campoCitta = document.getElementById("textCitta");
	var campoPopolazione = document.getElementById("textPopolazione");
	var campoRegione = document.getElementById("textRegione");
	var campoNazione = document.getElementById("listaNazioniModifica");
	var tagSelect = document.getElementById("listaNazioniModifica");
	var tagOption = tagSelect.getElementsByTagName("option");
	jsonCitta.population = campoPopolazione.value;
	jsonCitta.district = campoRegione.value;
	jsonCitta.name = campoCitta.value;
	for(var i=0;i<tagOption.length;i++){

		if(tagOption[i].selected==true){
			jsonCitta.countryCode =	tagOption[i].getAttribute("id");
			break;
		}
	}
	var jsonDaInserire = JSON.stringify(jsonCitta);
	xmlhttp.onreadystatechange = function(){

		if(this.readyState==4 && this.status == 200){

			var successModify = JSON.parse(this.responseText);
			if(successModify!=0){

				alert("Inserito con successo!")
			}
			else{
				alert("Errore, inserimento non riuscito");
			}
			showCitta(jsonCitta.countryCode);
		}
	}
	xmlhttp.open("POST","/api/citta/insert",true);
	xmlhttp.setRequestHeader("Content-Type", "application/json");
	xmlhttp.send(jsonDaInserire);
}