/**
 * 
 */
function showContinenti(){

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
		if(this.readyState==4 && this.status==200){

			var continenti = JSON.parse(this.responseText);
			var tagDiv = document.getElementById("content");
			tagDiv.innerHTML="<h1>Continenti</h1>";
			for(var continente of continenti){

				var tagP = document.createElement("p");
				tagP.setAttribute("name", continente);
				tagP.addEventListener("click",function(){
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
	xmlhttp.onreadystatechange = function(){	
		if(this.readyState==4 && this.status==200){

			var nazioni = JSON.parse(this.responseText);
			var tagDiv = document.getElementById("content");
			tagDiv.innerHTML="<h1>Nazioni</h1>";
			for(nazione of nazioni){

				var tagP= document.createElement("p");
				tagP.setAttribute("name",nazione.name);
				tagP.setAttribute("id",nazione.code);
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