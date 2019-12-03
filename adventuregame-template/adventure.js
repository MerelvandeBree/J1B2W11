var container = document.getElementById("game-container");

var bttn1 = document.getElementById("button1");
var bttn2 = document.getElementById("button2");
var bttn3 = document.getElementById("button3");

var title = document.getElementById("title");
var description = document.getElementById("description");

bttn1.onclick = button1;
bttn2.onclick = button2;
bttn3.onclick = button3;

var item = document.getElementById("inventoryItem");


function loadGame(){
	console.log("");

	container.style.background = "url(img/vis.jpg)";
	container.style.backgroundSize = "cover";

	title.innerHTML = "Nemo 8";

	description.innerHTML = "In dit spel speel je als een vis, die Gert heet. Je gaat op zoek naar een duif.";

	bttn1.innerHTML = "Start game!";

	bttn2.style.visibility = "hidden";
	bttn3.style.visibility = "hidden";

	item.style.visibility = "hidden";

	bttn1.onclick = oceaan;
}

function oceaan(){
	console.log("");

	container.style.background = "url(img/oceaan.jpg)";
	container.style.backgroundSize = "cover";

	title.style.visibility = "hidden";

	description.innerHTML = "Gert is lekker rondjes aan het zwemmen. Hij gaat op zoek een duif. Waar gaat Gert eerst zoeken?";
	description.style.position = "absolute";

	bttn1.innerHTML = "Boven";
	bttn2.innerHTML = "Links";
	bttn3.innerHTML = "Rechts";

	bttn2.style.visibility = "visible";
	bttn3.style.visibility = "visible";

	bttn1.onclick = boot;
	// bttn2.onclick = ;
}

function boot(){
	console.log("");

	container.style.background = "url(img/boot.jpg)";
	container.style.backgroundSize = "cover";

	description.innerHTML = "Gert komt aan bij een hele grote vissersboot. Gaat hij naar de zijkant of achterkant van de boot?";
	description.style.position = "absolute";

	bttn3.style.visibility = "visible";

	bttn1.innerHTML = "Zijkant";
	bttn2.innerHTML = "Achterkant";
	bttn3.innerHTML = "Terug!!!!!!!!";

	// bttn1.onclick = ;
	// bttn2.onclick = ;
	bttn3.onclick = oceaan;
}

function died(){
	console.log("");

	container.style.background = "url(img/.jpg)";
	container.style.backgroundSize = "cover";

	title.style.visibility = "visible";

	bttn1.innerHTML = "Nog een keer proberen?";
	bttn1.style.visibility = "visible";
	bttn1.onclick = loadGame;
}

loadGame();