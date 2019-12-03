var dagen = [" maandag ", " dinsdag ", " woensdag ", " donderdag ", " vrijdag ", " zaterdag ", " zondag "];

for (var i = 0; i <= 7; i++) {
	document.getElementById("alleDagen").innerHTML = dagen;
}

for (var i = 0; i < 5; i++) {
	document.getElementById("werkDagen").innerHTML += dagen[i];
}

for (var i = 6; i <= 7; i++) {
	document.getElementById("weekendDagen").innerHTML += dagen.splice(5, 7);
}
dagen.push(" zaterdag ", " zondag ");

dagen.reverse();
for (var i = 0; i <= 7; i++) {
	document.getElementById("omgekeerdeDagen").innerHTML = dagen;
}

for (var i = 2; i < 7; i++) {
	document.getElementById("omgekeerdeWerkDagen").innerHTML += dagen[i];
}

for (var i = 0; i < dagen.length-5; i++) {
	document.getElementById("omgekeerdeWeekendDagen").innerHTML += dagen[i];
}