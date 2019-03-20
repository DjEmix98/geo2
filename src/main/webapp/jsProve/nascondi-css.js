/**
 * 
 */

function hide(){
	
	var tagDiv = document.getElementById("content");
	var tagP = document.createElement("p");
	tagP.innerHTML="Clicca qui per farlo sparire";
	tagP.addEventListener("click",function(){tagP.style.display="none"});
	tagDiv.appendChild(tagP);
}