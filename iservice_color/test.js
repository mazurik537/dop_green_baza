
 		document.getElementById("color").value = localStorage["color"];
function color_t () {
	localStorage["color"] = document.getElementById("color").value;
}

document.getElementsByClassName("bt_color")[0].onclick = color_t;