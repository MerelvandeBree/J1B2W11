var container = document.getElementById("game-container");

var bttn1 = document.getElementById("button1");
var bttn2 = document.getElementById("button2");
var bttn3 = document.getElementById("button3");

var title = document.getElementById("title");
var description = document.getElementById("description");

var inventoryItem = false;

var invItem = document.getElementById('inventoryItem');

bttn1.onclick = button1;
bttn2.onclick = button2;
bttn3.onclick = button3;

function loadGame(){
	console.log("");

	container.style.background = "url(img/vis.jpg)";
	container.style.backgroundSize = "cover";

	title.innerHTML = "Nemo 8";

	description.innerHTML = "In dit spel speel je als een vis, die Gert heet. Je gaat op zoek naar een duif.";

	bttn1.innerHTML = "Start game!";

	bttn2.style.visibility = "hidden";
	bttn3.style.visibility = "hidden";

	invItem.style.visibility = "hidden";

	bttn1.onclick = oceaan;
}

function oceaan(){
	console.log("");

	container.style.background = "url(img/oceaan.jpg)";
	container.style.backgroundSize = "cover";

	title.style.visibility = "hidden";

	description.innerHTML = "Gert is lekker rondjes aan het zwemmen. Hij gaat op zoek naar een duif. Waar gaat Gert eerst zoeken?";

	bttn1.innerHTML = "Boven";
	bttn2.innerHTML = "Links";
	bttn3.innerHTML = "Rechts";

	bttn1.style.visibility = "visible";
	bttn2.style.visibility = "visible";
	bttn3.style.visibility = "visible";

	bttn1.onclick = boot;
	bttn2.onclick = haai;
	bttn3.onclick = blobvis;

	invItem.style.visibility = "visible";
	invItem.src = 'img/buis.png';
	invItem.onclick = pickupObject;
}

function pickupObject(){
	invItem.style.visibility = 'hidden';
	inventoryItem = true;
}

function haai(){
	console.log("");

	container.style.background = "url(img/haai.jpeg)";
	container.style.backgroundSize = "cover";

	title.style.visibility = "visible";
	title.innerHTML = "Je sterft";

	description.innerHTML = "Gert zwemt naar links. Daar komt hij een haai tegen. De haai eet hem op.";

	bttn1.style.visibility = "visible";
	bttn2.style.visibility = "hidden";
	bttn3.style.visibility = "hidden";

	bttn1.innerHTML = "Opnieuw beginnen?";
	bttn1.onclick = loadGame;
}

function blobvis(){
	console.log("");

	container.style.background = "url(img/blobvis.jpg)";
	container.style.backgroundSize = "cover";

	description.innerHTML = "Gert zwemt naar rechts. Daar komt hij een blobvis tegen. Ze besluiten een gesprek te voeren. Waar ga je het over hebben met de blobvis?";

	bttn1.style.visibility = "hidden";
	bttn2.style.visibility = "visible";
	bttn3.style.visibility = "visible";

	bttn2.innerHTML = "Heb je een duif gezien?";
	bttn3.innerHTML = "Heb je honger?";

	bttn2.onclick = gesprekBlobvis;
	bttn3.onclick = hongerBlobvis;
}

function gesprekBlobvis(){
	console.log("");

	container.style.background = "url(img/blobvis3.jpeg)";
	container.style.backgroundSize = "cover";

	description.innerHTML =  "De blobvis zegt dat hij de duif gezien heeft. Hij zag hem voor het laatst vliegen boven de boot. Om de boot in te komen moet je wel eerst een stalen buis vinden."

	bttn1.style.visibility = "hidden";
	bttn2.style.visibility = "visible";
	bttn3.style.visibility = "visible";

	bttn2.innerHTML = "Zoek de boot!!";
	bttn3.innerHTML = "Wees koppig, zwem door";

	bttn2.onclick = oceaan;
	bttn3.onclick = kant;
}

function kant(){
	console.log("");

	container.style.background = "url(img/kant.jpeg)";
	container.style.backgroundSize = "cover";

	description.innerHTML = "Gert besluit door te zwemmen. Hij belandt in een stroming en stroomt aan op een strant. Hier wordt hij opgegeten door raven.";

	title.style.visibility = "visible";
	title.innerHTML = "Je sterft";

	bttn1.style.visibility = "visible";
	bttn2.style.visibility = "hidden";
	bttn3.style.visibility = "hidden";

	bttn1.innerHTML = "Opnieuw beginnen?";
	bttn1.onclick = loadGame;
}

