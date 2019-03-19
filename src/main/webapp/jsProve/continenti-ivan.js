function showContinents() {
	console.log("CIAO EMMANUEL");
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var continents = JSON.parse(this.responseText);
			var htmlGen = "";
			for(var c of continents){
				htmlGen += "<p>"+c+"</p>";
			}
			document.getElementById("content").innerHTML = htmlGen;
		}
	};
	xmlhttp.open("GET", "/api/nazioni/continenti",
			true);
	xmlhttp.send();
}