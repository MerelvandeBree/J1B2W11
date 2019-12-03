var arrayEen = [1,2,3,4,5,6,7,8,9,10];
var arrayTwee = [2,4,6,8,10,12,14,16,18,20];

function optellen(arrayEen, arrayTwee) {
    for(var i = 0; i < arrayEen.length; i++){
        var amount = arrayEen[i] + arrayTwee[i]
	    document.getElementById('plus').innerHTML += arrayEen[i] + " + " + arrayTwee[i] + " = " + parseInt(amount) + "<br>"
    }
}

function aftrekken(arrayTwee, arrayEen) {
    for(var i = 0; i < arrayEen.length; i++){
        var amount = arrayTwee[i] - arrayEen[i]
	    document.getElementById('min').innerHTML += arrayTwee[i] + " - " + arrayEen[i] + " = " + parseInt(amount) + "<br>"
    }
}

function vermenigvuldigen(arrayEen, arrayTwee) {
    for(var i = 0; i < arrayEen.length; i++){
        var amount = arrayEen[i] * arrayTwee[i]
	    document.getElementById('keer').innerHTML += arrayEen[i] + " * " + arrayTwee[i] + " = " + parseInt(amount) + "<br>"
    }
}

function gedeelddoor(arrayTwee, arrayEen) {
    for(var i = 0; i < arrayEen.length; i++){
        var amount = arrayTwee[i] / arrayEen[i]
	    document.getElementById('delen').innerHTML += arrayTwee[i] + " / " + arrayEen[i] + " = " + parseInt(amount) + "<br>"
    }
}


optellen(arrayEen, arrayTwee);
aftrekken(arrayTwee, arrayEen);
vermenigvuldigen(arrayEen, arrayTwee);
gedeelddoor(arrayTwee, arrayEen);