function hongerBlobvis(){
	console.log("");

	container.style.background = "url(img/blobvis2.png)";
	container.style.backgroundSize = "cover";

	title.style.visibility = "visible";
	title.innerHTML = "Je sterft";

	description.innerHTML = "De blobvis bedenkt zich dat hij inderdaad erge honger heeft. Hij blobt je."

	bttn1.style.visibility = "visible";
	bttn2.style.visibility = "hidden";
	bttn3.style.visibility = "hidden";

	bttn1.innerHTML = "Opnieuw beginnen?";
	bttn1.onclick = loadGame;
}

function boot(){
	console.log("");

	container.style.background = "url(img/boot.jpg)";
	container.style.backgroundSize = "cover";

	description.innerHTML = "Gert komt aan bij een hele grote vissersboot. Gaat hij naar de zijkant of achterkant van de boot?";

	bttn1.style.visibility = "visible";
	bttn2.style.visibility = "visible";
	bttn3.style.visibility = "visible";

	bttn1.innerHTML = "Zijkant";
	bttn2.innerHTML = "Achterkant";
	bttn3.innerHTML = "Terug!!!!!!!!";

	bttn1.onclick = zijkantBoot;
	bttn2.onclick = decision;
	bttn3.onclick = oceaan;
}

function decision(){
	if (inventoryItem == false){
		bttn2.onclick = achterkantBootDood;
	}
	else if (inventoryItem == true) {		
		bttn2.onclick = achterkantBootLeven;
	}
}

function zijkantBoot(){
	console.log("");

	container.style.background = "url(img/vissersnet.png)";
	container.style.backgroundSize = "cover";

	title.style.visibility = "visible";
	title.innerHTML = "Je sterft";

	description.innerHTML = "Gert zwemt naar de zijkant van de boot. Hij raakt hier verstrikt in een vissersnet.";

	bttn1.style.visibility = "visible";
	bttn2.style.visibility = "hidden";
	bttn3.style.visibility = "hidden";

	bttn1.innerHTML = "Opnieuw beginnen?";
	bttn1.onclick = loadGame;
}

function achterkantBootDood(){
	console.log("");

	container.style.background = "url(img/motor.png)";
	container.style.backgroundSize = "cover";

	title.style.visibility = "visible";
	title.innerHTML = "Je sterft";

	description.innerHTML = "Je zwemt naar de achterkant van de boot. Daar zie je de motor. Gert besluit de motor in te zwemmen en sterft.";

	bttn1.style.visibility = "visible";
	bttn2.style.visibility = "hidden";
	bttn3.style.visibility = "hidden";

	bttn1.innerHTML = "Opnieuw beginnen?";
	bttn1.onclick = loadGame;
}

function achterkantBootLeven(){
	console.log("");

	container.style.background = "url(img/motor.png)";
	container.style.backgroundSize = "cover";

	description.innerHTML = "Gert zwemt naar de achterkant van de boot. Daar ziet hij de motor. <br> Hij wordt naar de motor getrokken, en moet nu snel kiezen!";

	bttn1.style.visibility = "hidden";
	bttn2.style.visibility = "visible";
	bttn3.style.visibility = "visible";

	bttn2.innerHTML = "Plaats de buis in de motor";
	bttn3.innerHTML = "Zwem de motor in";

	bttn2.onclick = duif;
	bttn3.onclick = achterkantBootDood;
}

function duif(){
	console.log("");

	container.style.background = "url(img/duif.png)";
	container.style.backgroundSize = "cover";

	title.style.visibility = "visible";
	title.innerHTML = "Je hebt de duif gevonden!!";

	description.innerHTML = "Gert zwemt naar boven en vindt daar de duif.";

	bttn1.style.visibility = "visible";
	bttn2.style.visibility = "hidden";
	bttn3.style.visibility = "hidden";

	bttn1.innerHTML = "Nog een keer spelen?";
	bttn1.onclick = loadGame;
}


loadGame();