/**
 * 
 */
function showCitta(nazione){

	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function(){
		if(this.readyState==4 && this.status==200){

			var city = JSON.parse(this.responseText);
			var tagDiv = document.getElementById("content");
			tagDiv.innerHTML = "<h1>Citta</h1>";
			for(citta of city){

				var tagP = document.createElement("p");
				tagP.setAttribute("name",citta.name);
				tagP.innerHTML=citta.name+"&nbsp;&nbsp;&nbsp;&nbsp; Popolazione: "+citta.population+
				"&nbsp;&nbsp;&nbsp;&nbsp; Regione: "+citta.district;
				tagDiv.appendChild(tagP);
			}
		}
	};
	xmlhttp.open("GET","/api/citta/"+nazione+"/list");
	xmlhttp.send();
}