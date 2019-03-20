/**
 * 
 */
function showContinenti(){

	var xmlhttp = new XMLHttpRequest();
	document.getElementById("formRicerca").style.display="block";
	document.getElementById("formModifica").style.display="none";

	xmlhttp.onreadystatechange = function(){
		if(this.readyState==4 && this.status==200){
			var inputHidden = document.getElementById("continente");
			var continenti = JSON.parse(this.responseText);
			var tagDiv = document.getElementById("content");
			tagDiv.innerHTML="<h1>Continenti</h1>";
			for(var continente of continenti){

				var tagP = document.createElement("p");
				tagP.setAttribute("name", continente);
				tagP.setAttribute("class", "continenti");
				tagP.addEventListener("click",function(){
					inputHidden.setAttribute("value",this.getAttribute("name"));
					showNazioni(this.getAttribute("name"));
				});
				tagP.innerHTML = continente;
				tagDiv.appendChild(tagP);
			}
		}
	};
	xmlhttp.open("GET","/api/nazioni/continenti",true);
	xmlhttp.send();
}

function showNazioni(continente){

	var xmlhttp = new XMLHttpRequest();
	document.getElementById("formRicerca").style.display="none";
	xmlhttp.onreadystatechange = function(){

		if(this.readyState==4 && this.status==200){

			var nazioni = JSON.parse(this.responseText);
			var tagDiv = document.getElementById("content");
			var tastoIndietro = document.createElement("p");
			tastoIndietro.innerHTML="Torna indietro";
			tastoIndietro.addEventListener("click", function(){showContinenti();});
			tastoIndietro.style.color="blue";
			tastoIndietro.setAttribute("class", "tastoIndietro");
			tagDiv.innerHTML="<h1>Nazioni</h1>";
			tagDiv.appendChild(tastoIndietro);
			for(nazione of nazioni){

				var tagP= document.createElement("p");
				tagP.setAttribute("name",nazione.name);
				tagP.setAttribute("id",nazione.code);
				tagP.setAttribute("class", "nazioni");
				tagP.addEventListener("click",function(){
					showCitta(this.getAttribute("id"));
				});

				tagP.innerHTML=nazione.name+"&nbsp;&nbsp;&nbsp;&nbsp;Popolazione: "+nazione.population;
				tagDiv.appendChild(tagP);
			}
		}
	};
	xmlhttp.open("GET","/api/nazioni/by-continent?continente="+continente,true);
	xmlhttp.send();
}
function getAllNazioni(){

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var nazioni = JSON.parse(this.responseText);
			var tagSelectRicerca = document.getElementById("listaNazioniRicerca");
			var tagSelectModifica = document.getElementById("listaNazioniModifica");
			for(var nazione of nazioni){
				var tagOption = document.createElement("option");
				tagOption.innerHTML = nazione.name;
				tagOption.setAttribute("name",nazione.name);
				tagOption.setAttribute("id",nazione.code);
				tagSelectRicerca.appendChild(tagOption);
				tagSelectModifica.appendChild(tagOption.cloneNode(true));
			}
		}
	};
	xmlhttp.open("GET","/api/nazioni/list-all",true);
	xmlhttp.send();
}

