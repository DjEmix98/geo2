/**
 * 
 */
var i = 0;

		function inserisci() {
			var aTag = document.createElement("span");
			var elemento = document.createElement("div");
			var brTag = document.createElement("br");
			var bottoneElimina = document.createElement("button");
			aTag.innerHTML = "&nbsp;&nbsp;"
					+ document.getElementById("testo").value;
			elemento.setAttribute("id", i);
			bottoneElimina.addEventListener("click", function() {
				elimina(elemento.getAttribute("id"))
			});
			bottoneElimina.innerHTML = "Elimina";
			document.body.appendChild(elemento);
			elemento.appendChild(bottoneElimina);
			elemento.appendChild(aTag);
			elemento.appendChild(brTag);
			i++;
		}

		function elimina(id) {
			var elemento = document.getElementById(id).remove();
			//elemento.parentNode.removeChild(elemento);
		}