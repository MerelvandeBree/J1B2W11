var cijfers = [1,2,3,4,5,6,7,8,9,10];
var tafelCijfers = [2,4,6];

function tafel2(cijfers, tafelCijfers) {
    for(var i = 0; i < cijfers.length; i++){
        var amount = cijfers[i] * tafelCijfers[0]
	    document.getElementById('keer2').innerHTML += cijfers[i] + " * " + tafelCijfers[0] + " = " + parseInt(amount) + "<br>"
    }
}

function tafel4(cijfers, tafelCijfers) {
    for(var i = 0; i < cijfers.length; i++){
        var amount = cijfers[i] * tafelCijfers[1]
	    document.getElementById('keer4').innerHTML += cijfers[i] + " * " + tafelCijfers[1] + " = " + parseInt(amount) + "<br>"
    }
}

function tafel6(cijfers, tafelCijfers) {
    for(var i = 0; i < cijfers.length; i++){
        var amount = cijfers[i] * tafelCijfers[2]
	    document.getElementById('keer6').innerHTML += cijfers[i] + " * " + tafelCijfers[2] + " = " + parseInt(amount) + "<br>"
    }
}

tafel2(cijfers, tafelCijfers);
tafel4(cijfers, tafelCijfers);
tafel6(cijfers, tafelCijfers);